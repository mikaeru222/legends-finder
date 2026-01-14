// src/CsvUploadForm.tsx
import { useState } from "react";
import { db } from "./firebase";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

export default function CsvUploadForm() {
  const [setId, setSetId] = useState("CX5");
  const [cardsFile, setCardsFile] = useState<File | null>(null);
  const [posFile, setPosFile] = useState<File | null>(null);
  const [status, setStatus] = useState<string>("");
  const [uploading, setUploading] = useState(false);

  const onUpload = async () => {
    if (!setId || !cardsFile || !posFile) {
      setStatus("セットIDと2つのCSVを選んでください");
      return;
    }

    try {
      setUploading(true);
      setStatus("アップロード中...");

      const storage = getStorage();
      const trimmedSetId = setId.trim().toUpperCase();

      const cardsPath = `cx_sets/${trimmedSetId}/cards.csv`;
      const positionsPath = `cx_sets/${trimmedSetId}/positions.csv`;

      await uploadBytes(ref(storage, cardsPath), cardsFile);
      await uploadBytes(ref(storage, positionsPath), posFile);

      const setRef = doc(db, "cx_sets", trimmedSetId);
      await setDoc(
        setRef,
        {
          title: trimmedSetId,
          setId: trimmedSetId,
          cardsPath,
          positionsPath,
          enabled: true,
          updatedAt: serverTimestamp(),
          createdAt: serverTimestamp(),
        },
        { merge: true }
      );

      setStatus("アップロード完了！");
    } catch (e: any) {
      console.error(e);
      setStatus("アップロードに失敗しました: " + (e?.message || ""));
    } finally {
      setUploading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: 480,
        margin: "20px auto",
        padding: 16,
        border: "1px solid #e5e7eb",
        borderRadius: 8,
      }}
    >
      <h2>弾データ CSV アップロード</h2>

      <div style={{ marginBottom: 8 }}>
        <label>セットID（例: CX5）</label>
        <input
          value={setId}
          onChange={(e) => setSetId(e.target.value)}
          style={{ width: "100%", padding: 4 }}
        />
      </div>

      <div style={{ marginBottom: 8 }}>
        <label>cards.csv（カード一覧）</label>
        <input
  type="file"
  accept=".csv"
  onClick={(e) => {
    // 同じファイルを選び直しても onChange が発火するようにする
    (e.currentTarget as HTMLInputElement).value = "";
  }}
  onChange={(e) => setCardsFile(e.target.files?.[0] ?? null)}
/>

      </div>

      <div style={{ marginBottom: 8 }}>
        <label>positions.csv（配列表）</label>
        <input
  type="file"
  accept=".csv"
  onClick={(e) => {
    // 同じファイルを選び直しても onChange が発火するようにする
    (e.currentTarget as HTMLInputElement).value = "";
  }}
  onChange={(e) => setPosFile(e.target.files?.[0] ?? null)}
/>

      </div>

      <button onClick={onUpload} disabled={uploading} className="btn btn-blue">
        {uploading ? "アップロード中..." : "アップロード"}
      </button>

      {status && <div style={{ marginTop: 8, fontSize: 12 }}>{status}</div>}
    </div>
  );
}
