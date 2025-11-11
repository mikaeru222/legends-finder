// src/AdminPage.tsx
import { useAuthUser, useSessionGuard } from "./auth";
import { CsvUploadForm } from "./CsvUploadForm";

// 必要なら uid でも制限できる（今は使ってない）
const ADMIN_UIDS: string[] = [];

// メールアドレスで管理者制御
const ADMIN_EMAILS = [
  "yuutodayo222@gmail.com",
  "mikaeru222@gmail.com",
];

export default function AdminPage() {
  const { user, ready } = useAuthUser();
  const { checking, ok } = useSessionGuard(user);

  if (!ready || checking) {
    return <div style={{ padding: 16 }}>認証チェック中...</div>;
  }

  if (!user || !ok) {
    return <div style={{ padding: 16 }}>ログインしてください。</div>;
  }

  const isAdmin =
    (user.uid && ADMIN_UIDS.includes(user.uid)) ||
    (user.email && ADMIN_EMAILS.includes(user.email));

  if (!isAdmin) {
    return <div style={{ padding: 16 }}>権限がありません。</div>;
  }

  // ★ 追加：メインの検索ツールに戻る
  const goMain = () => {
    // /legends-finder/admin → /legends-finder/ に戻す
    const base = window.location.pathname.replace(/\/admin\/?$/, "");
    // base が "/" で終わってなければ末尾に "/" を付けておく
    const target = base.endsWith("/") ? base : base + "/";
    window.location.pathname = target || "/";
  };

  return (
    <div style={{ paddingBottom: 32 }}>
      <h1 style={{ textAlign: "center", marginTop: 16 }}>管理画面</h1>

      {/* ★ 追加：右上に「検索ツールへ戻る」ボタン */}
            <div
        style={{
          maxWidth: 420,              // ★ カードと同じくらいの幅に
          margin: "8px auto 16px",    // 中央寄せ
          padding: "0 16px",
          textAlign: "right",         // 枠の中で右寄せ
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


      <CsvUploadForm />
    </div>
  );
}
