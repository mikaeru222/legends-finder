// src/hooks/useCxSets.ts
import { useEffect, useState } from "react";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../firebase";

export type CxSet = {
  id: string;
  setId: string;
  title: string;
  cardsPath: string;
  positionsPath: string;
  enabled: boolean;
  deleted?: boolean;
  createdAt?: any;
  updatedAt?: any;
  storageBaseName?: string;
};

export function useCxSets() {
  const [sets, setSets] = useState<CxSet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let unsub: any;

    (async () => {
      try {
        setLoading(true);

        // ===============================
        // ① 現在ログイン中の uid を取得
        // ===============================
        const uid = await new Promise<string | null>((resolve) => {
          unsub = onAuthStateChanged(auth, (user) =>
            resolve(user ? user.uid : null),
          );
        });

        // ===============================
        // ② 権限ドキュメントを取得
        // ===============================
        let enabledSets: any = null;
        if (uid) {
          try {
            const permSnap = await getDoc(
              doc(db, "cx_permissions", uid),
            );
            const permData = permSnap.data() as any;
            enabledSets = permData?.enabledSets ?? null;
          } catch (e) {
            console.warn("permissions load failed:", e);
          }
        }

        // ===============================
        // ③ 弾一覧を取得
        // ===============================
        const snap = await getDocs(collection(db, "cx_sets"));

        const nowMs = Date.now();

        const list: CxSet[] = snap.docs
          .map((d) => {
            const data = d.data() as any;
            return {
              id: d.id,
              setId: String(data.setId ?? d.id),
              title: String(data.title ?? ""),
              cardsPath: String(data.cardsPath ?? ""),
              positionsPath: String(data.positionsPath ?? ""),
              enabled: data.enabled,
              deleted: Boolean(data.deleted ?? false),
              createdAt: data.createdAt,
              updatedAt: data.updatedAt,
              storageBaseName: data.storageBaseName
                ? String(data.storageBaseName)
                : undefined,
            };
          })
          // ===============================
          // ④ enabled / deleted でまず絞る
          // ===============================
          .filter((s) => s.enabled !== false && !s.deleted)
          // ===============================
          // ⑤ 期限チェック
          // ===============================
          .filter((s) => {
            // 権限ドキュメントが無ければ「今は制限なし」で通す
            if (!enabledSets) return true;

            const perm = enabledSets[s.id] ?? enabledSets[s.setId];


            // ---- 古い形式：true / false / undefined ----
            if (perm === true) return true;
            if (!perm) return false; // 無い＝使えない

            // ---- 新形式：{ expiresAt: Timestamp } ----
            const expiresAt = perm.expiresAt;

            if (!expiresAt) return true; // expiresAt 無し＝無期限OK

            // Firestore Timestamp -> ms
            const expireMs =
              typeof expiresAt.toMillis === "function"
                ? expiresAt.toMillis()
                : expiresAt.seconds * 1000;

            return expireMs >= nowMs; // 未来ならOK
          });

        setSets(list);
      } catch (e) {
        console.error("useCxSets error:", e);
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    })();

    return () => unsub && unsub();
  }, []);

  return { sets, loading, error };
}
