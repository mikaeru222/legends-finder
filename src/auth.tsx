// src/auth.tsx
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";

// 今ログインしてるかどうかのフック
export function useAuthUser() {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setReady(true);
    });
    return () => unsub();
  }, []);

  return { user, ready };
}

// 入力が「mikaeru222」みたいなときに gmail を足すやつ
function normalizeToEmail(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) return trimmed;
  if (trimmed.includes("@")) return trimmed;
  return trimmed + "@gmail.com";
}

// 親からメッセージを受け渡せるようにする
type SignInCardProps = {
  onBlocked?: (msg: string) => void;
};

// ログインカード
export function SignInCard({ onBlocked }: SignInCardProps) {
  const [idOrEmail, setIdOrEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState<string>("");

  const doSignIn = async () => {
    setErr("");
    onBlocked?.("");

    try {
      // シンプルに Auth でログインするだけ
      const email = normalizeToEmail(idOrEmail);
      await signInWithEmailAndPassword(auth, email, pass);
    } catch (e: any) {
      const msg =
        e?.message?.includes("auth/invalid-credential") ||
        e?.message?.includes("auth/invalid-email")
          ? "IDまたはパスワードが違います"
          : e?.message || "ログインに失敗しました";
      setErr(msg);
      onBlocked?.(msg);
    }
  };

  return (
    <div
      style={{
        maxWidth: 360,
        margin: "40px auto",
        padding: 16,
        border: "1px solid #e5e7eb",
        borderRadius: 8,
      }}
    >
      <h2 style={{ marginTop: 0 }}>ログイン</h2>
      <div style={{ display: "grid", gap: 8 }}>
        <input
          placeholder="ログインID"
          value={idOrEmail}
          onChange={(e) => setIdOrEmail(e.target.value)}
          style={{
            height: 36,
            padding: "0 8px",
            border: "1px solid #d1d5db",
            borderRadius: 6,
          }}
        />
        <input
          placeholder="パスワード"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          style={{
            height: 36,
            padding: "0 8px",
            border: "1px solid #d1d5db",
            borderRadius: 6,
          }}
        />
        {err && <div style={{ color: "#EF4444", fontSize: 12 }}>{err}</div>}
        <button onClick={doSignIn} className="btn btn-blue">
          ログイン
        </button>
      </div>
    </div>
  );
}

// サインアウトボタン
export function SignOutButton() {
  const doSignOut = async () => {
    await signOut(auth);
  };

  return (
    <button className="btn btn-gray" onClick={doSignOut}>
      サインアウト
    </button>
  );
}

// === BEGIN useSessionGuard（今は何もしない版） ===
export function useSessionGuard(user: User | null) {
  // 多重ログイン監視は一旦停止して、常にOK扱いにする
  return { checking: false, ok: true };
}
// === END useSessionGuard ===
