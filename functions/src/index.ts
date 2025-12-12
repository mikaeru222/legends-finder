// functions/src/index.ts
import { setGlobalOptions } from "firebase-functions/v2/options";
import { onCall, HttpsError } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import * as admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp();
}

const ADMIN_ALLOW = ["mikaeru222@gmail.com", "yuutodayo222@gmail.com"];
setGlobalOptions({ region: "asia-northeast1", maxInstances: 10 });

export const adminCreateUser = onCall({ cors: true }, async (request) => {
  const callerEmail = request.auth?.token?.email as string | undefined;
  if (!callerEmail) throw new HttpsError("unauthenticated", "ログインが必要です。");
  if (ADMIN_ALLOW.length && !ADMIN_ALLOW.includes(callerEmail)) {
    throw new HttpsError("permission-denied", "管理者権限がありません。");
  }

  const { email, password, displayName } = (request.data ?? {}) as {
    email?: string; password?: string; displayName?: string;
  };
  if (!email || !password) {
    throw new HttpsError("invalid-argument", "email と password は必須です。");
  }

  try {
    // ① Auth に登録（ここに displayName を保存）
    const user = await admin.auth().createUser({
      email, password, displayName, disabled: false,
    });

    // ② Firestore: 権限ドキュメント
    await admin.firestore().collection("cx_permissions").doc(user.uid).set({
      enabledSets: {},
      createdBy: callerEmail,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });

    // ③ Firestore: users コレクションにユーザー情報（displayName を含める）
    await admin.firestore().collection("users").doc(user.uid).set({
      email,
      name: displayName ?? null,
      createdBy: callerEmail,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });

    logger.info("Admin created user", { callerEmail, newUid: user.uid });
    return { uid: user.uid };
  } catch (err: any) {
    logger.error("adminCreateUser failed", err);
    throw new HttpsError("internal", err?.message ?? "作成に失敗しました。");
  }
});
