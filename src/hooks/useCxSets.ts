// src/hooks/useCxSets.ts

import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

export type CxSet = {
  id: string;            // ドキュメントID (例: "CX5", "CX99")
  setId: string;         // 例: "CX5", "CX99"
  title: string;         // 表示名
  cardsPath: string;     // カードCSV
  positionsPath: string; // 配列表CSV
  enabled: boolean;
};

export function useCxSets() {
  const [sets, setSets] = useState<CxSet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const colRef = collection(db, "cx_sets");
        const q = query(colRef, where("enabled", "==", true));
        const snap = await getDocs(q);

        const list: CxSet[] = [];

        snap.forEach((doc) => {
          const data = doc.data();

          list.push({
            id: doc.id,
            setId: String(data.setId ?? doc.id),
            title: String(data.title ?? ""),
            cardsPath: String(data.cardsPath ?? ""),
            positionsPath: String(data.positionsPath ?? ""),
            enabled: Boolean(data.enabled ?? false),
          });
        });

        // ★ Firestore から読み込んだセット一覧を確認
        console.log("DEBUG useCxSets list:", list);

        setSets(list);
      } catch (e) {
        console.error("useCxSets error:", e);
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return { sets, loading, error };
}
