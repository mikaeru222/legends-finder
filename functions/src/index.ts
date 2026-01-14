// functions/src/index.ts
import { setGlobalOptions } from "firebase-functions/v2/options";
import { onCall, HttpsError } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import * as admin from "firebase-admin";

// Firebase Admin 初期化
if (!admin.apps.length) {
  admin.initializeApp();
}

// 管理者メール（既存仕様そのまま）
const ADMIN_ALLOW = [
  "mikaeru222@gmail.com",
  "yuutodayo222@gmail.com",
];



// ▼▼▼ ここから追加 ▼▼▼

// 管理者以外を全員「使えない」にする命令
export const adminDisableAllNonAdmins = onCall({ cors: true }, async (request) => {
  const email = request.auth?.token?.email;
  if (!email || !ADMIN_ALLOW.includes(email)) {
    throw new HttpsError("permission-denied", "管理者のみ実行できます");
  }

  const db = admin.firestore();
  const usersSnap = await db.collection("users").get();

  const batch = db.batch();

  usersSnap.docs.forEach((doc) => {
    const data = doc.data();
    const userEmail = (data.email || "").toLowerCase();

    // 管理者2人はそのまま
    if (ADMIN_ALLOW.includes(userEmail)) return;

    // それ以外は「使えない」にする
    batch.set(doc.ref, { enabled: false }, { merge: true });
  });

  await batch.commit();

  return { ok: true };
});

// ▲▲▲ ここまで追加 ▲▲▲


// ★ ここで「全弾が使える期間（日数）」を決める
//   とりあえず 30日間 全弾OK にしておく（あとで数字だけ変えればOK）
const TRIAL_DAYS = 30;

// Functions 共通設定
setGlobalOptions({
  region: "asia-northeast1",
  maxInstances: 10,
});



// ==============================
// 管理者：ユーザー作成（有効期限付き）
// ==============================
export const adminCreateUser = onCall({ cors: true }, async (request) => {
  const callerEmail = request.auth?.token?.email as string | undefined;
  if (!callerEmail) {
    throw new HttpsError("unauthenticated", "ログインが必要です。");
  }
  if (ADMIN_ALLOW.length && !ADMIN_ALLOW.includes(callerEmail)) {
    throw new HttpsError("permission-denied", "管理者権限がありません。");
  }

  const { email, password, displayName } = (request.data ?? {}) as {
    email?: string;
    password?: string;
    displayName?: string;
  };

  if (!email || !password) {
    throw new HttpsError("invalid-argument", "email と password は必須です。");
  }

  try {
    // ① Auth に登録
    const user = await admin.auth().createUser({
      email,
      password,
      displayName,
      disabled: false,
    });

        // ★ ② validUntil を計算（今から TRIAL_DAYS 日後）
    const now = admin.firestore.Timestamp.now();
    const validUntil = admin.firestore.Timestamp.fromMillis(
      now.toMillis() + TRIAL_DAYS * 24 * 60 * 60 * 1000,
    );

    // ④ Firestore: users（★ validUntil を保存）
    await admin
      .firestore()
      .collection("users")
      .doc(user.uid)
      .set(
        {
          email,
          name: displayName ?? null,
          createdBy: callerEmail,
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
          validUntil,
        },
        { merge: true },
      );


    // ④ Firestore: users（★ validUntil を保存）
    await admin
      .firestore()
      .collection("users")
      .doc(user.uid)
      .set(
        {
          email,
          name: displayName ?? null,
          createdBy: callerEmail,
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
          validUntil,
        },
        { merge: true },
      );

    logger.info("Admin created user", {
      callerEmail,
      newUid: user.uid,
    });

    return { uid: user.uid };
  } catch (err: any) {
    logger.error("adminCreateUser failed", err);
    throw new HttpsError(
      "internal",
      err?.message ?? "作成に失敗しました。",
    );
  }
});


// ======================================================
// ★ 管理者：新弾（CXxxx）削除
// ======================================================
export const adminDeleteCxSet = onCall({ cors: true }, async (request) => {
  const callerEmail = request.auth?.token?.email as string | undefined;
  if (!callerEmail) {
    throw new HttpsError("unauthenticated", "ログインが必要です。");
  }
  if (ADMIN_ALLOW.length && !ADMIN_ALLOW.includes(callerEmail)) {
    throw new HttpsError("permission-denied", "管理者権限がありません。");
  }

  const { fam } = (request.data ?? {}) as { fam?: string };

  // 事故防止：英字+数字（例: CX101 / EY02 / FB1 / P08）だけ許可
  if (!fam || !/^[A-Z]+\d+$/i.test(fam)) {
    throw new HttpsError(
      "invalid-argument",
      "fam は 'CX101' / 'EY02' / 'FB1' / 'P08' のような形式で指定してください。",
    );
  }
  const famNorm = fam.toUpperCase();

  try {
    // ★ ゴミ箱方式（ソフトデリート）
    // - Firestore は消さない
    // - Storage も消さない（復元できるように）
    await admin.firestore().collection("cx_sets").doc(famNorm).set(
      {
        deletedAt: admin.firestore.FieldValue.serverTimestamp(),
        deletedBy: callerEmail,
      },
      { merge: true },
    );

    logger.info("Admin soft-deleted cx set", {
      callerEmail,
      fam: famNorm,
    });

    return { ok: true, fam: famNorm, softDeleted: true };
  } catch (err: any) {
    logger.error("adminDeleteCxSet failed", err);
    throw new HttpsError(
      "internal",
      err?.message ?? "削除に失敗しました。",
    );
  }
});

// ======================================================
// ★ 管理者：ユーザーの弾ごとの期限を延長
//    例）uid と fam（CX100）を指定して 30日延長など
// ======================================================
export const adminExtendUserFam = onCall({ cors: true }, async (request) => {
  const callerEmail = request.auth?.token?.email as string | undefined;
  if (!callerEmail) {
    throw new HttpsError("unauthenticated", "ログインが必要です。");
  }
  if (ADMIN_ALLOW.length && !ADMIN_ALLOW.includes(callerEmail)) {
    throw new HttpsError("permission-denied", "管理者権限がありません。");
  }

  const { uid, fam, days } = (request.data ?? {}) as {
    uid?: string;
    fam?: string;
    days?: number;
  };

  if (!uid) {
    throw new HttpsError("invalid-argument", "uid は必須です。");
  }
  if (!fam || !/^[A-Z]+\d+$/i.test(fam)) {
    throw new HttpsError(
      "invalid-argument",
      "fam は 'CX100' / 'EY02' / 'FB1' / 'P08' のような形式で指定してください。",
    );
  }
  if (!days || days <= 0) {
    throw new HttpsError(
      "invalid-argument",
      "days は 1 以上の日数を指定してください。",
    );
  }

  const famNorm = fam.toUpperCase();
  const db = admin.firestore();

  try {
    const permRef = db.collection("cx_permissions").doc(uid);
    const permSnap = await permRef.get();
    const permData = (permSnap.data() as any) ?? {};
    const enabledSets = permData.enabledSets ?? {};

    const nowMs = Date.now();

    // 既存の expiresAt が未来なら、そこからさらに延長
    let baseMs = nowMs;
    const current = enabledSets[famNorm];
    if (current?.expiresAt) {
      const ex = current.expiresAt;
      const exMs =
        typeof ex.toMillis === "function"
          ? ex.toMillis()
          : ex.seconds * 1000;
      if (exMs > baseMs) baseMs = exMs;
    }

    const addMs = days * 24 * 60 * 60 * 1000;
    const newExpiresMs = baseMs + addMs;

    enabledSets[famNorm] = {
      ...(current ?? {}),
      expiresAt: admin.firestore.Timestamp.fromMillis(newExpiresMs),
    };

    await permRef.set(
      {
        enabledSets,
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedBy: callerEmail,
      },
      { merge: true },
    );

    logger.info("Admin extended user fam", {
      callerEmail,
      uid,
      fam: famNorm,
      days,
      newExpiresMs,
    });

    return {
      ok: true,
      uid,
      fam: famNorm,
      expiresAtMs: newExpiresMs,
    };
  } catch (err: any) {
    logger.error("adminExtendUserFam failed", err);
    throw new HttpsError(
      "internal",
      err?.message ?? "期限延長に失敗しました。",
    );
  }
});
