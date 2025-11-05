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
        await signOut(auth);
        const msg =
          "ほかの端末でログイン中です。先にそちらをログアウトしてください。";
        setErr(msg);
        onBlocked?.(msg); // 親(App.tsx)にも伝える
        return;
      }

      // 3) セッションを作成
      await setDoc(sessionRef, {
        uid,
        createdAt: serverTimestamp(),
      });
      // これでログイン完了

    } catch (e: any) {
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
        // ないときは無視
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

// いまのユーザーのセッションが Firestore に本当にあるか確認するフック
export function useSessionGuard(user: User | null) {
  const [checking, setChecking] = useState(false);
  const [ok, setOk] = useState(true);

  useEffect(() => {
    // ログアウト状態ならそもそもOK
    if (!user) {
      setOk(true);
      return;
    }

    let cancelled = false;

    const checkOnce = async () => {
      const ref = doc(db, "sessions", user.uid);
      const snap = await getDoc(ref);
      return snap.exists();
    };

    const run = async () => {
      setChecking(true);

      // ①まず一回見る
      const first = await checkOnce();

      if (first) {
        if (!cancelled) {
          setOk(true);
          setChecking(false);
        }
        return;
      }

      // ②なかったらちょっと待ってもう一回見る（書き込みの遅延対策）
      await new Promise((r) => setTimeout(r, 700));
      const second = await checkOnce();

      if (!cancelled) {
        setOk(second);
        setChecking(false);
      }
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [user]);

  return { checking, ok };
}
