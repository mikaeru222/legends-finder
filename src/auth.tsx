// src/auth.tsx
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";

// 今ログインしてるかどうかのフック（そのまま）
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

// ログインカード
export function SignInCard() {
  const [idOrEmail, setIdOrEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState<string>("");

  // ここだけあなた用にしてる
  const normalizeToEmail = (input: string): string => {
    const trimmed = input.trim();
    if (!trimmed) return trimmed;

    // すでにメール形式ならそのまま
    if (trimmed.includes("@")) return trimmed;

    // メールじゃなかったら自動で @gmail.com をつける
    return trimmed + "@gmail.com";
  };

  const doSignIn = async () => {
    setErr("");
    try {
      const email = normalizeToEmail(idOrEmail);
      await signInWithEmailAndPassword(auth, email, pass);
    } catch (e: any) {
      // とりあえず今は英語をそのまま表示
      setErr(e?.message || "ログインに失敗しました");
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
  return (
    <button className="btn btn-gray" onClick={() => signOut(auth)}>
      サインアウト
    </button>
  );
}
