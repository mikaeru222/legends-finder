// src/AdminUsersList.tsx
import { useEffect, useMemo, useState } from "react";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

type UserRow = {
  id: string; // = UID（ドキュメントID）
  email?: string;
  name?: string;
  createdBy?: string;
  createdAt?: Timestamp | null;
  enabled?: boolean;
};

function formatDate(ts?: Timestamp | null) {
  if (!ts) return "-";
  const d = ts.toDate();
  const y = d.getFullYear();
  const m = `${d.getMonth() + 1}`.padStart(2, "0");
  const dd = `${d.getDate()}`.padStart(2, "0");
  const hh = `${d.getHours()}`.padStart(2, "0");
  const mm = `${d.getMinutes()}`.padStart(2, "0");
  return `${y}/${m}/${dd} ${hh}:${mm}`;
}

export default function AdminUsersList() {
  const db = getFirestore();
  const auth = getAuth();
  const adminEmail = auth.currentUser?.email?.toLowerCase() ?? null;

  const [rows, setRows] = useState<UserRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [qText, setQText] = useState("");

  useEffect(() => {
    // createdAt の降順で一覧
    const qy = query(collection(db, "users"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(qy, (snap) => {
      const list: UserRow[] = [];
      snap.forEach((d) => {
        const v = d.data() as any;
        list.push({
          id: d.id,
          email: v.email,
          name: v.name,
          createdBy: v.createdBy,
          createdAt: v.createdAt ?? null,
          enabled: v.enabled ?? true,
        });
      });
      setRows(list);
      setLoading(false);
    });
    return () => unsub();
  }, [db]);

  const filtered = useMemo(() => {
    // 入力文字
    const raw = qText.trim().toLowerCase();

    // ★ Chrome がログイン中メールを勝手に入れた場合は「フィルタ無し扱い」
    const q = adminEmail && raw === adminEmail ? "" : raw;

    if (!q) return rows;

    return rows.filter((r) =>
      [r.email ?? "", r.name ?? "", r.id].some((x) =>
        x.toLowerCase().includes(q)
      )
    );
  }, [rows, qText, adminEmail]);

  const toggleEnabled = async (row: UserRow) => {
    console.log("clicked:", row.id, "enabled(before):", row.enabled);

    try {
      const ref = doc(db, "users", row.id);
      await updateDoc(ref, {
        enabled: !row.enabled,
        updatedAt: serverTimestamp(),
      });
    } catch (e) {
      alert("更新に失敗しました。通信状況をご確認ください。");
      console.error(e);
    }
  };

  return (
    <div style={{ maxWidth: 640, margin: "24px auto", padding: "0 12px" }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
        ユーザー一覧
      </h2>

      <input
        type="search"
        autoComplete="off"
        name="user-filter"
        placeholder="メール / 名前 / UID で絞り込み"
        value={qText}
        onChange={(e) => setQText(e.target.value)}
        style={{
          width: "100%",
          padding: "10px 12px",
          border: "1px solid #e5e7eb",
          borderRadius: 8,
          marginBottom: 10,
        }}
      />

      {loading ? (
        <div style={{ padding: 12 }}>読み込み中…</div>
      ) : filtered.length === 0 ? (
        <div style={{ padding: 12, color: "#6b7280" }}>ユーザーがいません。</div>
      ) : (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr", // ★ カードを1列にする
      gap: 8,
    }}
  >
    {filtered.map((r) => (

            <div
              key={r.id}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: 12,
                padding: 12,
                display: "grid",
                gridTemplateColumns: "1fr auto",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div style={{ minWidth: 0 }}>
  <div
  style={{
    fontWeight: 600,
    // ← nowrap / overflow / textOverflow は付けない
  }}
>
  {r.email ?? "(no email)"}{" "}
  {!r.enabled && (
    <span
      style={{
        fontSize: 10,
        color: "#b45309",
        border: "1px solid #f59e0b",
        borderRadius: 9999,
        padding: "2px 6px",
        marginLeft: 6,
        background: "#fffbeb",
      }}
    >
      無効
    </span>
  )}
</div>


  {r.name && (
    <div style={{ color: "#6b7280", fontSize: 12 }}>{r.name}</div>
  )}
  <div style={{ color: "#9ca3af", fontSize: 12 }}>
    UID: {r.id}
  </div>
  <div style={{ color: "#9ca3af", fontSize: 12 }}>
    作成: {formatDate(r.createdAt)}
  </div>
</div>

              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleEnabled(r);
                }}
                style={{
                  padding: "8px 12px",
                  borderRadius: 9999,
                  border: "1px solid #d1d5db",
                  background: r.enabled ? "#10b981" : "#ef4444",
                  color: "white",
                  fontSize: 12,
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                }}
              >
                {r.enabled ? "無効にする" : "有効にする"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
