// src/AdminPage.tsx
import { useState } from "react";
import app from "./firebase";
import { getFunctions, httpsCallable } from "firebase/functions";
import { useAuthUser, useSessionGuard } from "./auth";
import { CsvUploadForm } from "./CsvUploadForm";
// 先頭付近の import 群に追加
import AdminUsersList from "./AdminUsersList";


// 必要なら uid 制御もできる
const ADMIN_UIDS: string[] = [];

// メールアドレスで管理者制御
const ADMIN_EMAILS = [
  "yuutodayo222@gmail.com",
  "mikaeru222@gmail.com",
];

// ← ★ functions は asia-northeast1 にデプロイしたので、ここも同じリージョンを指定
const functions = getFunctions(app, "asia-northeast1");
const createUserFn = httpsCallable(functions, "adminCreateUser");

export default function AdminPage() {
  const { user, ready } = useAuthUser();
  const { checking, ok } = useSessionGuard(user);

  // --- ユーザー作成フォーム用の state ---
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState(""); // 任意（名前）
  const [creating, setCreating] = useState(false);
  const [createMsg, setCreateMsg] = useState("");

  if (!ready || checking) return <div style={{ padding: 16 }}>認証チェック中...</div>;
  if (!user || !ok) return <div style={{ padding: 16 }}>ログインしてください。</div>;

  const isAdmin =
    (user.uid && ADMIN_UIDS.includes(user.uid)) ||
    (user.email && ADMIN_EMAILS.includes(user.email!));

  if (!isAdmin) return <div style={{ padding: 16 }}>権限がありません。</div>;

  const goMain = () => {
    const base = window.location.pathname.replace(/\/admin\/?$/, "");
    const target = base.endsWith("/") ? base : base + "/";
    window.location.pathname = target || "/";
  };

  // ★ ここが Cloud Functions 呼び出し
  const onCreateUser = async () => {
    if (!email || !password) {
      setCreateMsg("メールとパスワードは必須です。");
      return;
    }
    try {
      setCreating(true);
      setCreateMsg("作成中…");

      const res = await createUserFn({ email, password, displayName });
      const { uid } = (res.data as any) ?? {};
      setCreateMsg(`作成成功！UID: ${uid}`);

      // 入力リセット（お好みで）
      setEmail("");
      setPassword("");
      setDisplayName("");
    } catch (e: any) {
      setCreateMsg(`作成失敗: ${e?.message || e?.code || "unknown error"}`);
      console.error(e);
    } finally {
      setCreating(false);
    }
  };

  return (
    <div style={{ paddingBottom: 32 }}>
      <h1 style={{ textAlign: "center", marginTop: 16 }}>管理画面</h1>

      {/* 検索ツールへ戻る */}
      <div
        style={{
          maxWidth: 420,
          margin: "8px auto 16px",
          padding: "0 16px",
          textAlign: "right",
        }}
      >
        <button
          onClick={goMain}
          style={{
            padding: "4px 12px",
            borderRadius: 9999,
            border: "1px solid #9ca3af",
            background: "#ffffff",
            color: "#4b5563",
            fontSize: 12,
            cursor: "pointer",
          }}
        >
          検索ツールへ戻る
        </button>
      </div>

      {/* ユーザー追加（管理者用） */}
      <div
        style={{
          maxWidth: 420,
          margin: "16px auto",
          padding: 16,
          border: "1px solid #e5e7eb",
          borderRadius: 8,
        }}
      >
        <h3>ユーザー追加（管理者用）</h3>
        <div style={{ marginTop: 8 }}>
          <label>メールアドレス</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user@example.com"
            style={{ width: "100%", padding: 8, marginTop: 4 }}
          />
        </div>
        <div style={{ marginTop: 8 }}>
          <label>パスワード</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="8文字以上"
            style={{ width: "100%", padding: 8, marginTop: 4 }}
          />
        </div>
        <div style={{ marginTop: 8 }}>
          <label>任意（名前）</label>
          <input
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="山田 太郎 など"
            style={{ width: "100%", padding: 8, marginTop: 4 }}
          />
        </div>

        <button
          onClick={onCreateUser}
          disabled={creating}
          style={{
            width: "100%",
            marginTop: 12,
            padding: 10,
            background: "#2563eb",
            color: "#fff",
            borderRadius: 6,
            border: "none",
            cursor: "pointer",
          }}
        >
          {creating ? "ユーザー作成中…" : "ユーザー作成"}
        </button>

        {createMsg && (
          <div style={{ marginTop: 8, fontSize: 12, color: "#374151" }}>
            {createMsg}
          </div>
        )}
      </div>

      {/* 既存：弾データ CSV アップロード */}
      <CsvUploadForm />
      <AdminUsersList />
    </div>
  );
}
