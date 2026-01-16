// src/AdminPage.tsx
import { useEffect, useMemo, useState } from "react";
import { db } from "./firebase";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  serverTimestamp,
  addDoc,
  orderBy,
  limit,
  query,
  runTransaction,
} from "firebase/firestore";



import { getFunctions, httpsCallable } from "firebase/functions";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import CsvUploadForm from "./CsvUploadForm";
import AdminUsersList from "./AdminUsersList";

export default function AdminPage() {
  // ★ 管理者のメール（この2人だけが管理画面に入れる）
  const ADMIN_EMAILS = [
    "yuutodayo222@gmail.com",
    "mikaeru222@gmail.com",
  ];

  // 新弾一覧
  const [cxSetIds, setCxSetIds] = useState<string[]>([]);
  const [cxLoading, setCxLoading] = useState(false);
const [deletedCxSetIds, setDeletedCxSetIds] = useState<string[]>([]);


  // 新弾削除（手入力）
  const [deleteFam, setDeleteFam] = useState("");
    const [msg, setMsg] = useState("");

  const [busy, setBusy] = useState(false);

   // ▼ 告知入力用
  const [infoTitle, setInfoTitle] = useState("");
  const [infoBody, setInfoBody] = useState("");
  const [infoSaving, setInfoSaving] = useState(false);
  const [infoMsg, setInfoMsg] = useState("");

  // ▼ いま表示してる「告知3件」の入れ物（これが無くて壊れてた）
  type InfoItem = {
    id: string;
    title?: string;
    body?: string;
    published?: boolean;
    createdAt?: any;
  };
  const [infos, setInfos] = useState<InfoItem[]>([]);
const [infoLoadError, setInfoLoadError] = useState<string>("");


// ▼ 追加：非表示の告知も見る（ON/OFF）
const [showHidden, setShowHidden] = useState(false);



  // ユーザー追加
   // ユーザー追加
  const [newEmail, setNewEmail] = useState("");

  const [newPw, setNewPw] = useState("");
  const [newName, setNewName] = useState("");
  const [createMsg, setCreateMsg] = useState("");
  const [showPw, setShowPw] = useState(false);

  // 追加：購入者に渡す用（コピペ文章）
  const [copyText, setCopyText] = useState("");
  const [copyDone, setCopyDone] = useState("");


   function normalizeEmail(raw: string) {
  const v = raw.trim();
  if (!v) return "";
  if (v.includes("@")) return v;
  return `${v}@gmail.com`;
}

// ▼ PW自動生成（O,0,I,1,l を避ける）
function generatePassword(len: number = 10) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
  const bytes = new Uint32Array(len);
  crypto.getRandomValues(bytes);
  let out = "";
  for (let i = 0; i < len; i++) {
    out += chars[bytes[i] % chars.length];
  }
  return out;
}

// ▼ CZ0001 の通し番号を発行（重複防止）
async function issueCzId() {
  const ref = doc(db, "system", "counters");

  const n = await runTransaction(db, async (tx) => {
    const snap = await tx.get(ref);
    const next = (snap.exists() ? (snap.data() as any).czNext : 1) as number;

    tx.set(ref, { czNext: next + 1 }, { merge: true });

    return next;
  });

  return `CZ${String(n).padStart(4, "0")}`;
}


// ↓↓↓ ここを “追加” ↓↓↓
const PUBLIC_APP_URL =
  import.meta.env.VITE_PUBLIC_APP_URL ?? "https://legends-finder-65557.web.app";
// ↑↑↑ ここまで “追加” ↑↑↑


  // ▼ 告知を保存する（information に追加）
  const saveInformation = async () => {
    setInfoMsg("");

    // タイトルか本文、どっちか入ってればOK
    if (!infoTitle.trim() && !infoBody.trim()) {
      setInfoMsg("タイトルか本文を入れてください");
      return;
    }

    try {
      setInfoSaving(true);

      await addDoc(collection(db, "information"), {
  title: infoTitle.trim(),
  body: infoBody.trim(),
  published: true,
  pinned: false,
  createdAt: serverTimestamp(),
});

// ★追加：保存したら、すぐ「確認用3件」を読み直して更新する
const q = query(
  collection(db, "information"),
  orderBy("createdAt", "desc"),
  limit(3)
);
const snap = await getDocs(q);
const list = snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) })) as InfoItem[];
setInfos(showHidden ? list : list.filter((x) => x.published !== false));


setInfoTitle("");
setInfoBody("");
setInfoMsg("保存しました");
localStorage.setItem("informationUpdatedAt", String(Date.now())); // ← 追加：更新の合図


    } catch (e) {
  console.error(e);
  setInfos([]);
  setInfoMsg("告知の読み込みに失敗しました");
}
finally {
      setInfoSaving(false);
    }
  };

 // ▼ 追加：現在の告知（3件）を読み込む
const loadInformations = async () => {
  try {
    const q = query(
      collection(db, "information"),
      orderBy("createdAt", "desc"),
      limit(3)
    );
    const snap = await getDocs(q);
    const list = snap.docs.map((d) => ({
      id: d.id,
      ...(d.data() as any),
    })) as InfoItem[];

    // published が false のものは表示しない
        setInfos(showHidden ? list : list.filter((x) => x.published !== false));

  } catch (e) {
    console.error("loadInformations failed", e);
    setInfos([]);
  }
};

// ▼ 管理者チェック（URL直打ち対策）
useEffect(() => {
  const auth = getAuth();
  const unsub = onAuthStateChanged(auth, (user) => {
    if (!user || !ADMIN_EMAILS.includes(user.email ?? "")) {
      // 管理者じゃない → 検索画面へ
      window.location.href = `${window.location.origin}/#/home`;
    }
  });
  return () => unsub();
}, []);

// ▼ 追加：画面を開いたら1回読む（告知）
useEffect(() => {
  loadInformations();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [showHidden]);




  // callable functions
  const functions = useMemo(() => getFunctions(undefined, "asia-northeast1"), []);
  const deleteCxSetFn = useMemo(
    () => httpsCallable(functions, "adminDeleteCxSet"),
    [functions]
  );
  const createUserFn = useMemo(
    () => httpsCallable(functions, "adminCreateUser"),
    [functions]
  );

  // =========================
  // ★ 新弾を常に先頭（createdAt/updatedAt の新しい順）
const reloadCxSets = async () => {
  setCxLoading(true);
  try {
    const snap = await getDocs(collection(db, "cx_sets"));

    const rows = snap.docs.map((d) => {
      const data = d.data() as any;

      const createdMs =
        (data?.createdAt?.toMillis?.() ??
          (typeof data?.createdAt?.seconds === "number" ? data.createdAt.seconds * 1000 : 0)) || 0;

      const updatedMs =
        (data?.updatedAt?.toMillis?.() ??
          (typeof data?.updatedAt?.seconds === "number" ? data.updatedAt.seconds * 1000 : 0)) || 0;

      return {
        id: String(d.id),
        deleted: Boolean(data?.deleted),
        keyMs: createdMs || updatedMs || 0,
      };
    });

    // ★ 新しい順
    rows.sort((a, b) => b.keyMs - a.keyMs);

    // ★ 表示用（削除されてない）
    setCxSetIds(rows.filter((r) => !r.deleted).map((r) => r.id));
setDeletedCxSetIds(rows.filter((r) => r.deleted).map((r) => r.id));


    // ★ 復活用（削除済み）
    setDeletedCxSetIds(rows.filter((r) => r.deleted).map((r) => r.id));
  } catch (e) {
    console.error("reloadCxSets error:", e);
    setCxSetIds([]);
    setDeletedCxSetIds([]);
  } finally {
    setCxLoading(false);
  }
};


  useEffect(() => {
    reloadCxSets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
const onRestoreCxSet = async (id: string) => {
  try {
    setBusy(true);
    setMsg("復活中…");

    await updateDoc(doc(db, "cx_sets", id), {
      deleted: false,
      enabled: true,
      updatedAt: serverTimestamp(),
    });

    setMsg(`復活完了: ${id}`);
    await reloadCxSets();
  } catch (e: any) {
    console.error(e);
    setMsg(`復活失敗: ${e?.message || "unknown error"}`);
  } finally {
    setBusy(false);
  }
};


  const onDeleteCxSet = async (famArg?: string) => {
  const fam = (famArg ?? deleteFam).trim().toUpperCase();
  setMsg("");

  if (!fam) {
    setMsg("セットIDを入力してください（例: CX100）");
    return;
  }

  const ok = window.confirm(
    `【確認】${fam} を削除します。\n（※データは消えず、後で復活できます）`
  );
  if (!ok) return;

  try {
    setBusy(true);
    setMsg("削除中…");

    await updateDoc(doc(db, "cx_sets", fam), {
      deleted: true,
      deletedAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    setMsg(`削除完了（復活可能）: ${fam}`);
    setDeleteFam("");
    reloadCxSets();
  } catch (e: any) {
    console.error(e);
    setMsg(`削除失敗: ${e?.message || "unknown error"}`);
  } finally {
    setBusy(false);
  }
};


   const onCreateUser = async () => {
  setCreateMsg("");
  setCopyText("");
  setCopyDone("");

  try {
    setBusy(true);
    setCreateMsg("作成中…");

    // ① IDを自動で作る：CZ0001, CZ0002...
    const czId = await issueCzId();

    // ② PWを自動で作る
    const pw = generatePassword(10);

    // ③ 中で使うメール（CZ0001@gmail.com）
    const normalizedEmail = `${czId}@gmail.com`;

    await createUserFn({
      email: normalizedEmail,
      password: pw,
      displayName: newName.trim(),
    });

    // ④ 相手に送る文（そのままコピペ）
    const PROD_URL = "https://legends-finder-65557.web.app";
    const message =
      `ID: ${czId}\n` +
      `PW: ${pw}\n` +
      `ログインURL: ${PROD_URL}\n`;

    setCreateMsg(message);
    setCopyText(message);

    // 入力欄を空に戻す（名前だけ使うなら newName だけでもOK）
    setNewEmail("");
    setNewPw("");
    setNewName("");
  } catch (e: any) {
    console.error(e);
    setCreateMsg("ユーザー作成に失敗しました。");
  } finally {
    setBusy(false);
  }
};

  // =========================
  // ★ ここから「見た目」だけ Web版寄せ（カード/余白/幅）
  // =========================
  const pageStyle: React.CSSProperties = {
    minHeight: "100vh",
    padding: "32px 16px",
    background: "linear-gradient(180deg, #eef6ff 0%, #f7f8fb 45%, #ffffff 100%)",
  };

  const containerStyle: React.CSSProperties = {
  maxWidth: 640,   // ← 860 を 640 に
  margin: "0 auto",
};


  const titleStyle: React.CSSProperties = {
    textAlign: "center",
    fontSize: 32,
    margin: "6px 0 12px",
    letterSpacing: 1,
  };

 const topBtnWrap: React.CSSProperties = {
  maxWidth: 960,
  margin: "8px auto 16px",
  padding: "4px 16px 0",
  display: "flex",
  justifyContent: "flex-end",
};


  const cardStyle: React.CSSProperties = {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: 14,
    padding: 16,
    boxShadow: "0 6px 20px rgba(15, 23, 42, 0.06)",
    margin: "0 0 14px",
  };

  const h2Style: React.CSSProperties = {
    fontSize: 18,
    margin: "0 0 10px",
    fontWeight: 800,
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 12px",
    border: "1px solid #cbd5e1",
    borderRadius: 10,
    outline: "none",
    background: "#fff",
  };

  const primaryBtn: React.CSSProperties = {
    width: "100%",
    padding: "10px 12px",
    borderRadius: 10,
    border: "1px solid #1d4ed8",
    background: "#2563eb",
    color: "#fff",
    cursor: "pointer",
    fontWeight: 700,
  };

  const dangerBtn: React.CSSProperties = {
    padding: "10px 12px",
    borderRadius: 10,
    border: "1px solid #b91c1c",
    background: "#dc2626",
    color: "#fff",
    cursor: "pointer",
    fontWeight: 800,
  };

  const lightBtn: React.CSSProperties = {
  padding: "4px 12px",
  borderRadius: 9999,
  border: "1px solid #60a5fa",
  background: "#ffffff",
  color: "#1d4ed8",
  fontSize: 12,
  cursor: "pointer",
};

  return (
    <main style={pageStyle}>
      <div style={containerStyle}>
        <h1 style={titleStyle}>管理画面</h1>

        {/* 検索ツールへ戻る */}
        <div style={topBtnWrap}>
          <button
            type="button"
            onClick={() => {
              window.location.href = `${window.location.origin}/#/home`;
            }}
            style={lightBtn}
          >
            検索ツールへ戻る
          </button>
                </div>

               {/* ▼ 告知追加（ログイン前に表示） */}
        <section style={cardStyle}>
          <h2 style={h2Style}>ログイン前のお知らせ（告知）</h2>

          <div style={{ display: "grid", gap: 10 }}>
            <input
              value={infoTitle}
              onChange={(e) => setInfoTitle(e.target.value)}
              placeholder="タイトル"
              style={inputStyle}
            />

            <textarea
              value={infoBody}
              onChange={(e) => setInfoBody(e.target.value)}
              placeholder="本文（3行くらい）"
              rows={4}
              style={{ ...inputStyle, minHeight: 120, resize: "vertical" }}
            />

            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <button
                type="button"
                onClick={saveInformation}
                disabled={infoSaving}
                style={primaryBtn}
              >
                {infoSaving ? "保存中…" : "この内容で告知"}
              </button>

              {infoMsg && <span style={{ fontSize: 12 }}>{infoMsg}</span>}
            </div>
          </div>
        </section>

        {/* ▼ 現在の告知（3件表示） */}
        <section style={cardStyle}>
          <h2 style={h2Style}>現在の告知（確認用）</h2>

{/* ▼ 非表示も見る */}
<label style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
  <input
    type="checkbox"
    checked={showHidden}
    onChange={(e) => setShowHidden(e.target.checked)}
  />
  非表示の告知も表示
</label>
{/* ▲ ここまで */}

<div style={{ display: "grid", gap: 8 }}>
  {(showHidden ? infos : infos.filter((x) => x.published !== false)).map((info) => (
    <div
      key={info.id}
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 8,
        padding: 10,
        background: "#ffffff",
      }}
    >

                <div style={{ fontWeight: 800 }}>
                  {info.title || "（タイトルなし）"}
                </div>
                                <div style={{ fontSize: 13, marginTop: 4 }}>
                  {info.body}
                </div>

                {/* ▼ 追加：非表示ボタン */}
                <div style={{ marginTop: 8, display: "flex", justifyContent: "flex-end" }}>
                  <button
                    type="button"
                    onClick={async () => {
                      const ok = window.confirm("この告知を非表示にしますか？");
                      if (!ok) return;

                      try {
                        await updateDoc(doc(db, "information", info.id), {
  published: false,
  updatedAt: serverTimestamp(),
});

setInfos((prev) => prev.filter((x) => x.id !== info.id)); // ★追加：すぐ画面から消す

await loadInformations(); // 画面を更新


                      } catch (e) {
                        console.error(e);
                        alert("非表示に失敗しました");
                      }
                    }}
                    style={{
                      padding: "8px 12px",
                      borderRadius: 10,
                      border: "1px solid #ef4444",
                      background: "#ef4444",
                      color: "#ffffff",
                      fontWeight: 800,
                      cursor: "pointer",
                    }}
                  >
                    非表示
                  </button>
                </div>
                {/* ▲ 追加ここまで */}
              </div>
            ))}

          </div>
        </section>
        {/* ▲ 現在の告知ここまで */}


        {/* ユーザー追加 */}
        <section style={cardStyle}>
          <h2 style={h2Style}>ユーザー追加（管理者用）</h2>

          <div style={{ display: "grid", gap: 10 }}>
  <input
    value={newEmail}
    onChange={(e) => setNewEmail(e.target.value)}
    placeholder="（空でOK）IDは自動でCZ0001〜になります"
    style={inputStyle}
  />

  <div style={{ fontSize: 12, color: "#64748b", marginTop: -6 }}>
    ※IDとPWは入力しなくてもOK（自動で作成されます）
  </div>

  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
    <input
      value={newPw}
      onChange={(e) => setNewPw(e.target.value)}
      placeholder="（空でOK）PWは自動で作られます"
      type={showPw ? "text" : "password"}
      style={{ ...inputStyle, flex: 1 }}
    />
    <button
      type="button"
      onClick={() => setShowPw((v) => !v)}
      style={{
        padding: "10px 12px",
        borderRadius: 10,
        border: "1px solid #cbd5e1",
        background: "#ffffff",
        cursor: "pointer",
        fontWeight: 700,
        whiteSpace: "nowrap",
      }}
    >
      {showPw ? "隠す" : "表示"}
    </button>
  </div>

  <input
    value={newName}
    onChange={(e) => setNewName(e.target.value)}
    placeholder="任意（名前）"
    style={inputStyle}
  />

  <button onClick={onCreateUser} disabled={busy} style={primaryBtn}>
    ユーザー作成
  </button>

                        {createMsg && (
              <div style={{ whiteSpace: "pre-wrap", color: "#334155" }}>
                {createMsg}
              </div>
            )}

            {/* 追加：購入者に渡す用（そのままコピペ） */}
            {copyText && (
              <div style={{ display: "grid", gap: 8 }}>
                <div style={{ fontWeight: 800, color: "#0f172a" }}>
                  購入者に送る文（そのままコピペ）
                </div>

                <textarea
                  readOnly
                  value={copyText}
                  style={{
                    ...inputStyle,
                    minHeight: 110,
                    fontFamily: "monospace",
                    whiteSpace: "pre-wrap",
                  }}
                />

                <button
  type="button"
  onClick={() => {
    try {
      const el = document.createElement("textarea");
      el.value = copyText;

      // 画面に見えないようにする（iOS対策）
      el.style.position = "fixed";
      el.style.top = "0";
      el.style.left = "0";
      el.style.opacity = "0";

      document.body.appendChild(el);
      el.focus();
      el.select();

      document.execCommand("copy");
      document.body.removeChild(el);

      setCopyDone("コピーしました");
    } catch (e) {
      setCopyDone("コピー失敗（手で選択してコピーしてね）");
    }
  }}
  style={{
    padding: "10px 12px",
    borderRadius: 10,
    border: "1px solid #16a34a",
    background: "#16a34a",
    color: "#fff",
    cursor: "pointer",
    fontWeight: 900,
  }}
>
  コピー
</button>


                {copyDone && (
                  <div style={{ color: "#16a34a", fontWeight: 800 }}>
                    {copyDone}
                  </div>
                )}
              </div>
            )}

          </div>
        </section>


        {/* 新弾一覧 */}
        <section style={cardStyle}>
          <h2 style={h2Style}>新弾一覧</h2>

          {cxLoading ? (
            <div>読み込み中…</div>
          ) : cxSetIds.length === 0 ? (
            <div style={{ color: "#64748b" }}>新弾がありません。</div>
          ) : (
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {cxSetIds.map((id) => (
                <li key={id} style={{ margin: "8px 0", display: "flex", gap: 10 }}>
                  <span style={{ flex: 1 }}>{id}</span>
                  <button onClick={() => onDeleteCxSet(id)} disabled={busy} style={{
                    padding: "6px 10px",
                    borderRadius: 8,
                    border: "1px solid #b91c1c",
                    background: "#dc2626",
                    color: "#fff",
                    cursor: "pointer",
                    fontWeight: 800,
                  }}>
                    削除
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
{/* 削除済み一覧（復活用） */}
<section style={cardStyle}>
  <h2 style={h2Style}>削除済み一覧（復活用）</h2>

  {cxLoading ? (
    <div>読み込み中…</div>
  ) : deletedCxSetIds.length === 0 ? (
    <div style={{ color: "#64748b" }}>削除済みはありません</div>
  ) : (
    <ul style={{ margin: 0, paddingLeft: 18 }}>
  {deletedCxSetIds.map((id) => (
    <li
      key={id}
      style={{ margin: "8px 0", display: "flex", gap: 10 }}
    >
      <span style={{ flex: 1 }}>{id}</span>

      <button
       onClick={() => onRestoreCxSet(id)}

        disabled={busy}
        style={{
          padding: "6px 10px",
          borderRadius: 8,
          border: "1px solid #15803d",
          background: "#16a34a",
          color: "#fff",
          cursor: "pointer",
          fontWeight: 800,
        }}
      >
        復活
      </button>
    </li>
  ))}
</ul>

  )}
</section>

        {/* 新弾削除（手入力） */}
        <section style={cardStyle}>
          <h2 style={h2Style}>新弾削除（管理者用）</h2>

          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <input
              value={deleteFam}
              onChange={(e) => setDeleteFam(e.target.value)}
              placeholder="CX100"
              style={{ ...inputStyle, flex: 1 }}
            />
            <button onClick={() => onDeleteCxSet()} disabled={busy} style={dangerBtn}>
              新弾を削除
            </button>
          </div>

          {msg && (
            <div style={{ marginTop: 10, whiteSpace: "pre-wrap", color: "#334155" }}>
              {msg}
            </div>
          )}
        </section>

        {/* CSVアップロード */}
        <section style={cardStyle}>
          <CsvUploadForm />
        </section>

        {/* ユーザー一覧 */}
        <section style={cardStyle}>
          <AdminUsersList />
        </section>
      </div>
    </main>
  );
}
