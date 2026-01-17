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
  getDoc,
  where,
  getDocs,
  writeBatch,
  addDoc,
} from "firebase/firestore";

import { getAuth } from "firebase/auth";

// ✅ 追加：Cloud Functions を呼ぶ
import { getFunctions, httpsCallable } from "firebase/functions";



type UserRow = {
  id: string; // = UID（ドキュメントID）
  email?: string;
  name?: string;
  createdBy?: string;
  createdAt?: Timestamp | null;
  enabled?: boolean;
  reactivatePending?: boolean; // ✅ 追加：救済予定フラグ
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

// ✅ 追加：name編集（uid -> 入力中の文字）
const [editNameByUid, setEditNameByUid] = useState<Record<string, string>>({});

// ✅ 追加：保存中（uid -> true）
const [savingByUid, setSavingByUid] = useState<Record<string, boolean>>({});

// ✅ 追加：保存完了表示（uid -> "保存しました"）
const [saveMsgByUid, setSaveMsgByUid] = useState<Record<string, string>>({});

// ✅ 追加：コピー完了表示（uid -> "コピーしました"）
const [copyMsgByUid, setCopyMsgByUid] = useState<Record<string, string>>({});



// ✅ 追加：停止予定（カレンダー用の保存場所）
const [stopOpen, setStopOpen] = useState(false);
const [stopDate, setStopDate] = useState(""); // 例: 2026-01-20
const [stopTime, setStopTime] = useState(""); // 例: 00:00

// ★ 追加：UIDごとの権限テキスト
const [permSummary, setPermSummary] = useState<{ [uid: string]: string }>({});

// ▼ 追加：スマホ判定（520px以下は“狭い”扱い）
const [isNarrow, setIsNarrow] = useState(false);

useEffect(() => {
  const mq = window.matchMedia("(max-width: 520px)");

  const update = () => setIsNarrow(mq.matches);
  update();

  // Safari古め対策も入れる
  if (typeof mq.addEventListener === "function") {
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  } else {
    mq.addListener(update);
    return () => mq.removeListener(update);
  }
}, []);

    // ✅ 追加：救済予定フラグを ON / OFF する関数
  async function toggleReactivatePending(r: UserRow) {

    const ref = doc(db, "users", r.id);
    await updateDoc(ref, {
      reactivatePending: !r.reactivatePending,
      updatedAt: serverTimestamp(),
    });
  }

    // ✅ 追加：name を保存する（uid を指定）
async function saveName(uid: string) {
  // Firestoreの現在値（rows）を基準にする
  const current = (rows.find((x) => x.id === uid)?.name ?? "").trim();

  // 入力中があればそれ、なければ現在値（＝未編集で保存しても空上書きにならない）
  const next = ((editNameByUid[uid] ?? current) ?? "").trim();

  // 変更なしなら何もしない（事故防止）
  if (next === current) {
    setSaveMsgByUid((m) => ({ ...m, [uid]: "変更なし" }));
    window.setTimeout(() => {
      setSaveMsgByUid((m) => {
        const n = { ...m };
        delete n[uid];
        return n;
      });
    }, 1200);
    return;
  }

  try {
    setSavingByUid((m) => ({ ...m, [uid]: true }));

    await updateDoc(doc(db, "users", uid), {
      name: next,
      updatedAt: serverTimestamp(),
    });

    setSaveMsgByUid((m) => ({ ...m, [uid]: "保存しました" }));
    window.setTimeout(() => {
      setSaveMsgByUid((m) => {
        const n = { ...m };
        delete n[uid];
        return n;
      });
    }, 1200);
  } finally {
    setSavingByUid((m) => ({ ...m, [uid]: false }));
  }
}




  // ✅ 追加：一括有効化（※まずはダミー。白画面を直すため）
   async function bulkReactivatePending() {
    const ok = window.confirm(
      "再開対象 ON のユーザーを一括で有効化します。\n（再開対象フラグは OFF に戻ります）"
    );
    if (!ok) return;


    // 再開対象ONだけ取得
    const qy = query(
      collection(db, "users"),
      where("reactivatePending", "==", true)
    );
    const snap = await getDocs(qy);

    if (snap.empty) {
      window.alert("再開対象 ON のユーザーはいません");
      return;
    }

    // ログ用：メールの@前 + UID を作る（※メールが無ければUIDだけ）
    const targets = snap.docs.map((d) => {
      const v = d.data() as any;
      const email: string | undefined = v?.email;
      const emailPrefix = email?.includes("@") ? email.split("@")[0] : undefined;
      return { uid: d.id, emailPrefix: emailPrefix ?? "(no-email)" };
    });

    // まとめて更新
    const batch = writeBatch(db);
    snap.forEach((d) => {
      batch.update(d.ref, {
        enabled: true,
        reactivatePending: false,
        updatedAt: serverTimestamp(),
      });
    });
    await batch.commit();

    // 操作ログ（イベント単位で保存）
    // ※多すぎると1ドキュメント制限に近づくので、念のため200件まで保存
    const TARGET_LIMIT = 200;
    const targetsLimited = targets.slice(0, TARGET_LIMIT);

    const auth = getAuth();
    const actorEmail = auth.currentUser?.email ?? null;
    const actorEmailPrefix =
      actorEmail && actorEmail.includes("@") ? actorEmail.split("@")[0] : null;

    await addDoc(collection(db, "adminLogs"), {
      action: "bulkReactivatePending",
      createdAt: serverTimestamp(),
      count: snap.size,
      targets: targetsLimited, // [{uid, emailPrefix}, ...]
      targetsTruncated: targets.length > TARGET_LIMIT,
      actorUid: auth.currentUser?.uid ?? null,
      actorEmailPrefix,
      actorEmail,
    });

    window.alert(`一括で再開しました（${snap.size}件）`);
  }


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
  reactivatePending: v.reactivatePending ?? false, // ✅ 追加
});

  });

  setRows(list);
  setLoading(false);

  // ★ ここから：権限(cx_permissions)をまとめて読み込んで permSummary に入れる
  (async () => {
    try {
      const now = new Date();
      const summaries: { [uid: string]: string } = {};

      await Promise.all(
        list.map(async (u) => {
          try {
            const permSnap = await getDoc(doc(db, "cx_permissions", u.id));
            const permData = (permSnap.data() as any) ?? {};
            const enabledSets = permData.enabledSets ?? {};

            const fams = Object.keys(enabledSets);
            if (!fams.length) {
              summaries[u.id] = "権限なし";
              return;
            }

            const parts = fams.map((fam) => {
              const ex = enabledSets[fam]?.expiresAt;

              // 期限なし
              if (!ex) {
                return `${fam} 期限なし`;
              }

              // Firestore Timestamp → Date に変換
              const d =
                typeof ex.toDate === "function"
                  ? ex.toDate()
                  : new Date(ex.seconds * 1000);

              const y = d.getFullYear();
              const m = `${d.getMonth() + 1}`.padStart(2, "0");
              const dd = `${d.getDate()}`.padStart(2, "0");

              // 期限切れならその表示
              if (d.getTime() < now.getTime()) {
                return `${fam} 期限切れ（〜${y}/${m}/${dd}）`;
              }

              return `${fam} 〜${y}/${m}/${dd}`;
            });

            summaries[u.id] = parts.join(" / ");
          } catch (e) {
            console.error("perm load failed:", u.id, e);
            summaries[u.id] = "権限読み込みエラー";
          }
        }),
      );

      setPermSummary(summaries);
    } catch (e) {
      console.error("load perms summary failed:", e);
    }
  })();
});

    return () => unsub();
  }, [db]);

  const filtered = useMemo(() => {
    const raw = qText.trim().toLowerCase();

    // ★ Chrome がログイン中メールを勝手に入れた場合は「フィルタ無し扱い」
    const q = adminEmail && raw === adminEmail ? "" : raw;

    if (!q) return rows;

    return rows.filter((r) =>
      [r.email ?? "", r.name ?? "", r.id].some((x) =>
        x.toLowerCase().includes(q),
      ),
    );
  }, [rows, qText, adminEmail]);

  

  return (
    <div style={{ maxWidth: 640, margin: "24px auto", padding: "0 12px" }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
        ユーザー一覧
      </h2>

      <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    gap: 8,
    flexWrap: "wrap",
    marginBottom: 10,
  }}
>
  <button
  type="button"
  onClick={async () => {
    const ok = window.confirm("管理者以外を全員、使えない状態にします。OK？");
    if (!ok) return;

    try {
      const functions = getFunctions();
      const fn = httpsCallable(functions, "adminDisableAllNonAdmins");
      await fn({});

      const db = getFirestore();
      await updateDoc(doc(db, "system", "config"), {
        stopAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      alert("管理者以外を全員 停止しました");
    } catch (e) {
      console.error(e);
      alert("失敗。右のConsoleの赤いエラーをスクショで見せて。");
    }
  }}
  style={{
    padding: "8px 14px",
    borderRadius: 9999,
    border: "1px solid #dc2626",
    background: "#dc2626",
    color: "white",
    fontSize: 12,
    fontWeight: 700,
    whiteSpace: "nowrap",
    cursor: "pointer",
  }}
>
  全員停止（今すぐ）
</button>



    <button
    type="button"
    onClick={() => setStopOpen((v) => !v)}
    style={{
      padding: "8px 12px",
      borderRadius: 9999,
      border: "1px solid #d1d5db",
      background: "#f59e0b",
      color: "white",
      fontSize: 12,
      whiteSpace: "nowrap",
      cursor: "pointer",
    }}
  >
    停止予定を設定
  </button>


  <button
    type="button"
    onClick={bulkReactivatePending}
    style={{
      padding: "8px 12px",
      borderRadius: 9999,
      border: "1px solid #d1d5db",
      background: "#111827",
      color: "white",
      fontSize: 12,
      whiteSpace: "nowrap",
      cursor: "pointer",
    }}
  >
    再開対象ONを一括有効化
  </button>
</div>

      
            {stopOpen && (
        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: 12,
            padding: 12,
            marginBottom: 10,
            background: "#fff",
          }}
        >
          <div style={{ fontWeight: 700, marginBottom: 8 }}>停止予定</div>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 12, marginBottom: 4 }}>日付</div>
              <input
                type="date"
                value={stopDate}
                onChange={(e) => setStopDate(e.target.value)}
              />
            </div>

            <div>
              <div style={{ fontSize: 12, marginBottom: 4 }}>時刻</div>
              <input
                type="time"
                value={stopTime}
                onChange={(e) => setStopTime(e.target.value)}
              />
            </div>

            {/* ✅ 追加：保存ボタン */}
            <button
              type="button"
              onClick={async () => {
                if (!stopDate || !stopTime) {
                  window.alert("日付と時刻を入れてください");
                  return;
                }

                // stopDate: "2026-01-12" / stopTime: "15:43"
                const [y, m, d] = stopDate.split("-").map((v) => Number(v));
                const [hh, mm] = stopTime.split(":").map((v) => Number(v));

                const dt = new Date(y, m - 1, d, hh, mm, 0, 0);

                const ok = window.confirm(
                  `この日時で停止予定を保存します。\n${stopDate} ${stopTime}\nよろしいですか？`
                );
                if (!ok) return;

                await updateDoc(doc(db, "system", "config"), {
                  stopAt: Timestamp.fromDate(dt),
                });

                window.alert("停止予定を保存しました");
                setStopOpen(false);
              }}
              style={{
                padding: "8px 12px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
                background: "#111827",
                color: "white",
                fontSize: 12,
                cursor: "pointer",
              }}
            >
              保存
            </button>

            <button type="button" onClick={() => setStopOpen(false)}>
              閉じる
            </button>
          </div>
        </div>
      )}

      

      {/* ここから下は元のまま（検索＋一覧） */}
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
            gridTemplateColumns: "1fr",
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
                gridTemplateColumns: "1fr",

                alignItems: "center",
                gap: 8,
              }}
            >
              <div
  style={{
    minWidth: 0,
    maxHeight: 140,
    overflow: "auto",
    wordBreak: "break-word",
  }}
>

  <div style={{ fontWeight: 600 }}>
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

   {/* ▼ name：その場で編集＋保存＋コピー（バックアップ用） */}
    <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
    <textarea
      value={editNameByUid[r.id] ?? r.name ?? ""}
      onChange={(e) =>
        setEditNameByUid((m) => ({ ...m, [r.id]: e.target.value }))
      }
      placeholder="name（購入日など）"
      rows={2}
      style={{
        width: "100%",
        padding: "6px 8px",
        border: "1px solid #e5e7eb",
        borderRadius: 8,
        fontSize: 12,
        color: "#111827",
        background: "#fff",
        resize: "vertical",
        boxSizing: "border-box",
        wordBreak: "break-word",
      }}
    />


    <button
  type="button"
  disabled={!!savingByUid[r.id]}
  onClick={async (e) => {
    e.preventDefault();
    e.stopPropagation();
    await saveName(r.id);
  }}
  style={{
    padding: "6px 10px",
    borderRadius: 9999,
    border: "1px solid #d1d5db",
    background: "#111827",
    color: "white",
    fontSize: 12,
    whiteSpace: "nowrap",
    cursor: "pointer",
    opacity: savingByUid[r.id] ? 0.6 : 1,
  }}
>
  {savingByUid[r.id] ? "保存中…" : "保存"}
</button>

{/* ✅ 追加：保存しました（1.2秒だけ） */}
{saveMsgByUid[r.id] && (
  <div style={{ color: "#16a34a", fontWeight: 800, fontSize: 12 }}>
    {saveMsgByUid[r.id]}
  </div>
)}

<button
  type="button"
  onClick={async (e) => {
    e.preventDefault();
    e.stopPropagation();

    // ▼ バックアップ用（1行）※必要なら好きに書式変更OK
    const line = `${r.email ?? ""}\t${r.id}\t${(editNameByUid[r.id] ?? r.name ?? "").trim()}`;

    // iPhoneでも事故りにくいコピー方式（textarea + execCommand）
    const el = document.createElement("textarea");
    el.value = line;
    el.style.position = "fixed";
    el.style.top = "0";
    el.style.left = "0";
    el.style.opacity = "0";
    document.body.appendChild(el);
    el.focus();
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);

    // ✅ 追加：コピーしました（1.2秒だけ）
    setCopyMsgByUid((m) => ({ ...m, [r.id]: "コピーしました" }));
    window.setTimeout(() => {
      setCopyMsgByUid((m) => {
        const n = { ...m };
        delete n[r.id];
        return n;
      });
    }, 1200);
  }}
  style={{
    padding: "6px 10px",
    borderRadius: 9999,
    border: "1px solid #d1d5db",
    background: "#ffffff",
    color: "#111827",
    fontSize: 12,
    whiteSpace: "nowrap",
    cursor: "pointer",
  }}
>
  コピー
</button>

{/* ✅ 追加：コピーしました（1.2秒だけ） */}
{copyMsgByUid[r.id] && (
  <div style={{ color: "#16a34a", fontWeight: 800, fontSize: 12, whiteSpace: "nowrap" }}>
    {copyMsgByUid[r.id]}
  </div>
)}



  </div>


  <div style={{ color: "#9ca3af", fontSize: 12 }}>
    UID: {r.id}
  </div>

 

                <div style={{ color: "#9ca3af", fontSize: 12 }}>
                  作成: {formatDate(r.createdAt)}
                </div>

</div>

                            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
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

                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleReactivatePending(r);
                  }}
                  style={{
                    padding: "8px 12px",
                    borderRadius: 9999,
                    border: "1px solid #d1d5db",
                    background: r.reactivatePending ? "#6366f1" : "#e5e7eb",
                    color: r.reactivatePending ? "white" : "#374151",
                    fontSize: 12,
                    whiteSpace: "nowrap",
                    cursor: "pointer",
                  }}
                >
                  {r.reactivatePending ? "再開対象 ON" : "再開対象 OFF"}
                </button>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}
