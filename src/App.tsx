// src/App.tsx
import { useEffect, useMemo, useState } from "react";
import type React from "react";
import { useCsvData } from "./hooks/useCsvData";
import { circledCol, matchAll } from "./lib/matcher";
import { useSearchHistory, type HistoryItem } from "./hooks/useSearchHistory";
import { loadCards as loadCx3Cards, loadPositions, type PositionRow, SPECIAL_P } from "./lib/cx3";
import { colorForRarity, toHalf } from "./lib/rarity";
import "./firebase";
import { useAuthUser, useSessionGuard, SignInCard, SignOutButton } from "./auth";


/** セレクト（CX3等）の実寸幅を固定するピクセル値。詰めたいなら 80 などに変更 */
const SEL_FIXED_PX = 86;
/* ========= セット辞書レジストリ（土台） ========= */
// 例: "CX3" / "CX-4" / "xc5" などから「CX3」「CX4」「CX5」に正規化
const parseSetFamily = (setKey: string): string => {
  const k = String(setKey).toUpperCase();
  const m = k.match(/CX[-_]?(\d+)/i);
  return m ? `CX${m[1]}` : k;  // マッチしなければそのまま
};

type Dicts = {
  rarity: Map<string, string>;
  name:   Map<string, string>;
  specialP: Set<string>;
};
const REGISTRY = new Map<string, Dicts>();

const getDicts = (setKey: string): Dicts => {
  const fam = parseSetFamily(setKey);
  return REGISTRY.get(fam)
      || REGISTRY.get("COMMON")
      || { rarity: new Map(), name: new Map(), specialP: new Set() };
};
const setRegistry = (family: string, dicts: Dicts) => {
  REGISTRY.set(parseSetFamily(family), dicts);
};


/* ========= ユーティリティ ========= */
const abs = (path: string) => {
  try {
    const baseEnv = (import.meta as any)?.env?.BASE_URL;
    const base = (typeof baseEnv === "string" && baseEnv.length) ? baseEnv : "/";
    const origin = (typeof window !== "undefined" && (window as any).location?.origin)
      ? (window as any).location.origin : "http://localhost";
    const baseNorm = base.startsWith("/") ? base : ("/" + base);
    return origin.replace(/\/+$/, "") + baseNorm + String(path).replace(/^\/+/, "");
  } catch { return "/" + String(path).replace(/^\/+/, ""); }
};
const CSV_URL = abs((import.meta as any).env.VITE_CSV_URL || "cards.cx3.csv");
const MAX_LR_CANDIDATES = 4;
const SEARCH_BLUE = "#1677FF";

/** ── 色決定ポリシー（PDF準拠・全レア色分け）────────────────────────
 *  1) 「数字+P」は基本 SR★（オレンジ）
 *  2) ただし SPECIAL_P（= PでもLR扱いのもの）は LR★（紫）
 *  3) それ以外はレアリティ文字列の色（★はそのまま渡す）
 *  4) ★背景色は N（白）以外はすべて着色（= PDFと同じ“全部色分け”）
 */
// ★ CSVのレア表記を最優先。無ければ保険で判定。
// ★ CSVのレア表記を最優先。無ければ保険で判定。
// ★ CSVのレア表記を最優先。無ければ保険で判定。
const colorForToken = (token: string, rarityUpper?: string): string => {
  // すべて正規化してから判定
  const k  = toHalf(String(token)).toUpperCase();
  const ru = normalizeRarity(rarityUpper || "");

  // ① 「辞書が無印でも P なら ★ 扱い」に補正
  //    LR + 〇P → LR★（紫） / SR + 〇P → SR★（橙） / CP + 〇P → CP★（橙）
  if (/^\d+P$/.test(k)) {
    if (ru === "LR") return colorForRarity("LR★");
    if (ru === "SR") return colorForRarity("SR★");
    if (ru === "CP") return colorForRarity("CP★");
  }

  // ② SPECIAL_P は常に LR★（紫）
  if (SPECIAL_P.has(k)) return colorForRarity("LR★");

  // ③ 正規化済みのレア表記が来ていればその色を使う
  if (ru) return colorForRarity(ru);

  // ④ 最後の保険：数字+P は SR★（箔押し扱い）
  if (/^\d+P$/.test(k)) return colorForRarity("SR★");

  // ⑤ それ以外は N（白）
  return colorForRarity("N");
};

// ★ 背景色の有無（PDF完全準拠：N以外は全部色を付ける / SPECIAL_P は当然ON）
const shouldTint = (token: string, rarityUpper?: string): boolean => {
  const k = toHalf(String(token)).toUpperCase();
  if (SPECIAL_P.has(k)) return true;
  const r = normalizeRarity(rarityUpper || "");
  return r !== "" && r !== "N";
};

// ← shouldTint() の直後に差し替え
const normalizeRarity = (raw?: string): string => {
  const s0 = toHalf(String(raw || "")).toUpperCase().trim();
  const s  = s0.replace(/\s+/g, "").replace(/_/g, "");

  // ★P（箔押し）だけを ★ に寄せる。無印LRはそのまま赤（LR）。
  // LRP/ LR★ → LR★（紫）
  if (s === "LR★" || s === "LRP") return "LR★";

  // SRP/ SR★/ PA → SR★（オレンジ）
  if (s === "SR★" || s === "SRP" || s === "PA") return "SR★";

  // CPP/ CP★ → CP★（オレンジ）
  if (s === "CP★" || s === "CPP") return "CP★";

  // ベースはそのまま
  if (s === "LR" || s === "SR" || s === "CP" || s === "R") return s;
  if (s === "N" || s === "NORMAL" || s === "NORM" || s === "0") return "N";

  return s; // 不明なものはそのまま返す（上位で判断）
};

const CIRCLED_MAP: Record<string, number> = { "①":1,"②":2,"③":3,"④":4,"⑤":5,"⑥":6,"⑦":7,"⑧":8,"⑨":9,"⑩":10,"⑪":11,"⑫":12 };
const toNum = (v:any):number => {
  if (v==null) return NaN;
  const s0 = String(v).trim();
  if (s0 in CIRCLED_MAP) return CIRCLED_MAP[s0 as keyof typeof CIRCLED_MAP];
  const s1 = toHalf(s0).replace(/[()（）［］\[\]\s]/g,"");
  const m = s1.match(/\d+/);
  return m ? parseInt(m[0],10) : NaN;
};
const normalizeCyl = (v:any):"L"|"R" => {
  const raw = String(v ?? "").trim();
  const a = toHalf(raw).toUpperCase();
  if (a.startsWith("R") || raw.includes("右")) return "R";
  return "L";
};

type ByCyl = { L: Record<number, any[]>; R: Record<number, any[]> };
type BuiltIndex = { byCyl: ByCyl; maxRow: number };
function buildIndexLocal(rows: any[]): BuiltIndex {
  const byCyl: ByCyl = { L: {}, R: {} };
  let maxRow = 0;
  for (const r of rows) {
    const cyl = normalizeCyl(r.cyl ?? r["シリンダー"] ?? r["cyl"]);
    const col = toNum(r.col ?? r["列"] ?? r["col"]);
    const row = toNum(r.row ?? r["行"] ?? r["row"]);
    if (!col || !row) continue;
    if (!byCyl[cyl][col]) byCyl[cyl][col] = [];
    byCyl[cyl][col].push({ ...r, row });
    if (row > maxRow) maxRow = row;
  }
  (["L","R"] as const).forEach(k=>{
    Object.keys(byCyl[k]).forEach(c=>{
      byCyl[k][Number(c)].sort((a:any,b:any)=>a.row-b.row);
    });
  });
  return { byCyl, maxRow };
}

type Route = "home" | "leftResults" | "rightResults";
const routeFromHash = (): Route => {
  const h = (location.hash || "").replace("#/","");
  if (h === "leftResults") return "leftResults";
  if (h === "rightResults") return "rightResults";
  return "home";
};
const nav = (r: Route) => { location.hash = "/" + r; };

// ===== CX セット識別ユーティリティ（前処理） =====
// 例: " cx-5 ", "ＸＣ５", "xc5", "CX５" などの表記ブレを正規化して "CX5" へ
const normalizeSetKey = (input: string): string => {
  if (!input) return "";
  // 全角→半角の一部・記号・空白をざっくり吸収
  const z2h = (s: string) =>
    s
      .replace(/[Ａ-Ｚａ-ｚ０-９]/g, (c) =>
        String.fromCharCode(c.charCodeAt(0) - 0xfee0)
      )
      .replace(/[－ー―—–]/g, "-")
      .replace(/\s+/g, "");

  let s = z2h(input).toUpperCase();

  // XC → CX（タイプミス／並び違いを吸収）
  s = s.replace(/^XC/, "CX");

  // "CX-5" → "CX5"
  s = s.replace(/^CX-?([345])$/, "CX$1");

  return s;
};

// 与えられた文字列からセットキーを検出して正規化して返す
// 例: "これはcx-5です" → "CX5" / マッチしなければ元の normalize 結果を返す
const detectSetKey = (raw: string): string => {
  const s = normalizeSetKey(raw);
  const m = s.match(/CX[345]/);
  return m ? m[0] : s;
};


// CX3/CX4/CX5 を“完全配列表モード”として扱う
const isCxMode = (setKey: string) => {
  const key = detectSetKey(setKey);
  return /^(CX[345])$/.test(key);
};


// 表記ブレは detectSetKey で正規化し、完全一致だけ許可
const isCx3 = (key: string) => detectSetKey(key) === "CX3";
const isCx4 = (key: string) => detectSetKey(key) === "CX4";
const isCx5 = (key: string) => detectSetKey(key) === "CX5";


/* ========= 永続保存（複数件対応 / localStorage） ========= */
export type SavedEntry = { id: string; pattern: number[]; memo: string; ts: number; rev?: boolean };

const listKey = (side:"L"|"R", setKey:string) => `legends:savedList:${setKey}:${side}`;

// 旧仕様(単一保存)からの移行用
type LegacySaved = { pattern?: number[]; loops?: number|null; memo: string; ts: number };
const legacyKey = (side:"L"|"R", setKey:string) => `legends:savedMemo:${setKey}:${side}`;

function loadSavedList(side:"L"|"R", setKey:string): SavedEntry[] {
  try{
    const raw = localStorage.getItem(listKey(side,setKey));
    if (raw) return (JSON.parse(raw) as SavedEntry[]).filter(x=>Array.isArray(x.pattern));
    const m = localStorage.getItem(legacyKey(side,setKey));
    if (m) {
      const old = JSON.parse(m) as LegacySaved;
      if (old?.pattern?.length) {
        const ent: SavedEntry = {
          id: String(old.ts || Date.now()),
          pattern: old.pattern, memo: old.memo || "", ts: old.ts || Date.now()
        };
        saveSavedList(side,setKey,[ent]);
        localStorage.removeItem(legacyKey(side,setKey));
        return [ent];
      }
    }
    return [];
  }catch{ return []; }
}
function saveSavedList(side:"L"|"R", setKey:string, list:SavedEntry[]){
  try{ localStorage.setItem(listKey(side,setKey), JSON.stringify(list)); }catch{}
}
function addSavedEntry(side:"L"|"R", setKey:string, pattern:number[], memo:string, rev:boolean = false){
  const list = loadSavedList(side,setKey);
  const ent: SavedEntry = {
    id: `${Date.now()}_${Math.random().toString(36).slice(2,8)}`,
    pattern: [...pattern], memo: memo.slice(0,128), ts: Date.now(), rev
  };
  saveSavedList(side,setKey, [ent, ...list]);
}

function updateSavedEntry(
  side:"L"|"R", setKey:string, id:string,
  patch:Partial<Pick<SavedEntry,"pattern"|"memo"|"rev">>
){
  const list = loadSavedList(side,setKey);
  const next = list.map(x=> x.id===id ? { ...x, ...patch, ts: Date.now() } : x);
  saveSavedList(side,setKey, next);
}

function removeSavedEntry(side:"L"|"R", setKey:string, id:string){
  const list = loadSavedList(side,setKey);
  saveSavedList(side,setKey, list.filter(x=>x.id!==id));
}
function findSaved(side:"L"|"R", setKey:string, id:string): SavedEntry | undefined {
  return loadSavedList(side,setKey).find(x=>x.id===id);
}



/* ========= 左右ペア保存 ========= */
type SavedPair = {
  id: string;
  left:  { set: string; pattern: number[]; rev?: boolean };
  right: { set: string; pattern: number[]; rev?: boolean };
  memo: string;
  ts: number;
};

const PAIR_KEY = "legends:savedPairs:v1";

function loadPairs(): SavedPair[] {
  try {
    const raw = localStorage.getItem(PAIR_KEY);
    return raw ? (JSON.parse(raw) as SavedPair[]) : [];
  } catch {
    return [];
  }
}
function savePairs(list: SavedPair[]) {
  try { localStorage.setItem(PAIR_KEY, JSON.stringify(list)); } catch {}
}
function addPair(
  leftSet: string,  leftPat:  number[],
  rightSet: string, rightPat: number[],
  memo: string, revL?: boolean, revR?: boolean
) {
  const ent: SavedPair = {
    id: `${Date.now()}_${Math.random().toString(36).slice(2,8)}`,
    left:  { set: leftSet,  pattern: [...leftPat],  rev: !!revL },
    right: { set: rightSet, pattern: [...rightPat], rev: !!revR },
    memo: memo.slice(0,128),
    ts: Date.now(),
  };
  savePairs([ent, ...loadPairs()]);
}
function updatePair(id: string, patch: Partial<Pick<SavedPair,"left"|"right"|"memo">>) {
  const next = loadPairs().map(x => x.id === id ? { ...x, ...patch, ts: Date.now() } : x);
  savePairs(next);
}
function removePair(id: string) {
  savePairs(loadPairs().filter(x => x.id !== id));
}



// ========= App =========
export default function App() {
  const { user, ready } = useAuthUser();
  const { checking, ok } = useSessionGuard(user);
  const [loginMsg, setLoginMsg] = useState("");   // ← ここ追加

  // 準備中
  if (!ready || checking) {
    return (
      <main className="app">
        <header className="header">
          <div className="header-inner">
            <h1>ガンバレジェンズ配列表 検索ツール</h1>
          </div>
        </header>
      </main>
    );
  }

  // ログインしてるけど sessions に無い（別端末に取られた）
  if (user && !ok) {
    return (
      <main className="app">
        <header className="header">
          <div className="header-inner">
            <h1>ガンバレジェンズ配列表 検索ツール</h1>
          </div>
        </header>
        <SignInCard onBlocked={setLoginMsg} />  {/* ← ここで受け取る */}
        {loginMsg && (
          <div
            style={{
              maxWidth: 360,
              margin: "0 auto",
              padding: "0 16px",
              color: "#ef4444",
              fontSize: 12,
            }}
          >
            {loginMsg}
          </div>
        )}
      </main>
    );
  }

  // 未ログイン
  if (!user) {
    return (
      <main className="app">
        <header className="header">
          <div className="header-inner">
            <h1>ガンバレジェンズ配列表 検索ツール</h1>
          </div>
        </header>
        <SignInCard onBlocked={setLoginMsg} />
        {loginMsg && (
          <div
            style={{
              maxWidth: 360,
              margin: "0 auto",
              padding: "0 16px",
              color: "#ef4444",
              fontSize: 12,
            }}
          >
            {loginMsg}
          </div>
        )}
      </main>
    );
  }

  // ログイン済
  return <AppBody />;
}


function AppBody() {

  

  const { rows, sets, loading, error } = useCsvData(CSV_URL);  // ← 既存の処理はこの下から

  const rowsNorm = useMemo(() => rows.map(r => ({ ...r, set: String(r?.set ?? r?.series ?? r?.["シリーズ"] ?? r?.["弾"] ?? "").trim().toUpperCase() })), [rows]);

  const setOptions = useMemo(() => {
    const seen = new Set<string>();
    rowsNorm.forEach(r => { const key = String(r.set || "").trim(); if (key) seen.add(key); });
    const arr = [...seen];
    if (!arr.includes("CX3")) arr.push("CX3");
if (!arr.includes("CX4")) arr.push("CX4");
if (!arr.includes("CX5")) arr.push("CX5"); // ← これを追加

    return arr.sort((a,b)=>{
  const na = parseInt(a.replace(/\D+/g,""),10);
  const nb = parseInt(b.replace(/\D+/g,""),10);
  if (!Number.isNaN(na) && !Number.isNaN(nb)) return nb - na; // 降順
  return b.localeCompare(a,"ja"); // フォールバックも降順
});

  }, [rowsNorm]);

  const [leftSet, setLeftSet] = useState("CX5");
const [rightSet, setRightSet] = useState("CX5");

  useEffect(() => {
  if (!leftSet) setLeftSet("CX5");
  if (!rightSet) setRightSet("CX5");
}, []);



  const [lQuery, setLQuery] = useState<number[]>([]);
  const [rQuery, setRQuery] = useState<number[]>([]);
  const [route, setRoute] = useState<Route>(routeFromHash());
  const [dirL, setDirL] = useState<"down"|"up">("down");
  const [dirR, setDirR] = useState<"down"|"up">("down");
  

  useEffect(()=>{ const onHash=()=>setRoute(routeFromHash()); window.addEventListener("hashchange",onHash); return ()=>window.removeEventListener("hashchange",onHash); },[]);
const isMobile = typeof window !== "undefined"
  ? window.matchMedia("(max-width: 640px)").matches
  : false;

  const rowsL   = useMemo(() => rowsNorm.filter(r => r.set === leftSet),  [rowsNorm, leftSet]);
  const rowsR   = useMemo(() => rowsNorm.filter(r => r.set === rightSet), [rowsNorm, rightSet]);
  const leftIdx  = useMemo(() => buildIndexLocal(rowsL),  [rowsL]);
  const rightIdx = useMemo(() => buildIndexLocal(rowsR), [rowsR]);

  const lHitsGL = useMemo(() => {
    const p = dirL === "up" ? [...lQuery].reverse() : lQuery;
    return (leftSet && p.length ? matchAll(rowsNorm, leftSet, "L", p) : []);
  }, [rowsNorm, leftSet, lQuery, dirL]);

  const rHitsGL = useMemo(() => {
    const p = dirR === "up" ? [...rQuery].reverse() : rQuery;
    return (rightSet && p.length ? matchAll(rowsNorm, rightSet, "R", p) : []);
  }, [rowsNorm, rightSet, rQuery, dirR]);

  const histL = useSearchHistory(`legends:${leftSet}:L`);
  const histR = useSearchHistory(`legends:${rightSet}:R`);
  const [openHistL, setOpenHistL] = useState(false);
  const [openHistR, setOpenHistR] = useState(false);

  /* ===== 入力 ===== */
  const [candLInput, setCandLInput] = useState("");
  const [candLDigits, setCandLDigits] = useState<number[]>([]);
  const [candRInput, setCandRInput] = useState("");
  const [candRDigits, setCandRDigits] = useState<number[]>([]);

  const patLNow = useMemo(()=> candLDigits, [candLDigits]);
  const patRNow = useMemo(()=> candRDigits, [candRDigits]);

  const undoOneL = () => setCandLDigits(prev => prev.slice(0, -1));
  const undoOneR = () => setCandRDigits(prev => prev.slice(0, -1));

  const runSearchL    = () => { if (!patLNow.length) return; setLQuery(patLNow); setDirL("down"); histL.add(patLNow,false); nav("leftResults"); };
  const runSearchLRev = () => { if (!patLNow.length) return; setLQuery(patLNow); setDirL("up");   histL.add(patLNow,true);  nav("leftResults"); };
  const clearL        = () => { setCandLDigits([]); setCandLInput(""); };

  const runSearchR    = () => { if (!patRNow.length) return; setRQuery(patRNow); setDirR("down"); histR.add(patRNow,false); nav("rightResults"); };
  const runSearchRRev = () => { if (!patRNow.length) return; setRQuery(patRNow); setDirR("up");   histR.add(patRNow,true);  nav("rightResults"); };
  const clearR        = () => { setCandRDigits([]); setCandRInput(""); };

  function restoreL(item: HistoryItem){ setCandLDigits(item.pattern); setCandLInput(""); setLQuery(item.pattern); setDirL(item.rev?"up":"down"); nav("leftResults"); }
  function restoreR(item: HistoryItem){ setCandRDigits(item.pattern); setCandRInput(""); setRQuery(item.pattern); setDirR(item.rev?"up":"down"); nav("rightResults"); }

  const commitCand = (side: "L"|"R") => {
    const raw = (side==="L" ? candLInput : candRInput).trim();
    if (!raw) return;
    const m = raw.match(/^\d{1,3}$/);
    if (m) {
      const n = parseInt(m[0],10);
      if (!Number.isNaN(n)) {
        if (side==="L") setCandLDigits(prev=>[...prev,n]);
        else setCandRDigits(prev=>[...prev,n]);
      }
    }
    if (side==="L") setCandLInput("");
    else setCandRInput("");
  };
  const onCandChange = (side:"L"|"R") => (e:React.ChangeEvent<HTMLInputElement>)=>{
    const s = e.target.value.replace(/[^\d]/g,"").slice(0,3);
    if (side==="L") setCandLInput(s); else setCandRInput(s);
  };
  const onCandKeyDown = (side:"L"|"R") => (e:React.KeyboardEvent<HTMLInputElement>)=>{
    if (e.key==="Enter" || e.key===" " || e.key===",") { e.preventDefault(); commitCand(side); return; }
    if (e.key==="Backspace") {
      const buf = side==="L" ? candLInput : candRInput;
      if (!buf) {
        if (side==="L") setCandLDigits(prev=>prev.slice(0,-1));
        else setCandRDigits(prev=>prev.slice(0,-1));
      }
    }
  };
  const onCandBlur = (side:"L"|"R") => ()=> commitCand(side);

  useEffect(() => {
    if (!candLInput) return;
    const t = setTimeout(() => commitCand("L"), 900);
    return () => clearTimeout(t);
  }, [candLInput]);
  useEffect(() => {
    if (!candRInput) return;
    const t = setTimeout(() => commitCand("R"), 900);
    return () => clearTimeout(t);
  }, [candRInput]);

  // 共通(cards.csv) / CX3 / CX4 を分けて持つ
  const [commonKeyRarity, setCommonKeyRarity] = useState<Map<string,string>>(new Map());
  const [commonKeyName,   setCommonKeyName]   = useState<Map<string,string>>(new Map());

  const [cx3KeyRarity, setCx3KeyRarity] = useState<Map<string,string>>(new Map());
  const [cx3KeyName,   setCx3KeyName]   = useState<Map<string,string>>(new Map());

  const [cx4KeyRarity, setCx4KeyRarity] = useState<Map<string,string>>(new Map());
  const [cx4KeyName,   setCx4KeyName]   = useState<Map<string,string>>(new Map());

  const [cx5KeyRarity, setCx5KeyRarity] = useState<Map<string, string>>(new Map());
const [cx5KeyName,   setCx5KeyName]   = useState<Map<string, string>>(new Map());

  const deriveKeys = (codeRaw: string): string[] => {
    const u = toHalf(String(codeRaw||"")).toUpperCase().trim();
    const keys = new Set<string>();
    keys.add(u);
    const mSuf = u.match(/(\d{1,3}P?)$/);
    if (mSuf) {
      const suf = mSuf[1];
      const m = suf.match(/^(\d+)(P)?$/);
      if (m) {
        const n  = String(parseInt(m[1],10));
        const n2 = n.padStart(2,"0");
        if (m[2]) { keys.add(`${n}P`); keys.add(`${n2}P`); }
        else { keys.add(n); keys.add(n2); keys.add(`${n}P`); keys.add(`${n2}P`); }
      }
    }
    return [...keys];
  };

  useEffect(() => { (async ()=>{
    try{
      const mpCommonR = new Map<string,string>();
      const mpCommonN = new Map<string,string>();
      const mpCX3R    = new Map<string,string>();
      const mpCX3N    = new Map<string,string>();
      const mpCX4R    = new Map<string,string>();
      const mpCX4N    = new Map<string,string>();
      const mpCX5R    = new Map<string, string>();
      const mpCX5N    = new Map<string, string>();

      // 共通（cards.csv）
      try{
        const cards = await loadCx3Cards(abs("cards.csv"));
        for (const c of cards as any[]) {
          const code = String(c.code||""); const name = String(c.name||""); const rar = String(c.rarity||"");
          for (const k of deriveKeys(code)) {
            if (name && !mpCommonN.has(k)) mpCommonN.set(k, name);
            if (rar  && !mpCommonR.has(k)) mpCommonR.set(k, rar);
          }
        }
      }catch{}

      // CX3（cards.cx3.csv）
      try{
        const cards = await loadCx3Cards(abs("cards.cx3.csv"));
        for (const c of cards as any[]) {
          const code = String(c.code||""); const name = String(c.name||""); const rar = String(c.rarity||"");
          for (const k of deriveKeys(code)) {
            if (name && !mpCX3N.has(k)) mpCX3N.set(k, name);
            if (rar  && !mpCX3R.has(k)) mpCX3R.set(k, rar);
          }
        }
      }catch{}

      // CX4（cards.cx4.csv → cx4_cards.csv）
      for (const src of ["cards.cx4.csv", "cx4_cards.csv"]) {
        try{
          const cards = await loadCx3Cards(abs(src));
          for (const c of cards as any[]) {
            const code = String(c.code||""); const name = String(c.name||""); const rar = String(c.rarity||"");
            for (const k of deriveKeys(code)) {
              if (name && !mpCX4N.has(k)) mpCX4N.set(k, name);
              if (rar  && !mpCX4R.has(k)) mpCX4R.set(k, rar);
            }
          }
        }catch{}
      }
// === CX5 の辞書を読み込む（cards.cx5.csv 他の別名も許容） ===
for (const src of ["cards.cx5.csv", "cx5_cards.csv", "cs5_cards.csv"]) {
  try {
    const rows5 = await loadCx3Cards(abs(src));
    for (const c of rows5 as any[]) {
      const code = String(c.code ?? "");
      const name = String(c.name ?? "");
      const rar  = String(c.rarity ?? "");
      // 既存の deriveKeys を使ってコード表記ゆれを吸収
      for (const k of deriveKeys(code)) {
        if (name && !mpCX5N.has(k)) mpCX5N.set(k, name);
        if (rar  && !mpCX5R.has(k)) mpCX5R.set(k, rar);
      }
    }
    break; // どれか1つ読めたらOK
  } catch {}
}

 setCommonKeyRarity(mpCommonR); setCommonKeyName(mpCommonN);
setCx3KeyRarity(mpCX3R);       setCx3KeyName(mpCX3N);
setCx4KeyRarity(mpCX4R);       setCx4KeyName(mpCX4N);
setCx5KeyRarity(mpCX5R);       setCx5KeyName(mpCX5N); // ← 追加！

setRegistry("COMMON", { rarity: mpCommonR, name: mpCommonN, specialP: SPECIAL_P });
setRegistry("CX3",    { rarity: mpCX3R,    name: mpCX3N,    specialP: SPECIAL_P });
setRegistry("CX4",    { rarity: mpCX4R,    name: mpCX4N,    specialP: SPECIAL_P });
setRegistry("CX5",    { rarity: mpCX5R,    name: mpCX5N,    specialP: SPECIAL_P });


// ★ ここまで

    }catch(e){ console.warn("cards csv 読込失敗:", e); }
  })() }, []);

  
  // 置き換え版（SPECIAL_P を最優先）


    // （確認用ログ。不要なら消してOK）
    
  // ← deriveKeys の直下に貼る
  // ← deriveKeys の直下：REGISTRY（getDicts）経由に差し替え
const rarityStrictFor = (setKey: string) => (rawToken: string) => {
  const t = toHalf(String(rawToken || "")).toUpperCase().trim();

  // 対象セットの辞書（COMMON フォールバックは getDicts 側）
  const { rarity, specialP } = getDicts(setKey);

  // SPECIAL_P は常に LR★ 優先
  if (specialP.has(t)) return "LR★";

  // 完全一致
  if (rarity.has(t)) return rarity.get(t)!;

  // 数字/P/ゼロ埋め補完
  const m = t.match(/^(\d+)(P)?$/);
  if (m) {
    const n  = String(parseInt(m[1], 10));
    const n2 = n.padStart(2, "0");
    const wantP = !!m[2];
    if (wantP) return rarity.get(`${n}P`) || rarity.get(`${n2}P`) || undefined;
    return rarity.get(n) || rarity.get(n2) || undefined;
  }

  // 最後に COMMON を保険
  const { rarity: commonRarity } = getDicts("COMMON");
  if (commonRarity.has(t)) return commonRarity.get(t);

  return undefined;
};

const nameLooseFor = (setKey: string) => (rawToken: string) => {
  const t = toHalf(String(rawToken || "")).toUpperCase().trim();

  // セット名辞書＆COMMON 名辞書
  const { name } = getDicts(setKey);
  const { name: commonName } = getDicts("COMMON");

  // 完全一致
  if (name.has(t)) return name.get(t);

  // 派生キー（7/07/7P/07P など）で探索
  for (const k of deriveKeys(t)) {
    const n = name.get(k) || commonName.get(k);
    if (n) return n;
  }
  return undefined;
};

  
  /* ===== 位置 CSV（CX3 / CX4） ===== */

  // 行番号列（インデックス列）を検出する共通関数
  const detectRowIndexCols = (raw:any[]): Set<number> => {
    const idx = new Set<number>();
    for (let c=1;c<=12;c++){
      let total = 0, pureNo = 0, hasOther = 0;
      for (const r of raw){
        const arr = (r as any)[`col${c}`] as number[] | undefined;
        total++;
        if (!arr?.length) continue;
        if (arr.length === 1 && arr[0] === r.no) pureNo++;
        else hasOther++;
      }
      if (total>0 && pureNo/total >= 0.9 && hasOther === 0) idx.add(c);
    }
    return idx;
  };

  const [cx3Pos, setCx3Pos] = useState<PositionRow[]>([]);
  const [rowIndexCols, setRowIndexCols] = useState<Set<number>>(new Set());
  useEffect(() => { (async ()=>{
    try{
      const raw:any[] = await loadPositions(abs("cx3_positions.csv"));
      setCx3Pos(raw);
      setRowIndexCols(detectRowIndexCols(raw));
    }catch(e){ console.warn("cx3_positions.csv 読込失敗:", e); }
  })() }, []);

  // CX4
  const [cx4Pos, setCx4Pos] = useState<PositionRow[]>([]);
  const [rowIndexColsCX4, setRowIndexColsCX4] = useState<Set<number>>(new Set());
  useEffect(() => { (async ()=>{
    try{
      const raw:any[] = await loadPositions(abs("cx4_positions.csv"));
      setCx4Pos(raw);
      setRowIndexColsCX4(detectRowIndexCols(raw));
    }catch(e){ console.warn("cx4_positions.csv 読込失敗:", e); }
  })() }, []);

// CX5
const [cx5Pos, setCx5Pos] = useState<PositionRow[]>([]);
const [rowIndexColsCX5, setRowIndexColsCX5] = useState<Set<number>>(new Set());

useEffect(() => { (async ()=>{
  try{
    const raw: any[] = await loadPositions(abs("cx5_positions.csv"));
    setCx5Pos(raw);
    setRowIndexColsCX5(detectRowIndexCols(raw));
  }catch(e){ console.warn("cx5_positions.csv 読込失敗:", e); }
})() }, []);


  // 選択セットに応じた参照（CX3/CX4/CX5対応）
const posL = useMemo(
  () => (isCx5(leftSet) ? cx5Pos : isCx4(leftSet) ? cx4Pos : cx3Pos),
  [leftSet, cx3Pos, cx4Pos, cx5Pos]
);
const posR = useMemo(
  () => (isCx5(rightSet) ? cx5Pos : isCx4(rightSet) ? cx4Pos : cx3Pos),
  [rightSet, cx3Pos, cx4Pos, cx5Pos]
);

// 行番号列セットも切替
const rowIdxL = useMemo(
  () => (isCx5(leftSet) ? rowIndexColsCX5 : isCx4(leftSet) ? rowIndexColsCX4 : rowIndexCols),
  [leftSet, rowIndexCols, rowIndexColsCX4, rowIndexColsCX5]
);
const rowIdxR = useMemo(
  () => (isCx5(rightSet) ? rowIndexColsCX5 : isCx4(rightSet) ? rowIndexColsCX4 : rowIndexCols),
  [rightSet, rowIndexCols, rowIndexColsCX4, rowIndexColsCX5]
);


// --- 対の配列モーダル用：選択肢（①〜）を作る ---
// 左グリッドで選べる番号（行番号列は除外してカウント）
const dataPosColsL = useMemo(() => {
  const dataCols = Array.from({ length: 12 }, (_, i) => i + 1).filter(c => !rowIdxL.has(c));
  return Array.from({ length: dataCols.length }, (_, i) => i + 1); // ①..N
}, [rowIdxL]);

// 右グリッドで選べる番号（行番号列は除外してカウント）
const dataPosColsR = useMemo(() => {
  const dataCols = Array.from({ length: 12 }, (_, i) => i + 1).filter(c => !rowIdxR.has(c));
  return Array.from({ length: dataCols.length }, (_, i) => i + 1); // ①..N
}, [rowIdxR]);


  /* ===== 連番判定（空行だけスキップ） ===== */
  type Cx3Hit = {
    col: number;
    row: number;
    matched: number[];
    dir: "down" | "up";
    matchedRows: number[];
    nextLRSteps: number;
    nextLRMany?: number[];
    nextAnySteps: number;
    nextAnyMany?: number[];
  };

  function findSubseqSkipEmptyDown(seq: number[][], pat: number[]): number[][] {
    if (!pat.length) return [];
    const paths: number[][] = [];
    for (let start = 0; start < seq.length; start++) {
      const first = seq[start] || [];
      if (!first.length || !first.some(v => v === pat[0])) continue;
      if (pat.length === 1) { paths.push([start + 1]); continue; }
      let idx = start;
      const taken = [start];
      let ok = true;
      for (let j = 1; j < pat.length; j++) {
        let k = idx + 1;
        while (k < seq.length && !(seq[k] && seq[k].length)) k++;
        if (k >= seq.length) { ok = false; break; }
        const cell = seq[k]!;
        if (!cell.some(v => v === pat[j])) { ok = false; break; }
        taken.push(k);
        idx = k;
      }
      if (ok) paths.push(taken.map(i => i + 1));
    }
    return paths;
  }
  function findSubseqSkipEmptyUp(seq: number[][], pat: number[]): number[][] {
    if (!pat.length) return [];
    const paths: number[][] = [];
    for (let top = 0; top < seq.length; top++) {
      const first = seq[top] || [];
      if (!first.length || !first.some(v => v === pat[0])) continue;
      if (pat.length === 1) { paths.push([top + 1]); continue; }
      let idx = top;
      const taken = [top];
      let ok = true;
      for (let j = 1; j < pat.length; j++) {
        let k = idx - 1;
        while (k >= 0 && !(seq[k] && seq[k].length)) k--;
        if (k < 0) { ok = false; break; }
        const cell = seq[k]!;
        if (!cell.some(v => v === pat[j])) { ok = false; break; }
        taken.push(k);
        idx = k;
      }
      if (ok) paths.push(taken.map(i => i + 1));
    }
    return paths;
  }

  function buildCx3Hits(
    positions: PositionRow[], pat: number[], rowIndexCols: Set<number>, direction:"down"|"up"
  ): Cx3Hit[] {
    if (!pat.length || !positions?.length) return [];
    const sorted = positions.slice().sort((a,b)=>a.no-b.no);
    const cols: number[][][] = Array.from({length:12}, ()=>[]);
    for (const r of sorted) {
      for (let c=1;c<=12;c++){
        if (rowIndexCols.has(c)) { cols[c-1].push([]); continue; }
        const rawArr = (r as any)[`col${c}`] as number[] | undefined;
        const arr = Array.isArray(rawArr) ? rawArr : [];
        cols[c-1].push(arr);
      }
    }
    const hits: Cx3Hit[] = [];
    for (let c=1;c<=12;c++){
      const seq = cols[c-1];
      const paths = direction==="up" ? findSubseqSkipEmptyUp(seq, pat) : findSubseqSkipEmptyDown(seq, pat);
      for (const rowsPath of paths) {
        const endRow = direction === "down" ? rowsPath[rowsPath.length - 1] : rowsPath[0];

        let nextLRMany: number[] | undefined;
        let nextLRSteps = 0;
        if (direction === "down") {
          const nextIdx = rowsPath[rowsPath.length - 1];
          const arr = seq[nextIdx] || [];
          if (arr.length) { nextLRMany = arr; nextLRSteps = 1; }
        } else {
          const prevIdx = rowsPath[0] - 2;
          const arr = seq[prevIdx] || [];
          if (arr.length) { nextLRMany = arr; nextLRSteps = 1; }
        }

        let nextAnySteps = 0;
        let nextAnyMany: number[] | undefined;
        if (direction === "down") {
          let k = rowsPath[rowsPath.length - 1] - 1;
          while (++k < seq.length && !(seq[k] && seq[k].length)) {}
          if (k < seq.length) { nextAnySteps = k - (rowsPath[rowsPath.length - 1] - 1); nextAnyMany = seq[k]; }
        } else {
          let k = rowsPath[0] - 2;
          while (k >= 0 && !(seq[k] && seq[k].length)) k--;
          if (k >= 0) { nextAnySteps = (rowsPath[0] - 1) - k; nextAnyMany = seq[k]; }
        }

        hits.push({
          col:c, row:endRow, matched:[...pat], dir: direction,
          matchedRows: rowsPath,
          nextLRSteps, nextLRMany: nextLRMany?.length ? nextLRMany : undefined,
          nextAnySteps, nextAnyMany
        });
      }
    }
    return hits.sort((a,b)=> a.col-b.col || a.row-b.row);
  }

  const lHitsCX3_raw = useMemo(
    () => (isCxMode(leftSet) ? buildCx3Hits(posL, lQuery, rowIdxL, dirL) : []),
    [leftSet,  posL, lQuery, rowIdxL, dirL]
  );
  const rHitsCX3_raw = useMemo(
    () => (isCxMode(rightSet) ? buildCx3Hits(posR, rQuery, rowIdxR, dirR) : []),
    [rightSet, posR, rQuery, rowIdxR, dirR]
  );

  const lHitsCX3 = useMemo(() => lHitsCX3_raw, [lHitsCX3_raw]);
  const rHitsCX3 = useMemo(() => rHitsCX3_raw, [rHitsCX3_raw]);

  const hlCx3L = useMemo(()=> makeHLCx3(lHitsCX3), [lHitsCX3]);
  const hlCx3R = useMemo(()=> makeHLCx3(rHitsCX3), [rHitsCX3]);

// ★ 追加：高レア「あり/なし」でハイライトを二分するヘルパー
function makeHLCx3Split(
  hits: Array<{ col:number; row:number; matched:number[]; dir:"down"|"up"; matchedRows:number[] }>,
  positions: PositionRow[],
  setKey: string
){
  const good = new Set<string>(); // この先に高レアあり → 赤枠用
  const none = new Set<string>(); // この先に高レアなし → 別色枠用

  for (const h of hits) {
    const lines = buildLinesForHit(
      h as any,
      positions,
      rarityStrictFor(setKey),
      nameLooseFor(setKey)
    );
    const bucket = (lines.length > 0) ? good : none;
    for (const rr of h.matchedRows) if (rr > 0) bucket.add(`${h.col}:${rr}`);
  }
  return { good, none };
}

// ★ 追加：高レアあり/なしを二分したハイライト（まだ未使用）
const hlSplitL = useMemo(
  () => isCxMode(leftSet)
        ? makeHLCx3Split(lHitsCX3, posL, leftSet)
        : { good: new Set<string>(), none: new Set<string>() },
  [leftSet, lHitsCX3, posL]
);

const hlSplitR = useMemo(
  () => isCxMode(rightSet)
        ? makeHLCx3Split(rHitsCX3, posR, rightSet)
        : { good: new Set<string>(), none: new Set<string>() },
  [rightSet, rHitsCX3, posR]
);


  // ===== 可視列 =====
  const visiblePosFromCx3Hits = (hits: Cx3Hit[], rowIdx: Set<number>): number[] => {
    const dataCols = Array.from({ length: 12 }, (_, i) => i + 1).filter(c => !rowIdx.has(c));
    const s = new Set<number>();
    for (const h of hits) {
      const pos = dataCols.indexOf(h.col) + 1;
      if (pos > 0) s.add(pos);
    }
    return [...s].sort((a,b)=>a-b);
  };
  const visibleColsFromGLHits = (hits: any[]): number[] => {
    const s = new Set<number>();
    for (const h of hits) if (typeof h.col === "number") s.add(h.col);
    return [...s].sort((a,b)=>a-b);
  };

  const visColsCx3L = useMemo(()=> visiblePosFromCx3Hits(lHitsCX3, rowIdxL), [lHitsCX3, rowIdxL]);
const visColsCx3R = useMemo(()=> visiblePosFromCx3Hits(rHitsCX3, rowIdxR), [rHitsCX3, rowIdxR]);
const visColsGLL  = useMemo(()=> visibleColsFromGLHits(lHitsGL), [lHitsGL]);
const visColsGLR  = useMemo(()=> visibleColsFromGLHits(rHitsGL), [rHitsGL]);



// ★ 左が1列に確定
const leftHitCol = useMemo(
  () => (isCxMode(leftSet) && visColsCx3L.length === 1 ? visColsCx3L[0] : null),
  [leftSet, visColsCx3L]
);

// ★ 追加：右が1列に確定
const rightHitCol = useMemo(
  () => (isCxMode(rightSet) && visColsCx3R.length === 1 ? visColsCx3R[0] : null),
  [rightSet, visColsCx3R]
);

// ★ 追加：どちら側から開いたか（L:左→右 / R:右→左）
const [pairFrom, setPairFrom] = useState<"L" | "R">("L");

// ★ 起点側の確定が外れたらプレビューを閉じる
useEffect(() => {
  if (pairFrom === "L" && !leftHitCol)  setShowPairPreview(false);
  if (pairFrom === "R" && !rightHitCol) setShowPairPreview(false);
}, [pairFrom, leftHitCol, rightHitCol]);



  // 候補（※既存の type Candidate はそのまま使います）
function buildLinesForHit(
  hit: Cx3Hit,
  positions: PositionRow[],
  getRarityForKey?: (key: string) => string | undefined,
  getNameForKey?:   (key: string) => string | undefined
): Candidate[] {
  const rarFn  = (typeof getRarityForKey === "function") ? getRarityForKey : (() => undefined);
  const nameFn = (typeof getNameForKey   === "function") ? getNameForKey   : (() => undefined);

  // 表示は元の見た目を優先しつつ、内部比較はゼロ埋め差を吸収する
  const normCode = (raw: string) => {
    const t = toHalf(String(raw)).toUpperCase().trim();
    const m = t.match(/^0*(\d{1,3})(P?)$/);
    return m ? (String(parseInt(m[1],10)) + (m[2] ? "P" : "")) : t; // 例: "04P" -> "4P"
  };

  // レア判定（LRPかどうかとバッジ）
  const judge = (keyRaw: string) => {
    const key = toHalf(String(keyRaw)).toUpperCase().trim();   // 例: "04P"
    const isP = /^\d+P$/.test(key);
    const baseKey = isP ? key.slice(0, -1) : key;

    const pNorm    = normalizeRarity(rarFn(key)     || "").toUpperCase(); // "", "LR★", "SR★", ...
    const baseNorm = normalizeRarity(rarFn(baseKey) || "").toUpperCase(); // "", "LR", ...

    const special  = SPECIAL_P.has(key);
    const isLRAny  = special || pNorm.startsWith("LR") || baseNorm === "LR";
    const isLRP    = isP && !special && (pNorm === "LR★" || baseNorm === "LR"); // ← LRP定義

    const badge: "LR" | "LR★" = (special || isLRP || pNorm === "LR★") ? "LR★" : "LR";
    return { isLRAny, isLRP, badge };
  };

  const col = hit.col;
  const start = hit.row;

  const rowMap  = new Map<number, PositionRow>(positions.map(r => [r.no, r]));
  const allNos  = positions.map(r => r.no);
  const maxRowNo = allNos.length ? Math.max(...allNos) : 0;
  const minRowNo = allNos.length ? Math.min(...allNos) : 1;

  // 収集（最初に見えた距離のみ記録）
  const firstDistByNorm = new Map<string, number>(); // normCode -> dist
  const metaByNorm      = new Map<string, {badge:"LR"|"LR★"; isLRP:boolean}>(); // normCode -> 判定
  const displayKeyByNorm= new Map<string, string>(); // normCode -> 最初に見えた表示用キー（ゼロ埋め保持）

  const scanOneRow = (rr: number, baseRow: number) => {
    const row = rowMap.get(rr);
    const tokens = row ? (row as any)[`raw${col}`] as string[] | undefined : undefined;
    if (!Array.isArray(tokens) || tokens.length === 0) return;

    for (const raw of tokens) {
      const keyDisp = toHalf(String(raw)).toUpperCase().trim();  // 表示用（"04P" など）
      const nkey    = normCode(keyDisp);                          // 内部比較用（"4P" など）
      const j = judge(keyDisp);

      // 候補に載せるのは LR 系だけ（LR / LR★ / SPECIAL_P / 無印LRのP）
      if (!j.isLRAny) continue;

      if (!firstDistByNorm.has(nkey)) firstDistByNorm.set(nkey, Math.abs(rr - baseRow));
      if (!metaByNorm.has(nkey))      metaByNorm.set(nkey, { badge: j.badge, isLRP: j.isLRP });
      if (!displayKeyByNorm.has(nkey)) displayKeyByNorm.set(nkey, keyDisp);
    }
  };

  // 列の端まで全走査（方向に合わせて）
  if (hit.dir === "down") {
    for (let rr = start + 1; rr <= maxRowNo; rr++) scanOneRow(rr, start);
  } else {
    for (let rr = start - 1; rr >= minRowNo; rr--) scanOneRow(rr, start);
  }

  // アイテム化
  const items: Candidate[] = [];
  for (const [nkey, dist] of firstDistByNorm) {
    const disp = displayKeyByNorm.get(nkey)!;
    const meta = metaByNorm.get(nkey)!;
    items.push({
      code: disp,
      name: nameFn(disp) || disp,
      dist,
      color: colorForRarity(meta.badge === "LR★" ? "LR★" : "LR"),
      badge: meta.badge,
    });
  }

  // 近い順
  const sorted = items.sort((a, b) => a.dist - b.dist);

  // 直近4件（MAX_LR_CANDIDATES）
  const top = sorted.slice(0, MAX_LR_CANDIDATES);

  // 直近4件に LRP が無ければ、列全体で最短の LRP を 1件だけ追加
  const isLRPTop = (c: Candidate) => {
    const n = normCode(c.code);
    return !!metaByNorm.get(n)?.isLRP;
  };
  const hasLRPInTop = top.some(isLRPTop);

  if (!hasLRPInTop) {
    const extra = sorted.find(c => isLRPTop(c) && !top.some(t => normCode(t.code) === normCode(c.code)));
    if (extra) top.push(extra);
  }

  // 最大5件（= 直近4件 + LRP追加）
  return top.slice(0, MAX_LR_CANDIDATES + 1);
}



  /* ===== Home 用候補（ルピ付き） ===== */
  type Sug = {
    col: number; row: number;
    lines?: ReturnType<typeof buildLinesForHit>;
    noHigh?: boolean; nextAny?: number;
  };
  // Home 用候補：TOP4 + 必要なら LR★ を 5件目に注入
const buildSuggestions = (
  pat: number[],
  setKey: string,
  direction: "down" | "up" = "down"
): Sug[] => {
  if (!isCxMode(setKey) || !pat.length) return [];

  // ★ セットごとにポジション表を切り替える（CX3 / CX4 / CX5）
  const usePos =
    isCx5(setKey) ? cx5Pos :
    isCx4(setKey) ? cx4Pos :
                    cx3Pos;

  const useIdx =
    isCx5(setKey) ? rowIndexColsCX5 :
    isCx4(setKey) ? rowIndexColsCX4 :
                    rowIndexCols;

  if (!usePos.length) return [];


  const hits = buildCx3Hits(usePos, pat, useIdx, direction);

  // 候補行（lines）と「最短距離スコア」を用意
  const prepared = hits.map(h => {
    const lines = buildLinesForHit(
      h,
      usePos,
      rarityStrictFor(setKey), // セット依存のレア辞書
      nameLooseFor(setKey)     // セット依存の名前辞書
    );
    const score = lines.length
      ? Math.min(...lines.map(x => x.dist))
      : Number.POSITIVE_INFINITY;
    return { h, lines, score };
  });

  // ① 高レア行があるカードからスコア順でTOP4
  const top: Array<{ col:number; row:number; lines?: ReturnType<typeof buildLinesForHit>; noHigh?:boolean; nextAny?: number }> =
    prepared
      .filter(p => p.lines.length > 0)
      .sort((a, b) => a.score - b.score || a.h.col - b.h.col || a.h.row - b.h.row)
      .slice(0, 4)
      .map(p => ({ col: p.h.col, row: p.h.row, lines: p.lines }));

  // ② 4枚に満たなければフィラーで補完（“次に何か出るまで”の短い順）
  if (top.length < 4) {
    const fillers = prepared
      .filter(p => p.lines.length === 0)
      .sort((a, b) => {
        const an = (typeof a.h.nextAnySteps === "number") ? a.h.nextAnySteps : 999999;
        const bn = (typeof b.h.nextAnySteps === "number") ? b.h.nextAnySteps : 999999;
        return an - bn || a.h.col - b.h.col || a.h.row - b.h.row;
      })
      .map(p => ({ col: p.h.col, row: p.h.row, noHigh: true, nextAny: p.h.nextAnySteps }));
    top.push(...fillers.slice(0, 4 - top.length));
  }

  // ③ LR★ が全体では存在するのに TOP4 に無いなら、最短 LR★ を 5件目として注入
  const hasLRStarIn = (arr?: ReturnType<typeof buildLinesForHit>) =>
    Array.isArray(arr) && arr.some(c => c.badge === "LR★");

  const anyLRStar = prepared.some(p => hasLRStarIn(p.lines));
  const topHasLRStar = top.some(card => hasLRStarIn(card.lines));

  if (anyLRStar && !topHasLRStar) {
    // 全 prepared から「LR★行の最短距離」が最小のカードを選ぶ
    let best: null | { col:number; row:number; lines: ReturnType<typeof buildLinesForHit>; dist:number } = null;

    for (const p of prepared) {
      const lrstars = (p.lines || []).filter(c => c.badge === "LR★");
      if (!lrstars.length) continue;
      const d = Math.min(...lrstars.map(x => x.dist));
      if (
        !best ||
        d < best.dist ||
        (d === best.dist && (p.h.col < best.col || (p.h.col === best.col && p.h.row < best.row)))
      ) {
        best = { col: p.h.col, row: p.h.row, lines: p.lines, dist: d };
      }
    }

    if (best && !top.some(t => t.col === best!.col && t.row === best!.row)) {
      top.push({ col: best.col, row: best.row, lines: best.lines });
    }
  }

  // 最大5枚で返す（= 通常4件 + 必要なら LR★ 保険 1件）
  return top.slice(0, 5);
};


  const candSugL = useMemo(
    () => isCxMode(leftSet) ? buildSuggestions(patLNow, leftSet, "down") : [],
    [leftSet, patLNow, cx3Pos, cx4Pos, rowIndexCols, rowIndexColsCX4, cx3KeyRarity, cx3KeyName]
  );
  const candSugR = useMemo(
    () => isCxMode(rightSet) ? buildSuggestions(patRNow, rightSet, "down") : [],
    [rightSet, patRNow, cx3Pos, cx4Pos, rowIndexCols, rowIndexColsCX4, cx3KeyRarity, cx3KeyName]
  );

  /* ====== ルピ算出（表示はしない） ====== */
  const minLoopsFromHits = (
    hits: any[],
    cxMode: boolean,
    positions?: PositionRow[],
    setKey?: string
  ): number | null => {

    if (!hits?.length) return null;
    if (cxMode) {
      const arr:number[] = [];
      for (const h of hits) {
        const lines = buildLinesForHit(
          h,
          positions || [],
          setKey ? rarityStrictFor(setKey) : undefined,
          setKey ? nameLooseFor(setKey)   : undefined
        );

        if (lines?.length) arr.push(Math.min(...lines.map(l=>l.dist)));
      }
      if (!arr.length) return null;
      return Math.min(...arr);
    }
    const arr = hits.map(h=>h?.nextLRSteps).filter((n:number)=>typeof n==="number" && n>=0);
    return arr.length ? Math.min(...arr) : null;
  };
  const loopsL = useMemo(()=> minLoopsFromHits(isCxMode(leftSet)? lHitsCX3 : lHitsGL, isCxMode(leftSet), posL), [leftSet,lHitsCX3,lHitsGL,posL]);
  const loopsR = useMemo(()=> minLoopsFromHits(isCxMode(rightSet)? rHitsCX3 : rHitsGL, isCxMode(rightSet), posR), [rightSet,rHitsCX3,rHitsGL,posR]);

  /* ====== モーダル状態 ====== */
  const [saveModal, setSaveModal] =
  useState<{open:boolean; side:"L"|"R"|null; editId?:string|null; rev?:boolean}>({open:false, side:null, editId:null, rev:false});
  const [listModal, setListModal] =
  useState<{ open: boolean; side: "L" | "R" | null }>({ open: false, side: null });

  // ★ 対の配列プレビュー用（左結果→右列 / 右結果→左列）
const [pairPreviewR, setPairPreviewR] = useState<number | null>(null); // 左結果で表示する“右”の任意列
const [pairPreviewL, setPairPreviewL] = useState<number | null>(null); // 右結果で表示する“左”の任意列

// ★ どちら側の列を選ぶモーダルか（'R'＝右列を選ぶ／'L'＝左列を選ぶ）
const [pairPicker, setPairPicker] = useState<null | 'R' | 'L'>(null);
// 選択UIの一時値（モーダル内のセレクト）
const [pairPickPos, setPairPickPos] = useState<number>(1);

// モーダルを開いたタイミングで既存値を初期選択に
useEffect(() => {
  if (pairPicker === 'R') setPairPickPos(pairPreviewR || 1);
  if (pairPicker === 'L') setPairPickPos(pairPreviewL || 1);
}, [pairPicker]);

// セット変更や画面遷移でプレビューは一旦クリア
useEffect(() => { setPairPreviewR(null); setPairPreviewL(null); }, [leftSet, rightSet, route]);

// ★ ペア保存モーダル
const [pairSaveModal, setPairSaveModal] = useState<{ open: boolean }>({ open: false });

// ★ 保存変更トリガー
const [savedVersion, setSavedVersion] = useState(0);

// ★ 保存一覧モーダル（左右ペア）
const [pairListOpen, setPairListOpen] = useState(false);
const [pairListQuery, setPairListQuery] = useState("");

// ★ 編集モーダル（左右ペア）
const [pairEdit, setPairEdit] =
  useState<{ open: boolean; id: string | null }>({ open:false, id:null });

/* === 追加：対の配列プレビュー用 === */
// モーダルの開閉
const [showPairPreview, setShowPairPreview] = useState(false);
// 右側で“任意に表示する列”（位置＝①〜⑫の番号。nullは未選択）
const [rightPreviewPos, setRightPreviewPos] = useState<number | null>(null);

// ▼ 置き換え：過剰監視をやめて、必要な時だけ同期
useEffect(() => {
  if (!showPairPreview) return;

  // ★ ここに移動（useEffect の“中”）
  const tick = () => { try { syncPairPreviewRowHeights(); } catch {} };

  const raf = requestAnimationFrame(tick);
  const t0  = setTimeout(tick, 0);
  window.addEventListener('resize', tick);
  return () => {
    cancelAnimationFrame(raf);
    clearTimeout(t0);
    window.removeEventListener('resize', tick);
  };
}, [showPairPreview, rightPreviewPos, pairPreviewL, pairFrom]);


// ★ 追加：2本1セットの相方（1↔2, 3↔4, …, 11↔12）
const pairMate = (col?: number | null) => {
  if (!col || !Number.isFinite(col)) return 1;
  return col % 2 === 0 ? col - 1 : col + 1;
};



// ★ ここに追加（return の直前）
const currentPatternFor = (side: "L" | "R"): number[] => {
  const digits = side === "L" ? candLDigits : candRDigits;

  const buf    = (side === "L" ? candLInput  : candRInput).trim();

  const out = [...digits];
  if (/^\d{1,3}$/.test(buf)) out.push(parseInt(buf, 10));
  return out;  // 未入力なら [] を返す（前回の検索値には戻らない）
};


  /* ================= DL版：ショートカット（無効化） ================= */
useEffect(() => {}, []);
/* ================= /DL版 ================= */

// === IIFE撤去の準備：左右ペア一覧の取得＆フィルタ ===
const pairList = useMemo(() => loadPairs(), [savedVersion, pairListOpen]);

const filteredPairs = useMemo(() => {
  const list = pairList;
  const q = pairListQuery.trim().toLowerCase();
  if (!q) return list;
  return list.filter(it => {
    const ts = new Date(it.ts).toLocaleString("ja-JP");
    const leftPat  = it.left.pattern.join(" ");
    const rightPat = it.right.pattern.join(" ");
    return (
      (it.memo || "").toLowerCase().includes(q) ||
      it.left.set.toLowerCase().includes(q) ||
      it.right.set.toLowerCase().includes(q) ||
      leftPat.includes(q) || rightPat.includes(q) ||
      ts.includes(q)
    );
  });
}, [pairList, pairListQuery]);

// ★ 追加：保存した左右ペアを一発適用する
function applySavedPair(p: SavedPair) {
  // 左セット適用
  setLeftSet(p.left.set);
  setCandLDigits(p.left.pattern);
  setLQuery(p.left.pattern);
  setDirL(p.left.rev ? "up" : "down");

  // 右セット適用
  setRightSet(p.right.set);
  setCandRDigits(p.right.pattern);
  setRQuery(p.right.pattern);
  setDirR(p.right.rev ? "up" : "down");

  // 一覧を閉じて左結果へ（好みで右結果でもOK）
  setPairListOpen(false);
  nav("leftResults");
}

  return (
    <main className="app">
      <header className="header">
  <div className="header-inner">
    <h1>ガンバレジェンズ配列表 検索ツール</h1>
    <div className="header-actions">
      <SignOutButton />
    </div>
  </div>
</header>



      {route === "home" && (
        <>
          {/* 左 */}
          <section className="card">
            {/* 見出し + 履歴一覧（右と同じUI） */}
<div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6 }}>
  <div className="section-title" style={{ margin:0 }}>左シリンダー</div>
  <button
    className="btn btn-violet"
    style={{ marginLeft:"auto" }}
    onClick={()=>setPairListOpen(true)}
  >
    履歴一覧
  </button>
</div>

{/* 読み込み/エラー表示（従来のまま） */}
<div style={{ marginTop:8, fontSize:12, color:"#6b7280" }}>
  {(loading && !(isMobile && route === "home")) && "読込中…"}{" "}
  {(() => {
    const msg = String((error as any)?.message || "");
    if (!msg) return null;
    return /404| Not Found/i.test(msg) ? null : `エラー: ${msg}`;
  })()}
</div>



            {/* 1行目（中央揃え） */}
            <div
              className="select-row"
              style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", justifyContent: "center" }}
            >
              <div className="select-wrap">
                <select
                  value={leftSet}
                  onChange={(e) => { setLeftSet(e.target.value); setOpenHistL(false); }}
                  style={{ width: SEL_FIXED_PX, minWidth: SEL_FIXED_PX, maxWidth: SEL_FIXED_PX }}  // 幅固定
                >
                  {(setOptions.length ? setOptions : sets.length ? sets : ["CX3"]).map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <input
                value={candLInput}
                onChange={onCandChange("L")}
                onKeyDown={onCandKeyDown("L")}
                onBlur={onCandBlur("L")}
                placeholder="番号"
                inputMode="numeric"
                style={{ width: 56, textAlign: "center" }}
              />

              <button className="btn btn-blue" style={{ background: SEARCH_BLUE, borderColor: SEARCH_BLUE }} onClick={runSearchL}>検索</button>
              <button className="btn btn-pink" onClick={runSearchLRev}>逆順</button>
            </div>

            {/* 2行目：一つ前へ戻る / クリア（中央） */}
            <div className="select-row center-row" style={{ display:"flex", alignItems:"center", gap:8, marginTop:6, flexWrap:"wrap", justifyContent:"center" }}>
              <button className="btn-outline-blue" onClick={undoOneL}>一つ前へ戻る</button>
              <button className="btn btn-gray" onClick={clearL}>クリア</button>
            </div>

            {/* ※ ホームでは「履歴保存」行を削除 */}

            {!!candLDigits.length && (
              <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:6, justifyContent:"center" }}>
                {candLDigits.map((n,i)=>(<span key={i} className="pill pill-num">{n}</span>))}
              </div>
            )}
            {candLDigits.length > 0 && candSugL.length === 0 && (
              <div className="nohits">一致するパターンはありません。</div>
            )}

            {!!candSugL.length && (
              <div style={{ display:"grid", gap:8, marginTop:8 }}>
                {candSugL.map((s,i)=>{
                  const isLast = i === candSugL.length - 1;
                  return (
                    <div key={i} style={{ background:"#e6f0ff", borderRadius:8, border:"1px solid #cfe0ff", padding:"8px 10px" }}>
                      <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                        <span style={{ fontWeight:700, color:"#334155" }}>
                          ヒット位置: {circledCol(s.col)} の {s.row}番目
                        </span>
                      </div>

                      {s.lines?.length ? (
                        <div className="res-lines" style={{ marginTop:6 }}>
                          {s.lines.map(b => (
                            <div key={b.code} className="res-line" style={{ display:"flex", alignItems:"center", gap:8, flexWrap:"wrap" }}>
                              <span className="res-dist">（あと <strong>{b.dist}</strong> 回です）</span>
                              <span className="badge" style={{
                                background: b.badge==="LR" ? "#EF4444" : "#B388FF",
                                color:"#fff", borderRadius:6, padding:"2px 8px", fontWeight:700
                              }}>{b.badge}</span>
                              <span className="res-name">{b.code}:{b.name}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div style={{ marginTop:4, fontSize:12, color:"#6b7280" }}>
                          この先高レアは封入されておりません。
                          {typeof (s as any).nextAny === "number" && (s as any).nextAny >= 2 && <>（次に何か出るまで <strong>{(s as any).nextAny}</strong> 回）</>}
                        </div>
                      )}

                      {isLast && (
                        <div style={{ marginTop:8, display:"flex", justifyContent:"center" }}>
                          <button className="btn btn-blue" style={{ background: SEARCH_BLUE, borderColor: SEARCH_BLUE }} onClick={runSearchL}>
                            配列表を確認
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {openHistL && <HistoryPanel items={histL.items} onRestore={restoreL} onDelete={(ts)=>histL.remove(ts)} onClear={histL.clear}/>}
          </section>

          {/* 右 */}
          <section className="card">
            {/* タイトル + 右上に履歴一覧（保存はホームでは非表示） */}
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6 }}>
              <div className="section-title" style={{ margin:0 }}>右シリンダー</div>
              <button
                className="btn btn-violet"
                style={{ marginLeft:"auto" }}
                onClick={()=>setPairListOpen(true)}
              >
                履歴一覧
              </button>
            </div>

            {/* 1行目（中央揃え） */}
            <div
              className="select-row"
              style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", justifyContent: "center" }}
            >
              <div className="select-wrap">
                <select
                  value={rightSet}
                  onChange={(e) => { setRightSet(e.target.value); setOpenHistR(false); }}
                  style={{ width: SEL_FIXED_PX, minWidth: SEL_FIXED_PX, maxWidth: SEL_FIXED_PX }}  // 幅固定
                >
                  {(setOptions.length ? setOptions : sets.length ? sets : ["CX3"]).map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <input
                value={candRInput}
                onChange={onCandChange("R")}
                onKeyDown={onCandKeyDown("R")}
                onBlur={onCandBlur("R")}
                placeholder="番号"
                inputMode="numeric"
                style={{ width: 56, textAlign: "center" }}
              />

              <button className="btn btn-blue" style={{ background: SEARCH_BLUE, borderColor: SEARCH_BLUE }} onClick={runSearchR}>検索</button>
              <button className="btn btn-pink" onClick={runSearchRRev}>逆順</button>
            </div>

            {/* 2行目：一つ前へ戻る / クリア（中央） */}
            <div className="select-row center-row" style={{ display:"flex", alignItems:"center", gap:8, marginTop:6, flexWrap:"wrap", justifyContent:"center" }}>
              <button className="btn-outline-blue" onClick={undoOneR}>一つ前へ戻る</button>
              <button className="btn btn-gray" onClick={clearR}>クリア</button>
            </div>

            {/* ※ ホームでは「履歴保存」行を削除 */}

            {!!candRDigits.length && (
              <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:6, justifyContent:"center" }}>
                {candRDigits.map((n,i)=>(<span key={i} className="pill pill-num">{n}</span>))}
              </div>
            )}
            {candRDigits.length>0 && candSugR.length===0 && (
              <div className="nohits">一致するパターンはありません。</div>
            )}

            {!!candSugR.length && (
              <div style={{ display:"grid", gap:8, marginTop:8 }}>
                {candSugR.map((s,i)=>{
                  const isLast = i === candSugR.length - 1;
                  return (
                    <div key={i} style={{ background:"#e6f0ff", borderRadius:8, border:"1px solid #cfe0ff", padding:"8px 10px" }}>
                      <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                        <span style={{ fontWeight:700, color:"#334155" }}>
                          ヒット位置: {circledCol(s.col)} の {s.row}番目
                        </span>
                      </div>

                      {s.lines?.length ? (
                        <div className="res-lines" style={{ marginTop:6 }}>
                          {s.lines.map(b => (
                            <div key={b.code} className="res-line" style={{ display:"flex", alignItems:"center", gap:8, flexWrap:"wrap" }}>
                              <span className="res-dist">（あと <strong>{b.dist}</strong> 回です）</span>
                              <span className="badge" style={{
                                background: b.badge==="LR" ? "#EF4444" : "#B388FF",
                                color:"#fff", borderRadius:6, padding:"2px 8px", fontWeight:700
                              }}>{b.badge}</span>
                              <span className="res-name">{b.code}:{b.name}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div style={{ marginTop:4, fontSize:12, color:"#6b7280" }}>
                          この先高レアは封入されておりません。
                          {typeof (s as any).nextAny === "number" && (s as any).nextAny >= 2 && <>（次に何か出るまで <strong>{(s as any).nextAny}</strong> 回）</>}
                        </div>
                      )}

                      {isLast && (
                        <div style={{ marginTop:8, display:"flex", justifyContent:"center" }}>
                          <button className="btn btn-blue" style={{ background: SEARCH_BLUE, borderColor: SEARCH_BLUE }} onClick={runSearchR}>
                            配列表を確認
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {openHistR && <HistoryPanel items={histR.items} onRestore={restoreR} onDelete={(ts)=>histR.remove(ts)} onClear={histR.clear}/>}
          </section>
        </>
      )}

     {route === "leftResults" && (
  <section className="card">
    {/* ▼ ヘッダー（3段） */}
    <div style={{ display:"grid", gap:8, marginBottom:8 }}>
      {/* 1段目：戻るだけ（左寄せ） */}
      <div style={{ display:"flex", gap:8, alignItems:"center" }}>
        <button className="btn btn-gray" onClick={()=>nav("home")}>← 戻る</button>
      </div>

      {/* 2段目：ボタン群（左寄せ） */}
      <div style={{ display:"flex", gap:8, alignItems:"center", flexWrap:"wrap" }}>
        {isCxMode(leftSet) && leftHitCol && (
          <button
            className="btn btn-orange"
            style={{ background:"#F59E0B", borderColor:"#F59E0B", color:"#fff" }}
            onClick={() => { setPairFrom("L"); setRightPreviewPos(pairMate(leftHitCol)); setShowPairPreview(true); }}
          >
            対の配列の表示
          </button>
        )}
        <button className="btn btn-blue"   onClick={()=>setPairSaveModal({ open:true })}>履歴保存</button>
        <button className="btn btn-violet" onClick={()=>setPairListOpen(true)}>履歴一覧</button>
      </div>

      {/* 3段目：タイトル（左寄せ） */}
      <div>
        <strong>左シリンダー結果{dirL === "up" ? "（逆順）" : ""}</strong>
      </div>
    </div>

    {/* …この下にパターンのピルや ResultList, GridCx3 が続く… */}
    {!!lQuery.length && (
      <div style={{ display:"flex", gap:6, flexWrap:"wrap", alignItems:"center", marginBottom:6 }}>
        {lQuery.map((n,i)=>(<span key={i} className="pill pill-num">{n}</span>))}
      </div>
    )}

    <ResultList
      hits={(isCxMode(leftSet) ? lHitsCX3 : lHitsGL) as any}
      getLines={isCxMode(leftSet)
        ? (h)=>buildLinesForHit(h, posL, rarityStrictFor(leftSet), nameLooseFor(leftSet))
        : undefined}
      isReverse={dirL === "up"}
    />

    <div style={{ marginTop:12 }}>
      {isCxMode(leftSet)
        ? <GridCx3
            positions={posL}
            rowIndexCols={rowIdxL}
            getRarityForKey={rarityStrictFor(leftSet)}
            getNameForKey={nameLooseFor(leftSet)}
            highlight={hlCx3L}
            visibleCols={visColsCx3L}
            highlightGood={hlSplitL.good}
            highlightNone={hlSplitL.none}
          />
        : <Grid
            byCyl={leftIdx.byCyl}
            maxRow={Math.max(leftIdx.maxRow, 100)}
            highlightCells={makeHLCells(lHitsGL,leftIdx.byCyl,"L")}
            cylinder="L"
            visibleCols={visColsGLL}
          />
      }
    </div>
  </section>
)}

     {route === "rightResults" && (
  <section className="card">
    {/* ▼ ヘッダー（3段） */}
    <div style={{ display:"grid", gap:8, marginBottom:8 }}>
      {/* 1段目：戻る（左寄せ） */}
      <div style={{ display:"flex", gap:8, alignItems:"center" }}>
        <button className="btn btn-gray" onClick={()=>nav("home")}>← 戻る</button>
      </div>

      {/* 2段目：ボタン群（左寄せ）← marginLeft:"auto" を外す */}
      <div style={{ display:"flex", gap:8, alignItems:"center", flexWrap:"wrap" }}>
        {isCxMode(rightSet) && rightHitCol && (
          <button
             className="btn btn-orange"
            style={{ background:"#F59E0B", borderColor:"#F59E0B", color:"#fff" }}
            onClick={() => { setPairFrom("R"); setPairPreviewL(pairMate(rightHitCol)); setShowPairPreview(true); }}
          >
            対の配列の表示
          </button>
        )}
        <button className="btn btn-blue"   onClick={()=>setPairSaveModal({ open:true })}>履歴保存</button>
        <button className="btn btn-violet" onClick={()=>setPairListOpen(true)}>履歴一覧</button>
      </div>

      {/* 3段目：タイトル（左寄せ） */}
      <div>
        <strong>右シリンダー結果{dirR === "up" ? "（逆順）" : ""}</strong>
      </div>
    </div>

    {/* …この下は既存のピル/ResultList/GridCx3 … */}

    {/* ▲ ヘッダー置き換えブロック（ここまで） */}

    {/* …以下、右の内容… */}


          {!!rQuery.length && (
            <div style={{ display:"flex", gap:6, flexWrap:"wrap", alignItems:"center", marginBottom:6 }}>
              {rQuery.map((n,i)=>(<span key={i} className="pill pill-num">{n}</span>))}
            </div>
          )}

          <ResultList
  hits={(isCxMode(rightSet) ? rHitsCX3 : rHitsGL) as any}
  getLines={isCxMode(rightSet)
    ? (h)=>buildLinesForHit(h, posR, rarityStrictFor(rightSet), nameLooseFor(rightSet))
    : undefined}
  isReverse={dirR === "up"}   // ← これを追加
/>


          <div style={{ marginTop:12 }}>
            {isCxMode(rightSet)
              ? <GridCx3
  positions={posR}
  rowIndexCols={rowIdxR}
  getRarityForKey={rarityStrictFor(rightSet)}
  getNameForKey={nameLooseFor(rightSet)}
  highlight={hlCx3R}
  visibleCols={visColsCx3R}
  /* ★ 追加 */
  highlightGood={hlSplitR.good}
  highlightNone={hlSplitR.none}
/>

              : <Grid
                  byCyl={rightIdx.byCyl}
                  maxRow={Math.max(rightIdx.maxRow, 100)}
                  highlightCells={makeHLCells(rHitsGL,rightIdx.byCyl,"R")}
                  cylinder="R"
                  visibleCols={visColsGLR}
                />
            }
          </div>
        </section>
      )}

      {/* 追加：保存一覧モーダル */}
      {listModal.open && listModal.side && (
        <SavedListModal
          side={listModal.side}
          setKey={listModal.side==="L" ? leftSet : rightSet}
          version={savedVersion}
          onClose={()=>setListModal({open:false, side:null})}
          onEdit={(id)=>{ setSaveModal({open:true, side:listModal.side, editId:id}); }}
          onDelete={(id)=>{ removeSavedEntry(listModal.side!, listModal.side==="L"?leftSet:rightSet, id); setSavedVersion(v=>v+1); }}
          onApply={(pat, rev)=>{
  if (listModal.side==="L") {
    setCandLDigits(pat);
    setLQuery(pat);
    setDirL(rev ? "up" : "down");
    nav("leftResults");
  } else {
    setCandRDigits(pat);
    setRQuery(pat);
    setDirR(rev ? "up" : "down");
    nav("rightResults");
  }
  setListModal({open:false, side:null});
}}


        />
      )}

      {/* 追加：保存/編集モーダル（新規 or 既存を編集） */}
      {saveModal.open && saveModal.side && (
        <SaveMemoModal
  side={saveModal.side}
  setKey={saveModal.side==="L" ? leftSet : rightSet}
  pattern={saveModal.side==="L" ? currentPatternFor("L") : currentPatternFor("R")}
  editId={saveModal.editId ?? undefined}
  onSaved={()=>setSavedVersion(v=>v+1)}
  onClose={()=>setSaveModal({open:false, side:null, editId:null})}
  revDefault={!!saveModal.rev}
/>

      )}

{/* 追加：左右ペア保存モーダル */}
{pairSaveModal.open && (
  <PairSaveModal
    leftSet={leftSet}
    rightSet={rightSet}
    leftPattern={currentPatternFor("L")}
    rightPattern={currentPatternFor("R")}
    revL={dirL === "up"}
    revR={dirR === "up"}
    onClose={() => setPairSaveModal({ open: false })}
    onSaved={() => { setPairSaveModal({ open:false }); setSavedVersion(v => v + 1); }}
  />
)}

{/* ★ 対の配列プレビュー（左右対応） */}
{(() => {
  const canShow =
    showPairPreview &&
    (pairFrom === "L"
      ? (isCxMode(leftSet) && leftHitCol)
      : (isCxMode(rightSet) && rightHitCol));

  if (!canShow) return null;

  if (pairFrom === "L") {
    // ===== 左→右（従来） =====
    const leftPos = leftHitCol!;
    const allCols  = Array.from({ length: 12 }, (_, i) => i + 1);
    const dataColsR = allCols.filter(c => !rowIdxR.has(c));
    const viewColsR = Array.from({ length: 12 }, (_, i) => dataColsR[i] ?? null);
    const rightSelectablePos = viewColsR.map((colIdx, i) => (colIdx ? i + 1 : null)).filter((n): n is number => n !== null);

    const currentRightPos =
      (rightPreviewPos && rightSelectablePos.includes(rightPreviewPos))
        ? rightPreviewPos
        : (rightSelectablePos[0] ?? null);

    const onChangeRightPos = (e: any) => {
      const v = parseInt(String(e.target.value), 10);
      setRightPreviewPos(Number.isFinite(v) ? v : null);
    };

    return (
      <div className="modal">
        <div className="modal-backdrop" onClick={() => setShowPairPreview(false)} />
        <div className="modal-body" style={{ width: "min(860px, 96vw)" }}>
          <div className="modal-head">
            <div className="modal-title">対の配列の設定</div>
            <button className="modal-x" onClick={() => setShowPairPreview(false)}>×</button>
          </div>

          <div className="modal-content" style={{ display:"grid", gap:10 }}>
            {/* 右の選択 */}
            <div style={{ display:"grid", gap:8 }}>
              <div style={{ fontWeight:700 }}>シリーズ: {rightSet}</div>
              <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                <div className="select-wrap">
                  <select value={currentRightPos ?? ""} onChange={onChangeRightPos} style={{ width: 86 }}>
                    {rightSelectablePos.map(p => (<option key={p} value={p}>{circledCol(p)}</option>))}
                  </select>
                </div>
                <div style={{ fontSize:12, color:"#64748b" }}>
                  左は検索で確定した列（ハイライト有）／右は任意列（ハイライト無）
                </div>
              </div>
            </div>

            {/* プレビュー本体 */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
              {/* 左＝固定（ハイライト有） */}
              <div>
                <div style={{ fontWeight:700, marginBottom:6 }}>左（{leftSet}）</div>
                <GridCx3
                  positions={posL} rowIndexCols={rowIdxL}
                  getRarityForKey={rarityStrictFor(leftSet)} getNameForKey={nameLooseFor(leftSet)}
                  highlight={hlCx3L} visibleCols={[leftPos]}
                  highlightGood={hlSplitL.good} highlightNone={hlSplitL.none}
                />
              </div>
              {/* 右＝任意（ハイライト無） */}
              <div>
                <div style={{ fontWeight:700, marginBottom:6 }}>右（{rightSet}）</div>
                <GridCx3
                  positions={posR} rowIndexCols={rowIdxR}
                  getRarityForKey={rarityStrictFor(rightSet)} getNameForKey={nameLooseFor(rightSet)}
                  highlight={new Set()} visibleCols={currentRightPos ? [currentRightPos] : []}
                  highlightGood={new Set()} highlightNone={new Set()}
                />
              </div>
            </div>
          </div>

          <div className="modal-actions">
            <button className="btn btn-gray" onClick={() => setShowPairPreview(false)}>閉じる</button>
          </div>
        </div>
      </div>
    );
  } else {
    // ===== 右→左（新規） =====
    const rightPos = rightHitCol!;
    const allCols  = Array.from({ length: 12 }, (_, i) => i + 1);
    const dataColsL = allCols.filter(c => !rowIdxL.has(c));
    const viewColsL = Array.from({ length: 12 }, (_, i) => dataColsL[i] ?? null);
    const leftSelectablePos = viewColsL.map((colIdx, i) => (colIdx ? i + 1 : null)).filter((n): n is number => n !== null);

    const currentLeftPos =
      (pairPreviewL && leftSelectablePos.includes(pairPreviewL))
        ? pairPreviewL
        : (leftSelectablePos[0] ?? null);

    const onChangeLeftPos = (e: any) => {
      const v = parseInt(String(e.target.value), 10);
      setPairPreviewL(Number.isFinite(v) ? v : null);
    };

    return (
      <div className="modal">
        <div className="modal-backdrop" onClick={() => setShowPairPreview(false)} />
        <div className="modal-body" style={{ width: "min(860px, 96vw)" }}>
          <div className="modal-head">
            <div className="modal-title">対の配列の設定</div>
            <button className="modal-x" onClick={() => setShowPairPreview(false)}>×</button>
          </div>

          <div className="modal-content" style={{ display:"grid", gap:10 }}>
            {/* 左の選択（任意） */}
            <div style={{ display:"grid", gap:8 }}>
              <div style={{ fontWeight:700 }}>シリーズ: {leftSet}</div>
              <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                <div className="select-wrap">
                  <select value={currentLeftPos ?? ""} onChange={onChangeLeftPos} style={{ width: 86 }}>
                    {leftSelectablePos.map(p => (<option key={p} value={p}>{circledCol(p)}</option>))}
                  </select>
                </div>
                <div style={{ fontSize:12, color:"#64748b" }}>
                  右は検索で確定した列（ハイライト有）／左は任意列（ハイライト無）
                </div>
              </div>
            </div>

            {/* プレビュー本体 */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
              {/* 左＝任意（ハイライト無） */}
              <div>
                <div style={{ fontWeight:700, marginBottom:6 }}>左（{leftSet}）</div>
                <GridCx3
                  positions={posL} rowIndexCols={rowIdxL}
                  getRarityForKey={rarityStrictFor(leftSet)} getNameForKey={nameLooseFor(leftSet)}
                  highlight={new Set()} visibleCols={currentLeftPos ? [currentLeftPos] : []}
                  highlightGood={new Set()} highlightNone={new Set()}
                />
              </div>
              {/* 右＝固定（ハイライト有） */}
              <div>
                <div style={{ fontWeight:700, marginBottom:6 }}>右（{rightSet}）</div>
                <GridCx3
                  positions={posR} rowIndexCols={rowIdxR}
                  getRarityForKey={rarityStrictFor(rightSet)} getNameForKey={nameLooseFor(rightSet)}
                  highlight={hlCx3R} visibleCols={[rightPos]}
                  highlightGood={hlSplitR.good} highlightNone={hlSplitR.none}
                />
              </div>
            </div>
          </div>

          <div className="modal-actions">
            <button className="btn btn-gray" onClick={() => setShowPairPreview(false)}>閉じる</button>
          </div>
        </div>
      </div>
    );
  }
})()}

{/* 追加：左右ペアの保存一覧（描画） */}
{pairListOpen && (
  <div className="modal">
    <div className="modal-backdrop" onClick={()=>setPairListOpen(false)} />
    <div className="modal-body" style={{ width: "min(720px, 94vw)" }}>
      <div className="modal-head">
        <div className="modal-title">保存一覧（左右ペア）</div>
        <button className="modal-x" onClick={()=>setPairListOpen(false)}>×</button>
      </div>

      <div className="modal-content" style={{ display:"grid", gap:8 }}>
        {filteredPairs.length === 0 && (
          <div style={{ color:"#6b7280" }}>まだ保存はありません。</div>
        )}

        {filteredPairs.map(pair => (
  <PairRow
    key={pair.id}
    pair={pair}
    onApply={applySavedPair}
    onEdit={(id) => setPairEdit({ open:true, id })}
    onDelete={(id) => { removePair(id); setSavedVersion(v => v + 1); }}
  />
))}


        {pairEdit.open && pairEdit.id && (
          <PairEditModal
            id={pairEdit.id}
            onClose={() => setPairEdit({ open:false, id:null })}
            onSaved={() => {
              setPairEdit({ open:false, id:null });
              setSavedVersion(v => v + 1);
            }}
          />
        )}
      </div>

      <div className="modal-actions">
        <button className="btn btn-gray" onClick={()=>setPairListOpen(false)}>閉じる</button>
      </div>
    </div>
  </div>
)}



  
        
         


      <div style={{ marginTop:8, fontSize:12, color:"#6b7280" }}>
  {(loading && !(isMobile && route === "home")) && "読込中…"}{" "}
  {(() => {
    const msg = String((error as any)?.message || "");
    if (!msg) return null;
    // favicon 404 等は出さない
    return /(404|Not\s*Found)|favicon\.ico/i.test(msg) ? null : `エラー: ${msg}`;
  })()}
</div>
      <footer
  className="site-copy"
  role="contentinfo"
  style={{ textAlign: "center" }}   // ← 追加
>
  2023–2025 Copyright All Rights Reserved.
</footer>

    </main>

    
  );
}

/* ========= 小パーツ ========= */

function HistoryPanel({ items, onRestore, onDelete, onClear }:{
  items: HistoryItem[], onRestore:(i:HistoryItem)=>void, onDelete:(ts:number)=>void, onClear:()=>void
}) {
  return (
    <div className="history-panel">
      <div className="history-row" style={{ justifyContent:"space-between" }}>
        <div className="history-meta">保存件数: {items.length}</div>
        <div className="history-actions"><button className="history-clear" onClick={onClear}>全消去</button></div>
      </div>
      {items.map(it=>(
        <div key={it.ts} className="history-row">
          <div>
            <div style={{display:"flex",alignItems:"center",gap:6}}>
  <strong>{it.pattern.join(" → ")}</strong>
  {it.rev && <span className="rev-badge">逆順</span>}
</div>

            <div className="history-meta">{new Date(it.ts).toLocaleString("ja-JP")}</div>
          </div>
          <div className="history-actions">
            <button className="history-restore" onClick={()=>onRestore(it)}>復元</button>
            <button className="history-delete" onClick={()=>onDelete(it.ts)}>削除</button>
          </div>
        </div>
      ))}
      {!items.length && <div className="history-meta">まだ履歴はありません。</div>}
    </div>
  );
}


/* ===== 結果リスト ===== */
function ResultList({ hits, getLines, isReverse = false }: {
  hits: any[],
  getLines?: (hit:any)=>Array<{code:string; name:string; dist:number; badge:"LR"|"LR★"}>,
  isReverse?: boolean
}) {
  if (!hits?.length) return <div className="res-empty">一致はまだありません。</div>;

  const hasCx3 = typeof getLines === "function";

  const prepared = hits
    .map((h:any) => {
      const lines = hasCx3 ? (getLines!(h) ?? []) : undefined;
      const score = hasCx3
        ? (lines.length ? Math.min(...lines.map(x => x.dist)) : Number.POSITIVE_INFINITY)
        : (typeof h.nextLRSteps === "number" ? h.nextLRSteps : Number.POSITIVE_INFINITY);
      return { h, lines, score };
    })
    .sort((a,b)=> a.score - b.score || a.h.col - b.h.col || a.h.row - b.h.row);

  // CXモード：Top4にLR★が無ければ5件目にLR★を注入
  let topN: Array<typeof prepared[number]>;
  if (!hasCx3) {
    topN = prepared.slice(0, 4);
  } else {
    const good = prepared.filter(p => p.lines.length > 0).slice(0, 4);
    if (good.length < 4) {
      const fillers = prepared
        .filter(p => p.lines.length === 0)
        .sort((a,b) => {
          const an = (typeof a.h.nextAnySteps === "number") ? a.h.nextAnySteps : 999999;
          const bn = (typeof b.h.nextAnySteps === "number") ? b.h.nextAnySteps : 999999;
          return an - bn || a.h.col - b.h.col || a.h.row - b.h.row;
        });
      good.push(...fillers.slice(0, 4 - good.length));
    }
    const hasLRStarIn = (arr?: Array<{badge:"LR"|"LR★"}>) => Array.isArray(arr) && arr.some(c => c.badge === "LR★");
    const topHasLRStar = good.some(p => hasLRStarIn(p.lines));
    if (!topHasLRStar) {
      let best: null | { p: typeof prepared[number]; dist: number } = null;
      for (const p of prepared) {
        const lrstars = (p.lines || []).filter(x => x.badge === "LR★");
        if (!lrstars.length) continue;
        const d = Math.min(...lrstars.map(x => x.dist));
        if (!best ||
            d < best.dist ||
            (d === best.dist && (p.h.col < best.p.h.col || (p.h.col === best.p.h.col && p.h.row < best.p.h.row)))) {
          best = { p, dist: d };
        }
      }
      if (best && !good.some(g => g.h.col === best!.p.h.col && g.h.row === best!.p.h.row)) {
        good.push(best.p);
      }
    }
    topN = good.slice(0, 5);
  }

  return (
    <div className="res-list">
      <p className="res-summary">
        {topN.length} 件の最短パターンと一致しました。
        {isReverse && <span className="rev-badge">逆順</span>}
      </p>

      {topN.map(({h, lines}, i) => (
        <div key={i} className="res-card">
          <div className="res-head">
            <div className="pos">
              ヒット位置: <strong>{circledCol(h.col)}</strong> の <strong>{h.row}番目</strong>
            </div>
            {isReverse && <span className="rev-badge">逆順</span>}
            {!hasCx3 && (
              <div className="meta">
                {Array.isArray(h.nextLRMany) && h.nextLRMany.length
                  ? <>次: <strong>{h.nextLRMany.join("/")}</strong></>
                  : <>（あと <strong>{h.nextLRSteps ?? 0}</strong> 回です）</>
                }
              </div>
            )}
          </div>

          {hasCx3 && !!lines?.length && (
            <div className="res-lines">
              {lines.slice().sort((a,b)=>a.dist-b.dist).map(b => (
                <div key={b.code} className="res-line">
                  <span className="res-dist">（あと <strong>{b.dist}</strong> 回です）</span>
                  <span className={`badge ${b.badge === "LR" ? "badge-lr" : "badge-p"}`}>{b.badge}</span>
                  <span className="res-name">{b.code}:{b.name}</span>
                </div>
              ))}
            </div>
          )}

          {hasCx3 && !lines?.length && (
            <div className="res-lines">
              <div className="res-line">
                <span className="res-name">この先高レアは封入されておりません。</span>
                {typeof h.nextAnySteps === "number" && h.nextAnySteps >= 2 && (
                  <span className="res-dist">（次に何か出るまで <strong>{h.nextAnySteps}</strong> 回）</span>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}


function Grid({ byCyl, maxRow, highlightCells, cylinder, visibleCols }:{
  byCyl:any, maxRow:number, highlightCells:Set<string>, cylinder:"L"|"R",
  visibleCols?: number[],
}) {
  const show: Record<number, any[]> = byCyl?.[cylinder] || {};
  const allCols = Array.from({ length: 12 }, (_, i) => i + 1);
  const filterSet = new Set(visibleCols ?? []);
  const cols = (filterSet.size > 0) ? allCols.filter(c => filterSet.has(c)) : allCols;

  return (
    <div className="grid-wrap">
      <table className="grid">
        <thead>
          <tr>
            <th style={{ width:36 }}></th>
            {cols.map(c=> <th key={c}>{c}</th>)}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length:maxRow }, (_,r)=>r+1).map(row=>(
            <tr key={row} data-row={row}>

              <td className="rowhead">{row}</td>
              {cols.map(c=>{
                const cell = (show[c] || []).find((x:any)=>x.row===row);
                const isHL = highlightCells?.has?.(`${c}:${row}`);
                const num = cell?.num;
                const rar = String(cell?.rarity || "").toUpperCase();
                // GL側も PDF準拠で N以外は着色
                const bg = rar ? colorForRarity(rar) : "#FFFFFF";
                return (
                  <td key={c} className={`cell ${isHL?"hl":""}`}
                      style={{ background: bg || "#FFFFFF" }}>
                    {typeof num === "number" ? num : ""}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function GridCx3({
  positions, rowIndexCols, getRarityForKey, getNameForKey,
  highlight, visibleCols,
  highlightGood,          // ★ 追加：高レアあり
  highlightNone           // ★ 追加：高レアなし
}:{
  positions: PositionRow[], rowIndexCols: Set<number>,
  getRarityForKey: (key:string)=>string|undefined,
  getNameForKey: (key:string)=>string|undefined,
  highlight?: Set<string>,
  visibleCols?: number[],
  highlightGood?: Set<string>,   // ★ 追加
  highlightNone?: Set<string>,   // ★ 追加
}) {

  const rows = [...positions].sort((a,b)=>a.no-b.no);
  const circFilter = new Set(visibleCols ?? []);
  const useFilter = circFilter.size > 0;
  const allCols  = Array.from({ length: 12 }, (_, i) => i + 1);
  const dataCols = allCols.filter(c => !rowIndexCols?.has?.(c));
  const viewCols = Array.from({ length: 12 }, (_, i) => dataCols[i] ?? null);
  const singlePos = useFilter && visibleCols && visibleCols.length === 1 ? visibleCols[0] : null;

  const renderTokenLine = (raw: string) => {
    const key   = toHalf(String(raw)).toUpperCase();
    const name  = getNameForKey?.(key) || "";
    const rarRaw = getRarityForKey?.(key) || "";
    const rar = normalizeRarity(rarRaw).toUpperCase();
    const isP = SPECIAL_P.has(key);
    const label = isP ? "LR★" : (rar || "N");
    const bg = shouldTint(key, rar) ? colorForToken(key, rar) : "#FFFFFF";

    const fg = "#111";   // ← 固定の濃い文字色に

    const text = `${raw} [${label}]${name ? ` ${name}` : ""}`;

    return (
  <div
  title={text}
  style={{
    display: "block",
    width: "100%",
    boxSizing: "border-box",
    background: bg,
    color: fg,
    border: "1px solid rgba(0,0,0,0.10)",
    borderRadius: 4,
    padding: "2px 6px",

    /* ここを追加 */
    whiteSpace: "normal",
    wordBreak: "break-word",
    overflowWrap: "anywhere",
    lineHeight: 1.25,
  }}
>
  {text}
</div>

);

  };

  return (
    <div className="grid-wrap">
      <table className="grid">
        <thead>
          <tr>
            <th style={{ width:36 }}></th>
            {viewCols.map((_, i) => {
              const pos = i + 1;
              if (useFilter && !circFilter.has(pos)) return null;
              return <th key={i}>{circledCol(pos)}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.no} data-row={r.no}>

              <td className="rowhead">{r.no}</td>
              {viewCols.map((colIdx, i) => {
                const pos = i + 1;
                if (useFilter && !circFilter.has(pos)) return null;

                const tokens = colIdx ? ((r as any)[`raw${colIdx}`] as string[] | undefined) : undefined;
                const vals = Array.isArray(tokens) ? tokens : [];
                const isMono = vals.length === 1;
                const token = vals[0];
                const rarKey = (isMono && typeof getRarityForKey === "function")
                  ? getRarityForKey(token!)
                  : undefined;
                const keyStr   = colIdx ? `${colIdx}:${r.no}` : "";
const isHLgood = keyStr ? (highlightGood?.has?.(keyStr) ?? highlight?.has?.(keyStr) ?? false) : false; // 先に good / なければ従来の highlight を赤扱い
const isHLnone = keyStr ? (highlightNone?.has?.(keyStr) ?? false) : false;

                if (singlePos && pos === singlePos) {
                  return (
                    <td key={i} className="cell"
                      style={{ background:"#FFFFFF", padding:2, fontSize:12, lineHeight:1.25,
         verticalAlign:"middle",
         boxShadow: isHLgood ? "inset 0 0 0 3px #ef4444"
                  : isHLnone ? "inset 0 0 0 3px #10B981"
                  : undefined,
         textAlign:"left" }}

                      title={vals.join(" / ")}>
                      {vals.length === 0 ? "" : (
                        <div style={{ display:"grid", gap:2 }}>
                          {vals.map((raw, idx) => <div key={idx}>{renderTokenLine(raw)}</div>)}
                        </div>
                      )}
                    </td>
                  );
                }

                const monoBg = ((): string => {
                  if (!isMono) return "#FFFFFF";
                  const rarUpper = normalizeRarity(rarKey || "").toUpperCase();
                  return shouldTint(token!, rarUpper) ? colorForToken(token!, rarUpper) : "#FFFFFF";
                })();

                const baseStyle: React.CSSProperties = {
  background: monoBg,
  padding: 2,
  fontSize: isMono ? 12 : 10,
  lineHeight: 1.15,
  verticalAlign: "middle",
  whiteSpace: "normal",
  wordBreak: "break-all",
  boxShadow: isHLgood ? "inset 0 0 0 3px #ef4444"
           : isHLnone ? "inset 0 0 0 3px #10B981"
           : undefined
};


                return (
                  <td key={i} className="cell" style={baseStyle} title={vals.join("/")}>
                    {isMono ? (
                      token ?? ""
                    ) : (
                      <div style={{ display:"grid", gap:2, background:"#FFFFFF", justifyItems:"stretch" }}>
                        {vals.map((k, idx) => {
                          const t   = toHalf(String(k)).toUpperCase();
                          const rar = normalizeRarity(getRarityForKey?.(t) || "").toUpperCase();
                          const bg  = shouldTint(t, rar) ? colorForToken(t, rar) : "#FFFFFF";

                          const fg = "#111";

                          return (
  <div
    key={idx}
    style={{
      display: "block",
      padding: "0 2px",
      borderRadius: 3,
      fontSize: 10,
      lineHeight: 1.3,
      background: bg,
      color: fg,
      border: "1px solid rgba(0,0,0,0.06)",
      textAlign: "center",

      /* ここを追加：必ず折り返す */
      whiteSpace: "normal",
      wordBreak: "break-word",
      overflowWrap: "anywhere",
    }}
  >
    {k}
  </div>
);

                        })}
                      </div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ========= 保存一覧モーダル ========= */
function SavedListModal({
  side, setKey, version, onClose, onApply, onEdit, onDelete
}:{
  side:"L"|"R"; setKey:string; version:number;
  onClose:()=>void; onApply:(pattern:number[], rev?:boolean)=>void;
  onEdit:(id:string)=>void; onDelete:(id:string)=>void;
}) {


  const [list, setList] = useState<SavedEntry[]>(()=>loadSavedList(side,setKey));
  useEffect(()=>{ setList(loadSavedList(side,setKey)); }, [side,setKey,version]);

  return (
    <div className="modal">
      <div className="modal-backdrop" onClick={onClose}/>
      <div className="modal-body" style={{
  width: "min(660px, 94vw)",
  maxHeight: "90vh",
  display: "flex",
  flexDirection: "column"
}}>

        <div className="modal-head">
          <div className="modal-title">保存一覧（{side==="L"?"左":"右"}シリンダー）</div>
          <button className="modal-x" onClick={onClose}>×</button>
        </div>

        <div className="modal-content" style={{
  display: "grid",
  gap: 8,
  overflowY: "auto",
  flex: "1 1 auto"
}}>
          {list.length === 0 && <div style={{ color:"#6b7280" }}>まだ保存はありません。</div>}


          {list.map(it=>(
            <div key={it.id} style={{ border:"1px solid #e5e7eb", borderRadius:8, padding:10, background:"#fafafa" }}>
              <div style={{ display:"flex", flexWrap:"wrap", gap:8, alignItems:"center" }}>
                <strong>{it.pattern.join(" → ")}</strong>
{it.rev && <span className="rev-badge">逆順</span>}   {/* ここに入れる */}

                
                <span style={{ marginLeft:"auto", fontSize:12, color:"#64748b" }}>{new Date(it.ts).toLocaleString("ja-JP")}</span>
              </div>
              {it.memo && <div style={{ marginTop:6, whiteSpace:"pre-wrap" }}>{it.memo}</div>}
              <div style={{ display:"flex", gap:8, justifyContent:"flex-end", marginTop:8 }}>
                <button className="btn btn-blue" onClick={()=>onApply(it.pattern, it.rev)}>適用</button>


                <button className="btn btn-teal" onClick={()=>onEdit(it.id)}>編集</button>
                <button className="btn btn-gray" onClick={()=>onDelete(it.id)}>削除</button>
              </div>
            </div>
          ))}
        </div>

        <div className="modal-actions">
          <button className="btn btn-gray" onClick={onClose}>閉じる</button>
        </div>
      </div>
    </div>
  );
}

/* ========= 保存/編集モーダル ========= */
function SaveMemoModal({
  side, setKey, pattern, editId, onSaved, onClose, revDefault   // ← ここに追加
}:{
  side:"L"|"R"; setKey:string; pattern:number[]; editId?:string;
  onSaved:()=>void; onClose:()=>void;
  revDefault?: boolean;                                          // ← ここにも追加
}) {

  const isEdit = !!editId;
  const title = `${isEdit?"履歴編集":"履歴保存"}（${side==="L"?"左":"右"}シリンダー）`;
  const editing = isEdit ? (findSaved(side,setKey, editId!) || null) : null;

  const [patternText, setPatternText] = useState<string>(() =>
    isEdit ? (editing?.pattern ?? []).join(" ") : pattern.join(" ")
  );
  const [memo, setMemo] = useState<string>(() => isEdit ? (editing?.memo ?? "") : "");

  const parsePattern = (s:string): number[] =>
    s.split(/[,\s]+/).map(v=>v.trim()).filter(Boolean).map(v=>parseInt(v,10))
      .filter(n=>Number.isFinite(n) && n>=0 && n<=999).slice(0, 20);

  const saveNow = () => {
    const pat = parsePattern(patternText);
    if (!pat.length) return;
    if (isEdit) {
  updateSavedEntry(side,setKey, editId!, { pattern: pat, memo: memo.slice(0,128) });
} else {
  addSavedEntry(side,setKey, pat, memo, !!revDefault); // ★ 第5引数を追加
}

    onSaved();
    onClose();
  };
  const delNow = () => {
    if (isEdit) { removeSavedEntry(side,setKey, editId!); onSaved(); }
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-backdrop" onClick={onClose}/>
      <div className="modal-body">
        <div className="modal-head">
          <div className="modal-title">{title}</div>
          <button className="modal-x" onClick={onClose}>×</button>
        </div>

        <div className="modal-content">
          <input
            value={patternText}
            onChange={(e)=>setPatternText(
              e.target.value.replace(/[^\d,\s]/g,"").replace(/\s+/g," ").trimStart()
            )}
            placeholder="例: 4 11（スペース/カンマ区切り）"
            style={{ width:"100%", height:32, padding:"2px 8px", border:"1px solid #d1d5db", borderRadius:6, marginBottom:8 }}
          />

          <textarea
            value={memo}
            onChange={(e)=>setMemo(e.target.value.slice(0,128))}
            placeholder="（任意・128文字まで）"
            rows={4}
            style={{ width:"100%", boxSizing:"border-box", border:"1px solid #d1d5db", borderRadius:8, padding:"8px" }}
          />
        </div>

        <div className="modal-actions">
          <div style={{ marginRight:"auto" }}>
            {isEdit && <button className="btn btn-gray" onClick={delNow}>削除</button>}
          </div>
          <button className="btn btn-gray" onClick={onClose}>閉じる</button>
          <button className="btn btn-blue" onClick={saveNow} disabled={parsePattern(patternText).length===0}>{isEdit?"保存":"保存"}</button>
        </div>
      </div>
    </div>
  );
}

/* ========= 左右ペア保存モーダル ========= */
function PairSaveModal({
  leftSet, rightSet,
  leftPattern, rightPattern,
  revL, revR,
  onClose, onSaved,
}:{
  leftSet: string;
  rightSet: string;
  leftPattern: number[];
  rightPattern: number[];
  revL?: boolean;
  revR?: boolean;
  onClose: () => void;
  onSaved: () => void;
}) {
  const [memo, setMemo] = useState("");

  const canSave = leftPattern.length > 0 || rightPattern.length > 0;


  const fmt = (pat:number[], rev?:boolean) =>
    (rev ? [...pat].slice().reverse() : pat).join(" → ");

  const saveNow = () => {
    if (!canSave) return;
    addPair(leftSet, leftPattern, rightSet, rightPattern, memo, !!revL, !!revR);
    onSaved();
  };

  return (
    <div className="modal">
      <div className="modal-backdrop" onClick={onClose}/>
      <div className="modal-body" style={{ width: "min(620px, 94vw)" }}>
        <div className="modal-head">
          <div className="modal-title">左右まとめて履歴保存</div>
          <button className="modal-x" onClick={onClose}>×</button>
        </div>

        <div className="modal-content" style={{ display:"grid", gap:10 }}>
          <div style={{ display:"grid", gap:6 }}>
            <div style={{ fontWeight:700 }}>
              左シリンダー（{leftSet}）{revL && <span className="rev-badge" style={{ marginLeft:6 }}>逆順</span>}
            </div>
            <div style={{
              padding:"6px 8px", border:"1px solid #e5e7eb", borderRadius:6,
              background:"#fafafa", whiteSpace:"pre-wrap"
            }}>
              {leftPattern.length ? fmt(leftPattern, revL) : "（未入力）"}
            </div>
          </div>

          <div style={{ display:"grid", gap:6 }}>
            <div style={{ fontWeight:700 }}>
              右シリンダー（{rightSet}）{revR && <span className="rev-badge" style={{ marginLeft:6 }}>逆順</span>}
            </div>
            <div style={{
              padding:"6px 8px", border:"1px solid #e5e7eb", borderRadius:6,
              background:"#fafafa", whiteSpace:"pre-wrap"
            }}>
              {rightPattern.length ? fmt(rightPattern, revR) : "（未入力）"}
            </div>
          </div>

          <textarea
            value={memo}
            onChange={(e)=>setMemo(e.target.value.slice(0,128))}
            placeholder="（任意メモ・128文字まで）"
            rows={4}
            style={{ width:"100%", boxSizing:"border-box", border:"1px solid #d1d5db", borderRadius:8, padding:"8px" }}
          />
        </div>

        <div className="modal-actions">
          <div style={{ marginRight:"auto" }} />
          <button className="btn btn-gray" onClick={onClose}>閉じる</button>
          <button className="btn btn-blue" onClick={saveNow} disabled={!canSave}>保存</button>
        </div>
      </div>
    </div>
  );
}
/* ========= 左右ペア 編集モーダル ========= */
function PairEditModal({
  id,
  onClose,
  onSaved,
}: {
  id: string;
  onClose: () => void;
  onSaved: () => void;
}) {
  const found = loadPairs().find(x => x.id === id) || null;

  const [leftText,  setLeftText]  = useState<string>(found ? (found.left.pattern  || []).join(" ")  : "");
  const [rightText, setRightText] = useState<string>(found ? (found.right.pattern || []).join(" ")  : "");
  const [memo, setMemo]           = useState<string>(found ? (found.memo || "") : "");
  const [revL, setRevL]           = useState<boolean>(!!found?.left.rev);
  const [revR, setRevR]           = useState<boolean>(!!found?.right.rev);

  const parsePattern = (s:string): number[] =>
    s.split(/[,\s]+/)
     .map(v => v.trim())
     .filter(Boolean)
     .map(v => parseInt(v, 10))
     .filter(n => Number.isFinite(n) && n >= 0 && n <= 999)
     .slice(0, 20);

  const canSave =
    parsePattern(leftText).length > 0 ||
    parsePattern(rightText).length > 0;

  const saveNow = () => {
    if (!found) { onClose(); return; }
    const leftP  = parsePattern(leftText);
    const rightP = parsePattern(rightText);

    updatePair(found.id, {
      left:  { ...found.left,  pattern: leftP,  rev: !!revL },
      right: { ...found.right, pattern: rightP, rev: !!revR },
      memo: memo.slice(0, 128),
    });

    onSaved();
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-body" style={{ width: "min(620px, 94vw)" }}>
        <div className="modal-head">
          <div className="modal-title">左右ペアを編集</div>
          <button className="modal-x" onClick={onClose}>×</button>
        </div>

        {!found ? (
          <div className="modal-content">
            <div style={{ color:"#EF4444" }}>対象データが見つかりませんでした。</div>
          </div>
        ) : (
          <div className="modal-content" style={{ display:"grid", gap:10 }}>
            {/* 左 */}
            <div style={{ display:"grid", gap:6 }}>
              <div style={{ fontWeight:700 }}>
                左シリンダー（{found.left.set}）
                {revL && <span className="rev-badge" style={{ marginLeft:6 }}>逆順</span>}
              </div>
              <input
                value={leftText}
                onChange={e=>setLeftText(e.target.value.replace(/[^\d,\s]/g,""))}
                placeholder="例: 4 11（スペース/カンマ区切り）"
                style={{ width:"100%", height:32, padding:"2px 8px", border:"1px solid #d1d5db", borderRadius:6 }}
              />
              <label style={{ display:"inline-flex", alignItems:"center", gap:6 }}>
                <input type="checkbox" checked={revL} onChange={e=>setRevL(e.target.checked)} />
                逆順で保存
              </label>
            </div>

            {/* 右 */}
            <div style={{ display:"grid", gap:6 }}>
              <div style={{ fontWeight:700 }}>
                右シリンダー（{found.right.set}）
                {revR && <span className="rev-badge" style={{ marginLeft:6 }}>逆順</span>}
              </div>
              <input
                value={rightText}
                onChange={e=>setRightText(e.target.value.replace(/[^\d,\s]/g,""))}
                placeholder="例: 7 12（スペース/カンマ区切り）"
                style={{ width:"100%", height:32, padding:"2px 8px", border:"1px solid #d1d5db", borderRadius:6 }}
              />
              <label style={{ display:"inline-flex", alignItems:"center", gap:6 }}>
                <input type="checkbox" checked={revR} onChange={e=>setRevR(e.target.checked)} />
                逆順で保存
              </label>
            </div>

            {/* メモ */}
            <div>
              <textarea
                value={memo}
                onChange={(e)=>setMemo(e.target.value.slice(0,128))}
                placeholder="（任意メモ・128文字まで）"
                rows={4}
                style={{ width:"100%", boxSizing:"border-box", border:"1px solid #d1d5db", borderRadius:8, padding:"8px" }}
              />
            </div>
          </div>
        )}

        <div className="modal-actions">
          <button className="btn btn-gray" onClick={onClose}>閉じる</button>
          <button className="btn btn-blue" onClick={saveNow} disabled={!canSave}>保存</button>
        </div>
      </div>
    </div>
  );
}
/* --- 追加：保存ペアの表示用ミニ部品（共通 util の直前に置く） --- */
function SequenceLine({ label, set, pattern, rev }: {
  label: "左" | "右";
  set: string;
  pattern: number[];
  rev?: boolean;
}) {
  const text = (rev ? [...pattern].slice().reverse() : pattern).join(" → ");
  return (
    <div style={{ display:"flex", alignItems:"center", gap:8, flexWrap:"wrap" }}>
      <strong>{label}（{set}）{rev && <span className="rev-badge" style={{marginLeft:6}}>逆順</span>}：</strong>
      <span>{text}</span>
    </div>
  );
}

function PairRow({ pair, onApply, onEdit, onDelete }: {
  pair: SavedPair;
  onApply: (p: SavedPair) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <div style={{ border:"1px solid #e5e7eb", borderRadius:8, padding:10, background:"#fafafa" }}>
      <SequenceLine label="左" set={pair.left.set}  pattern={pair.left.pattern}  rev={pair.left.rev} />
      <div style={{ marginTop:4 }}>
        <SequenceLine label="右" set={pair.right.set} pattern={pair.right.pattern} rev={pair.right.rev} />
      </div>

      {pair.memo && <div style={{ marginTop:6, whiteSpace:"pre-wrap" }}>{pair.memo}</div>}

      <div style={{ display:"flex", gap:8, justifyContent:"flex-end", marginTop:8 }}>
        <button className="btn btn-blue" onClick={() => onApply(pair)}>適用</button>
        <button className="btn btn-teal" onClick={() => onEdit(pair.id)}>編集</button>
        <button className="btn btn-gray" onClick={() => onDelete(pair.id)}>削除</button>
      </div>

      <div style={{ marginTop:6, fontSize:12, color:"#64748b" }}>
        {new Date(pair.ts).toLocaleString("ja-JP")}
      </div>
    </div>
  );
}
/* --- 追加ここまで --- */

/* ========= 共通 util ========= */
function makeHLCx3(hits: Array<{col:number; row:number; matched:number[]; dir:"down"|"up"; matchedRows:number[]}>): Set<string> {
  const out = new Set<string>();
  for (const h of hits) for (const rr of h.matchedRows) if (rr > 0) out.add(`${h.col}:${rr}`);
  return out;
}
function makeHLCells(hits: any[], byCyl:any, cyl:"L"|"R"): Set<string> {
  const out = new Set<string>(); if (!hits?.length) return out;
  const cols = byCyl?.[cyl] || {};
  for (const h of hits) {
    const seq = (cols[h.col] || []) as { row:number }[];
    const tailIdx = seq.findIndex(x=>x.row===h.row); if (tailIdx < 0) continue;
    const len = h.matched.length; const start = tailIdx - (len - 1);
    for (let j=0;j<len;j++){
      const r = seq[start+j]?.row;
      if (typeof r === "number") out.add(`${h.col}:${r}`);
    }
  }
  return out;
}

/* === ここから追加：プレビューモーダル左右の行高を同期 === */
function syncPairPreviewRowHeights(){
 const modal = document.querySelector('.modal');
  if (!modal) return;

  const tbodies = modal.querySelectorAll('table.grid tbody');
  if (tbodies.length < 2) return;

  const [tb1, tb2] = Array.from(tbodies) as HTMLTableSectionElement[];
  const rows1 = Array.from(tb1.querySelectorAll('tr[data-row]')) as HTMLTableRowElement[];
  const rows2 = Array.from(tb2.querySelectorAll('tr[data-row]')) as HTMLTableRowElement[];

  const map2 = new Map<string, HTMLTableRowElement>();
  rows2.forEach(r => map2.set(r.getAttribute('data-row') || '', r));

  rows1.forEach(r1 => {
    const key = r1.getAttribute('data-row') || '';
    const r2 = map2.get(key);
    if (!r2) return;

    // いったんリセット
    r1.style.height = '';
    r2.style.height = '';

    const h = Math.max(
      r1.getBoundingClientRect().height,
      r2.getBoundingClientRect().height
    );
    r1.style.height = h + 'px';
    r2.style.height = h + 'px';
  });
}
/* === 追加ここまで === */


/* ===== スタイル注入（v4.9.1：帯フルブリード＋1段下げ＋行番号幅さらに固定） ===== */
(function injectStyleV491(){

  const STYLE_ID = "legends-inline-style-v491";
  let el = document.getElementById(STYLE_ID) as HTMLStyleElement | null;
  if (!el) { el = document.createElement("style"); el.id = STYLE_ID; document.head.appendChild(el); }

  el.textContent = `
/* ---- 共通リセット / 端末対策 ---- */
html, body{ margin:0 !important; padding:0 !important; overflow-x:hidden !important;
  -webkit-text-size-adjust:100% !important; text-size-adjust:100% !important; }
@supports (-webkit-touch-callout:none){ input,select,textarea{ font-size:16px !important; } }

/* ---- ルート変数 ---- */
:root{
  --ctrl-h: 40px !important;
  --btn-minw: 84px !important;
  --btn-padx: 10px !important;
  --btn-label-lg: 18px !important;
  --radius-ctrl: 6px !important;
  --radius-card: 10px !important;
  --radius-modal: 10px !important;
  --radius-badge: 4px !important;
}

main.app{ margin-top:0 !important; padding-top:0 !important; background:#fff !important; }

/* ==== 看板ヘッダー：100vwフルブリード無段差 ==== */
main.app .header{ position:relative !important; margin:0 !important; padding:0 !important; border-radius:0 !important; }
main.app .header::before{
  content:"" !important;
  position:absolute !important; z-index:0 !important; top:0 !important; bottom:0 !important;
  left:  calc(50% - 50vw - 1px) !important;
  right: calc(50% - 50vw - 1px) !important;
  background:linear-gradient(90deg,#2AD6E7 0%,#0BB1DF 50%,#0A9FDE 100%) !important;
}

main.app .header > h1{
  position:relative !important; z-index:1 !important;
  display:block !important;
  width:100% !important;
  margin:0 auto !important;
  padding:22px 14px !important;
  text-align:center !important;
  color:#fff !important; background:transparent !important; border-radius:0 !important;
}

/* ←ここに追加する */
.header .header-inner {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 22px 14px;
  max-width: 1080px;
  margin: 0 auto;
}
.header .header-inner h1 {
  margin: 0;
  font-size: 20px;
  color: #fff;
}
.header .header-actions {
  display: flex;
  gap: 8px;
}

/* ここから元のつづき */
main.app > .header + .card{ margin-top:12px !important; }
@media (min-width:768px){
  main.app > .header + .card{ margin-top:16px !important; }
}

/* スマホ幅のときのヘッダー調整 */
@media (max-width: 520px) {
  .header .header-inner {
    flex-direction: column;     /* タイトルの下にボタンが来る */
    align-items: flex-start;    /* 左寄せにする（中央にしたければ center） */
    gap: 6px;
  }

  .header .header-actions {
    width: 100%;
    justify-content: flex-end;  /* ボタンは右端に寄せる */
  }

  .header .header-inner h1 {
    font-size: 18px;            /* 少し小さくして詰めやすく */
  }
}

/* ==== 行間・フォーム ==== */
.select-row{ display:flex; align-items:center; gap:12px !important; }
.select-row + .select-row{ margin-top:16px !important; }
.card .select-row.center-row{ margin-top:16px !important; margin-bottom:16px !important; }
.card + .card{ margin-top:18px !important; }

/* セレクト幅ガチ固定 */
.select-wrap{
  position:relative; display:inline-flex; align-items:center;
  width:${SEL_FIXED_PX}px !important; min-width:${SEL_FIXED_PX}px !important; max-width:${SEL_FIXED_PX}px !important;
  height:var(--ctrl-h); border:1px solid #d1d5db; border-radius:var(--radius-ctrl);
  background:#fff; overflow:hidden;
}
.select-wrap::after{
  content:""; position:absolute; pointer-events:none; right:6px; top:50%; transform:translateY(-35%);
  width:0; height:0; border-left:6px solid transparent; border-right:6px solid transparent; border-top:6px solid #55667a;
}
.select-row select, .select-wrap select{
  min-width:0 !important; width:${SEL_FIXED_PX}px !important; max-width:${SEL_FIXED_PX}px !important;
  height:var(--ctrl-h) !important; font-size:16px !important;
  box-sizing:content-box !important; appearance:none !important; -webkit-appearance:none !important; -moz-appearance:none !important;

  border:0 !important;
  outline:none !important;
  background:transparent !important;
  box-shadow:none !important;

  padding-right: 24px !important;
}
select::-ms-expand{ display:none; }

/* 入力欄 */
.select-row input{
  height:var(--ctrl-h); line-height:calc(var(--ctrl-h) - 2px);
  padding:0 10px; border:1px solid #d1d5db; border-radius:var(--radius-ctrl); font-size:16px !important;
  width:56px; text-align:center;
}

/* ボタン調整 */
.select-row .btn{
  height:var(--ctrl-h) !important; line-height:var(--ctrl-h) !important;
  padding:0 var(--btn-padx) !important; border-radius:var(--radius-ctrl) !important;
  min-width:var(--btn-minw) !important; font-size:16px !important; font-weight:700; white-space:nowrap;
}
.select-row .btn:not(.btn-outline-blue):not(.btn-gray):not(.btn-secondary):not(.btn-outline):not(.btn-violet){
  font-size:var(--btn-label-lg) !important;
}
.select-row .btn-outline-blue, .btn-outline-blue{
  background:#fff !important; color:#1677FF !important; border:2px solid #1677FF !important;
  height:var(--ctrl-h) !important; line-height:var(--ctrl-h) !important;
  padding:0 var(--btn-padx) !important; border-radius:var(--radius-ctrl) !important;
  min-width:var(--btn-minw) !important; font-size:16px !important; font-weight:700 !important;
}
.btn-outline-blue:hover{ filter:brightness(0.95); }
.card .btn-violet, .btn-violet{
  background:#7C3AED !important; border-color:#7C3AED !important; color:#fff !important;
  height:var(--ctrl-h) !important; line-height:var(--ctrl-h) !important;
  padding:0 var(--btn-padx) !important; border-radius:var(--radius-ctrl) !important;
  min-width:var(--btn-minw) !important; font-size:16px !important; font-weight:700 !important;
}

/* === CX セレクトの二重枠を解消 === */
.select-wrap{ border: 0 !important; background: transparent !important; }
.select-wrap > select{
  border: 1px solid #d1d5db !important;
  border-radius: var(--radius-ctrl) !important;
  background: #fff !important;
  box-shadow: none !important;
  outline: none !important;
  padding-right: 24px !important;
}
.select-wrap > select:focus,
.select-wrap > select:focus-visible{ box-shadow: inset 0 0 0 2px rgba(22,119,255,.25) !important; outline: none !important; }
.select-wrap select:focus,
.select-wrap select:focus-visible{ box-shadow: inset 0 0 0 2px rgba(22,119,255,.25) !important; outline: none !important; }

/* --- Homeのセクション見出しを黒の通常文字に --- */
main.app .card .section-title{
  color:#111 !important;
  font-weight:700 !important;
  background:transparent !important;
  text-shadow:none !important;
}

/* ==== 結果表示 ==== */
.rev-badge{
  display:inline-flex; align-items:center; justify-content:center;
  margin-left:6px; padding:2px 6px;
  border-radius:6px;
  background:#10B981;
  color:#fff;
  border:1px solid #059669;
  font-weight:700; font-size:12px; line-height:1;
}

.res-list{ display:grid; gap:10px; margin-top:8px; }
.res-summary{ margin:0; font-size:14px; }
.res-card{ background:#f7fbff; border:1px solid #dfeefe; border-radius:var(--radius-card); padding:10px; }
.res-head{ display:flex; gap:8px; align-items:baseline; }
.res-head .pos{ font-weight:700; }
.res-head .meta{ margin-left:auto; font-size:12px; color:#6b7280; }
.res-dist{ opacity:.85; font-size:14px; }
.res-name{ font-size:15px; }

/* LRバッジ */
.res-lines .res-line .badge, .res-list .res-line .badge{
  display:inline-flex !important; align-items:center !important; justify-content:center !important;
  padding:2px 8px !important; line-height:1 !important; height:auto !important; margin-block:2px !important;
  border-radius:var(--radius-badge); color:#fff; font-weight:700; font-size:14px;
}
.badge-lr{ background:#EF4444; }
.badge-p { background:#B388FF; }

.nohits{ text-align:center; color:#EF4444; font-size:13px; font-weight:700; }

/* pill */
.pill{ display:inline-flex; align-items:center; justify-content:center; gap:.4em;
  min-width:28px; height:28px; padding:0 .8em; border-radius:999px; background:#2EC5FF; color:#fff;
  border:1px solid #9BDCF9; font-size:14px; font-weight:700; line-height:1; }
.pill.pill-num{
  width:34px !important; height:34px !important; padding:0 !important; border-radius:50% !重要;
  box-sizing:border-box !important; display:grid !important; place-items:center !important;
  line-height:1 !important; font-size:22px; font-weight:700;
  font-variant-numeric:tabular-nums; font-feature-settings:"tnum" 1, "lnum" 1;
}

/* ==== グリッド：行番号（1〜100）列の幅を常時ガチ固定 ==== */
.grid-wrap .grid{ table-layout:fixed !important; width:100% !important; border-collapse:collapse !important; }
.grid-wrap .grid th:first-child,
.grid-wrap .grid td.rowhead,
.grid-wrap .grid td:first-child{
  width:32px !important; max-width:32px !important; min-width:28px !important;
  padding-left:4px !important; padding-right:4px !important;
  white-space:nowrap; text-overflow:clip;
  font-variant-numeric:tabular-nums; font-feature-settings:"tnum" 1, "lnum" 1;
  -webkit-text-size-adjust:100% !important; text-size-adjust:100% !重要;
}
@media (max-width:480px){
  .grid-wrap .grid th:first-child,
  .grid-wrap .grid td.rowhead,
  .grid-wrap .grid td:first-child{
    width:24px !important; max-width:30px !important;
  }
}
/* 対の配列の表示ボタンも同じ高さ・丸み・文字サイズでそろえる */
.card .btn.btn-orange {
  height: var(--ctrl-h) !important;
  line-height: var(--ctrl-h) !important;
  padding: 0 var(--btn-padx) !important;
  border-radius: var(--radius-ctrl) !important;
  min-width: var(--btn-minw) !important;
  font-size: 16px !important;
  font-weight: 700 !important;
}

/* 履歴ボタンを同じ幅にする */
.card .btn.btn-blue,
.card .btn.btn-violet {
  min-width: 110px;
  text-align: center;
}
/* 履歴保存（青）と履歴一覧（紫）を同じ見た目にする */
.card .btn.btn-blue {
  height: var(--ctrl-h) !important;
  line-height: var(--ctrl-h) !important;
  padding: 0 var(--btn-padx) !important;
  border-radius: var(--radius-ctrl) !important;
  min-width: var(--btn-minw) !important;
  font-size: 16px !important;
  font-weight: 700 !important;
  text-align: center;
}

/* モーダル（置き換え） */
.modal{ position:fixed; inset:0; z-index:999; }
.modal-backdrop{ position:absolute; inset:0; background:rgba(0,0,0,.35); }

/* ★ ここを変更：高さに上限を付け、ヘッダー/フッター固定・中身だけスクロール */
.modal-body{
  position:absolute; left:50%; top:50%;
  transform:translate(-50%,-50%);
  width:min(620px,94vw);
  max-height:min(92vh, 720px);
  display:flex; flex-direction:column;
  background:#fff; border-radius:var(--radius-modal);
  box-shadow:0 10px 30px rgba(0,0,0,.25);
  overscroll-behavior:contain;
}
.modal-head{ display:flex; align-items:center; padding:12px 14px; border-bottom:1px solid #e5e7eb; }
.modal-title{ font-size:18px; font-weight:700; }
.modal-x{ margin-left:auto; background: transparent; border:0; font-size:22px; line-height:1; cursor:pointer; }

/* ★ ここを変更：本文だけスクロール可能に */
.modal-content{
  padding:12px 14px;
  overflow:auto;
  flex:1 1 auto;
  min-height:0;
}
.modal-actions{
  display:flex; gap:8px; align-items:center; justify-content:flex-end;
  padding:12px 14px; border-top:1px solid #e5e7eb;
  background:#fff;
}
`;

  /* 上方向の余白を食い込む（親の padding-top を無効化） */
  const eatTopPadding = () => {
    const app = document.querySelector('main.app') as HTMLElement | null;
    const hdr = app?.querySelector('.header') as HTMLElement | null;
    if (!app || !hdr) return;

    let p: HTMLElement | null = hdr.parentElement as HTMLElement | null;
    let pt = 0;
    while (p && p !== document.body) {
      const cs = getComputedStyle(p); const v = parseFloat(cs.paddingTop) || 0;
      if (v){ pt = v; break; } p = p.parentElement as HTMLElement | null;
    }
    hdr.style.marginTop = (-pt) + 'px';
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', eatTopPadding, { once:true });
  } else { eatTopPadding(); }
  window.addEventListener('resize', eatTopPadding, { passive:true });

  // 監視はやめる（attributes を監視し続けると無限に発火してフリーズする）
  // new MutationObserver(eatTopPadding).observe(document.documentElement, {subtree:true, attributes:true, childList:true});

})();

// === 追加：セレクト見た目を「番号」と完全同一サイズに（崩れ補正） ===
(function injectSelectFixV2(){
  const id = "legends-select-fix-v2";
  let el = document.getElementById(id) as HTMLStyleElement | null;
  if (!el) { el = document.createElement("style"); el.id = id; document.head.appendChild(el); }
  el.textContent = `
  /* ラッパーにだけ枠を出す（番号と同じ枠/角丸/高さ） */
  .select-wrap{
    position:relative; display:inline-flex; align-items:center; justify-content:center;
    width:${SEL_FIXED_PX}px !important; min-width:${SEL_FIXED_PX}px !important; max-width:${SEL_FIXED_PX}px !important;
    height:var(--ctrl-h) !important;
    background:#fff !important;
    border:1px solid #d1d5db !important;
    border-radius:var(--radius-ctrl) !important;
    box-shadow:none !important;
    overflow:visible !important;
  }
  .select-wrap::after{
    content:""; position:absolute; pointer-events:none;
    right:6px; top:50%; transform:translateY(-35%);
    width:0; height:0; border-left:6px solid transparent; border-right:6px solid transparent; border-top:6px solid #55667a;
  }
  /* select 本体は枠なし・高さは枠の内側にピッタリ */
  .select-wrap > select{
    display:block !important;
    width:100% !important;
    height:calc(var(--ctrl-h) - 2px) !important;  /* 枠線(1px×上下)ぶんを内側で相殺 */
    margin:0 !important;
    padding:0 24px 0 10px !important;            /* 右は▼の余白 */
    border:0 !important;
    background:transparent !important;
    background-image:none !important;
    box-shadow:none !important;
    outline:none !important;
    appearance:none !important; -webkit-appearance:none !important; -moz-appearance:none !important;
    box-sizing:border-box !important;
    font-size:16px !important;
    line-height:calc(var(--ctrl-h) - 2px) !important;
    text-align:center !important;
    text-align-last:center !important;           /* 表示も中央寄せ */
  }
  .select-wrap > select:focus,
  .select-wrap > select:focus-visible{
    box-shadow:none !important;
    outline:none !important;
  }
  `;
})();


/* === 幅ロック：安全版（属性は監視しない） === */
(function lockSelectWidthOnce(){
  const W = SEL_FIXED_PX;
  const apply = (root: ParentNode | Document = document) => {
    root.querySelectorAll<HTMLSelectElement>('.select-wrap select').forEach(s => {
      // 同じ値なら書き換えない（無駄な属性変更を防ぐ）
      if (s.style.width !== `${W}px`)       s.style.setProperty('width',     W + 'px', 'important');
      if (s.style.maxWidth !== `${W}px`)    s.style.setProperty('max-width', W + 'px', 'important');
      if (s.style.minWidth !== '0px')       s.style.setProperty('min-width', '0',      'important');
      if (s.style.height !== 'var(--ctrl-h)') s.style.setProperty('height', 'var(--ctrl-h)', 'important');
    });
    root.querySelectorAll<HTMLElement>('.select-wrap').forEach(w => {
      if (w.style.width !== `${W}px`)       w.style.setProperty('width',     W + 'px', 'important');
      if (w.style.maxWidth !== `${W}px`)    w.style.setProperty('max-width', W + 'px', 'important');
      if (w.style.minWidth !== `${W}px`)    w.style.setProperty('min-width', W + 'px', 'important');
      if (w.style.height !== 'var(--ctrl-h)') w.style.setProperty('height', 'var(--ctrl-h)', 'important');
    });
  };

  const boot = () => apply();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once:true });
  } else {
    boot();
  }

  // 追加されたノードにだけ適用（attributes は監視しない）
  new MutationObserver(muts => {
    for (const m of muts) {
      m.addedNodes.forEach(n => { if (n instanceof HTMLElement) apply(n); });
    }
  }).observe(document.body, { subtree:true, childList:true });
})();

/* === ビューポート固定（ピンチ/ダブルタップ拡大を抑止） === */
(function lockViewportOnMobile(){
  const ensure = () => {
    const content = 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover';
    let meta = document.querySelector('meta[name="viewport"]') as HTMLMetaElement | null;
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name','viewport'); document.head.appendChild(meta); }
    meta.setAttribute('content', content);
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensure, { once:true });
  } else { ensure(); }
})();

// ---- EOF ----