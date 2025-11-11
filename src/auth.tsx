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
  onSnapshot,
} from "firebase/firestore";

// --- セッションIDをブラウザごとに保持 ---
const SESSION_ID_KEY = "cx5:sessionId";
const saveSessionId = (sid: string | null) =>
  sid
    ? sessionStorage.setItem(SESSION_ID_KEY, sid)
    : sessionStorage.removeItem(SESSION_ID_KEY);
const loadSessionId = () => sessionStorage.getItem(SESSION_ID_KEY);

// 他端末奪取を検知して自タブを落とすためのリスナー管理
let stopSessionWatch: (() => void) | null = null;
let currentSessionId: string | null = null;

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

    try {
      // 1) Auth でログイン
      const email = normalizeToEmail(idOrEmail);
      const cred = await signInWithEmailAndPassword(auth, email, pass);
      const uid = cred.user.uid;

      // 2) Firestore のセッションを常に「上書き作成」し、sessionId を固定
      const sessionRef = doc(db, "sessions", uid);
      const newSessionId = crypto.randomUUID();
      await setDoc(
        sessionRef,
        {
          uid,
          sessionId: newSessionId,
          createdAt: serverTimestamp(),
        },
        { merge: false } // ← 他端末ログイン中でも完全上書き
      );
      currentSessionId = newSessionId;
      saveSessionId(newSessionId);

      // 3) 監視開始：自分の sessionId と違う=他端末に奪取 → 即サインアウト
      if (stopSessionWatch) {
        stopSessionWatch();
        stopSessionWatch = null;
      }
      stopSessionWatch = onSnapshot(sessionRef, (snap) => {
        const d = snap.data() as any | undefined;
        // ドキュメントが消えた or status変更 or sessionIdが変わったら落とす
        const kicked =
          !d ||
          d.status === "signedOut" ||
          (currentSessionId && d.sessionId !== currentSessionId);

        if (kicked) {
          // 監視解除してからサインアウト
          stopSessionWatch?.();
          stopSessionWatch = null;
          currentSessionId = null;
          signOut(auth).catch(() => {});
        }
      });

      // これで：「新しいログインが来た瞬間、古い端末は自動でサインアウト」

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
    // 監視解除
    if (stopSessionWatch) {
      stopSessionWatch();
      stopSessionWatch = null;
    }
    currentSessionId = null;

    // そのあと Auth もサインアウト
    await signOut(auth);
  };

  return (
    <button className="btn btn-gray" onClick={doSignOut}>
      サインアウト
    </button>
  );
}

// === BEGIN useSessionGuard (置き換え) ===
export function useSessionGuard(user: User | null) {
  const [checking, setChecking] = useState(false);
  const [ok, setOk] = useState(true);

  useEffect(() => {
    // 未ログインならOK扱い
    if (!user) {
      setOk(true);
      return;
    }

    const ref = doc(db, "sessions", user.uid);
    let cancelled = false;
    let stopWatch: (() => void) | null = null;

    // 最初の1回だけ確認
    // ローカルに sessionId が無ければ、サーバー側の sessionId を引き継ぐ
    const checkOnce = async () => {
      const snap = await getDoc(ref);
      if (!snap.exists()) return false;

      const d = snap.data() as any;
      const mine = loadSessionId();

      // ローカルにない → サーバー側の sessionId を採用してOKにする
      if (!mine && d.sessionId) {
        saveSessionId(d.sessionId);
        currentSessionId = d.sessionId;
        return true;
      }

      // どちらもある → 一致しているかどうかチェック
      return !!mine && d.sessionId === mine;
    };

    const run = async () => {
      setChecking(true);

      const firstOk = await checkOnce();
      if (!cancelled) {
        setOk(firstOk);
        setChecking(false);
      }

      // ここからリアルタイム監視（他端末ログイン奪取検知）
      stopWatch = onSnapshot(ref, (snap) => {
        const d = snap.data() as any | undefined;
        const mine = loadSessionId();

        // ドキュメントが消えた or 明示サインアウト → 即落とす
        if (!d || d.status === "signedOut") {
          stopWatch?.();
          stopWatch = null;
          saveSessionId(null);
          currentSessionId = null;
          signOut(auth).catch(() => {});
          return;
        }

        // ローカルに sessionId がない ＆ サーバーにある → 引き継いでOKにする
        if (!mine && d.sessionId) {
          saveSessionId(d.sessionId);
          currentSessionId = d.sessionId;
          if (!cancelled) setOk(true);
          return;
        }

        // ここまで来て mine がない = サーバーにも無い/未設定など → 一時的にNG扱い
        if (!mine) {
          if (!cancelled) setOk(false);
          return;
        }

        // 自分の sessionId とサーバー側が不一致 → 他端末に奪われたので落とす
        if (d.sessionId !== mine) {
          stopWatch?.();
          stopWatch = null;
          saveSessionId(null);
          currentSessionId = null;
          signOut(auth).catch(() => {});
          return;
        }

        // 一致している → OK
        if (!cancelled) setOk(true);
      });
    };

    run();

    return () => {
      cancelled = true;
      stopWatch?.();
    };
  }, [user]);

  return { checking, ok };
}
// === END useSessionGuard ===
