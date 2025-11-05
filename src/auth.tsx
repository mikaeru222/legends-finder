// src/auth.tsx
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { firebaseErrorToJa } from "./firebaseErrorMessages"; // ← これを足した

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

export function SignInCard() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState<string>("");

  const doSignIn = async () => {
    setErr("");
    try {
      await signInWithEmailAndPassword(auth, email, pass);
    } catch (e: any) {
      // e.code が来てたら日本語にする
      const code = e?.code as string | undefined;
      if (code) {
        setErr(firebaseErrorToJa(code));
      } else {
        // もし想定外のエラーだったら元の文にする
        setErr(e?.message || "ログインに失敗しました");
      }
      console.error("signIn error:", e);
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
          placeholder="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

export function SignOutButton() {
  return (
    <button className="btn btn-gray" onClick={() => signOut(auth)}>
      サインアウト
    </button>
  );
}
