// src/singleSession.ts
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import type { User } from "firebase/auth";

const DEVICE_KEY = "lf_device_id";

// 端末ごとのIDをローカルに1回だけ発行して保持
export function getOrCreateDeviceId(): string {
  if (typeof window === "undefined") return "server";
  let id = localStorage.getItem(DEVICE_KEY);
  if (!id) {
    if ("randomUUID" in crypto) {
      id = (crypto as any).randomUUID();
    } else {
      id = Math.random().toString(36).slice(2);
    }
    localStorage.setItem(DEVICE_KEY, id);
  }
  return id;
}

/**
 * 新しいログインがあったときに呼ぶ
 * → この端末を sessions/{uid} の「オーナー」として上書きする
 * → 常に「新しくログインした端末が勝ち」
 */
export async function claimSession(user: User): Promise<void> {
  const db = getFirestore();
  const deviceId = getOrCreateDeviceId();
  const ref = doc(db, "sessions", user.uid);

  await setDoc(
    ref,
    {
      uid: user.uid,
      deviceId,
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );
}

/**
 * ログイン後に呼び出して監視を開始する
 * - 定期的に sessions/{uid} を読む
 * - deviceId が自分のものじゃなくなったら onKicked() を呼ぶ
 * - 戻り値の関数を呼ぶと監視停止
 */
export function startSessionWatcher(
  user: User,
  onKicked: () => void
): () => void {
  const db = getFirestore();
  const deviceId = getOrCreateDeviceId();
  const ref = doc(db, "sessions", user.uid);

  let stopped = false;

  const timer = setInterval(async () => {
    if (stopped) return;

    try {
      const snap = await getDoc(ref);
      if (!snap.exists()) {
        // セッション情報が消されていたら、ここでは何もしない
        return;
      }
      const data = snap.data() as any;
      const current = data.deviceId as string | undefined;

      // 「オーナーが自分じゃない」＝他の端末でログインされた
      if (current && current !== deviceId) {
        stopped = true;
        clearInterval(timer);
        onKicked();
      }
    } catch (e) {
      console.error("session watcher error", e);
    }
  }, 3 * 1000); // 10秒ごとにチェック（お好みで）

  return () => {
    stopped = true;
    clearInterval(timer);
  };
}
