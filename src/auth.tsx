// src/auth.tsx
import { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";

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

// 入力が「mikaeru222」みたいなときに gmail を足すやつ
function normalizeToEmail(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) return trimmed;
  if (trimmed.includes("@")) return trimmed;
  return trimmed + "@gmail.com";
}

// ログインカード
export function SignInCard() {
  const [idOrEmail, setIdOrEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState<string>("");

  const doSignIn = async () => {
    setErr("");

    try {
      // 1) Auth でログイン
      const email = normalizeToEmail(idOrEmail);
      const cred = await signInWithEmailAndPassword(auth, email, pass);
      const uid = cred.user.uid;

      // 2) Firestore でセッションを確認
      const sessionRef = doc(db, "sessions", uid);
      const snap = await getDoc(sessionRef);

      if (snap.exists()) {
        // すでに誰か(自分の別端末)がログイン中
        // ここでログアウトしておかないと「auth だけ OK」になっちゃうので消す
        await signOut(auth);
        setErr("ほかの端末でログイン中です。先にそちらをログアウトしてください。");
        return;
      }

      // 3) セッションを作成
      await setDoc(sessionRef, {
        uid,
        createdAt: serverTimestamp(),
      });
      // これでログイン完了

    } catch (e: any) {
      // Firebase の英語をそのままでもいいけど、一応日本語っぽく
      const msg =
        e?.message?.includes("auth/invalid-credential") ||
        e?.message?.includes("auth/invalid-email")
          ? "IDまたはパスワードが違います"
          : e?.message || "ログインに失敗しました";
      setErr(msg);
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
    const u = auth.currentUser;
    // 先に Firestore のセッションを消す
    if (u) {
      const sessionRef = doc(db, "sessions", u.uid);
      await deleteDoc(sessionRef).catch(() => {
        // 無くても無視
      });
    }
    // そのあと Auth もサインアウト
    await signOut(auth);
  };

  return (
    <button className="btn btn-gray" onClick={doSignOut}>
      サインアウト
    </button>
  );
}

// ←← ここから下を今から足す！ 👇

// いまのユーザーのセッションが Firestore に本当にあるか確認するフック
export function useSessionGuard(user: User | null) {
  const [checking, setChecking] = useState(false);
  const [ok, setOk] = useState(true);

  useEffect(() => {
    if (!user) {
      // ログインしてなければOK扱い
      setOk(true);
      return;
    }

    const run = async () => {
      setChecking(true);
      const ref = doc(db, "sessions", user.uid);
      const snap = await getDoc(ref);
      setOk(snap.exists());
      setChecking(false);
    };

    run();
  }, [user]);

  return { checking, ok };
}
