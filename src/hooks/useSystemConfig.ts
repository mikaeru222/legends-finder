import { useEffect, useState } from "react";
import { doc, onSnapshot, getFirestore, Timestamp } from "firebase/firestore";

export type SystemConfig = {
  stopAt?: Timestamp | null;
};

export function useSystemConfig() {
  const [config, setConfig] = useState<SystemConfig | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const ref = doc(db, "system", "config");

    const unsub = onSnapshot(
      ref,
      (snap) => {
        setConfig((snap.data() as SystemConfig) ?? {});
        setLoading(false);
      },
      (err) => {
        console.error("useSystemConfig error:", err);
        setConfig({});
        setLoading(false);
      }
    );

    return () => unsub();
  }, []);

  return { config, loading };
}
