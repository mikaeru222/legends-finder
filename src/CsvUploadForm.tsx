// src/CsvUploadForm.tsx
import { useState } from "react";
import { db } from "./firebase";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

export function CsvUploadForm() {
  const [setId, setSetId] = useState("CX5"); // 弾ID（CX5とか）
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

      // Storage 上の保存パス（自由に変えてOK）
      const cardsPath = `cx_sets/${setId}/cards.csv`;
      const positionsPath = `cx_sets/${setId}/positions.csv`;

      // Storage にアップロード（File はそのまま渡せる）
      await uploadBytes(ref(storage, cardsPath), cardsFile);
      await uploadBytes(ref(storage, positionsPath), posFile);

      // Firestore にメタ情報を書き込み
      const setRef = doc(db, "cx_sets", setId);
      await setDoc(
        setRef,
        {
          setId,
          cardsPath,
          positionsPath,
          enabled: true,
          updatedAt: serverTimestamp(),
          createdAt: serverTimestamp(),
        },
        { merge: true } // 既にあれば更新
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
          onChange={(e) => setCardsFile(e.target.files?.[0] ?? null)}
        />
      </div>

      <div style={{ marginBottom: 8 }}>
        <label>positions.csv（配列表）</label>
        <input
          type="file"
          accept=".csv"
          onChange={(e) => setPosFile(e.target.files?.[0] ?? null)}
        />
      </div>

      <button
        onClick={onUpload}
        disabled={uploading}
        className="btn btn-blue"
      >
        {uploading ? "アップロード中..." : "アップロード"}
      </button>

      {status && (
        <div style={{ marginTop: 8, fontSize: 12 }}>
          {status}
        </div>
      )}
    </div>
  );
}
