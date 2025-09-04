// src/App.tsx
import { useEffect, useMemo, useState } from "react";
import type React from "react";
import { useCsvData } from "./hooks/useCsvData";
import { circledCol, matchAll } from "./lib/matcher";
import { useSearchHistory, type HistoryItem } from "./hooks/useSearchHistory";
import { loadCards as loadCx3Cards, loadPositions, type PositionRow, SPECIAL_P } from "./lib/cx3";
import { colorForRarity, toHalf } from "./lib/rarity";

/* ========= ユーティリティ ========= */
const abs = (path: string) => {
  try {
    const baseEnv = (import.meta as any)?.env?.BASE_URL;
    const base = (typeof baseEnv === "string" && baseEnv.length) ? baseEnv : "/";
    const origin = (typeof window !== "undefined" && window.location?.origin)
      ? window.location.origin : "http://localhost";
    const baseNorm = base.startsWith("/") ? base : ("/" + base);
    return origin.replace(/\/+$/, "") + baseNorm + String(path).replace(/^\/+/, "");
  } catch { return "/" + String(path).replace(/^\/+/, ""); }
};
const CSV_URL = abs(import.meta.env.VITE_CSV_URL || "cards.cx3.csv");
const MAX_LR_CANDIDATES = 4;
const SEARCH_BLUE = "#1677FF";

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

const isCx3 = (setKey: string) => /CX3|XC3|CX-3/i.test(setKey);

/* ========= App ========= */
export default function App() {
  const { rows, sets, loading, error, reload } = useCsvData(CSV_URL);
  const rowsNorm = useMemo(() => rows.map(r => ({ ...r, set: String(r?.set ?? r?.series ?? r?.["シリーズ"] ?? r?.["弾"] ?? "").trim().toUpperCase() })), [rows]);

  const setOptions = useMemo(() => {
    const seen = new Set<string>();
    rowsNorm.forEach(r => { const key = String(r.set || "").trim(); if (key) seen.add(key); });
    const arr = [...seen];
    if (!arr.includes("CX3")) arr.push("CX3");
    return arr.sort((a,b)=>{
      const na = parseInt(a.replace(/\D+/g,""),10);
      const nb = parseInt(b.replace(/\D+/g,""),10);
      if (!Number.isNaN(na) && !Number.isNaN(nb)) return na-nb;
      return a.localeCompare(b,"ja");
    });
  }, [rowsNorm]);

  const [leftSet, setLeftSet] = useState("CX3");
  const [rightSet, setRightSet] = useState("CX3");
  useEffect(()=>{ if (!leftSet) setLeftSet("CX3"); if (!rightSet) setRightSet("CX3"); },[]);

  const [lQuery, setLQuery] = useState<number[]>([]);
  const [rQuery, setRQuery] = useState<number[]>([]);
  const [route, setRoute] = useState<Route>(routeFromHash());
  const [dirL, setDirL] = useState<"down"|"up">("down");
  const [dirR, setDirR] = useState<"down"|"up">("down");
  useEffect(()=>{ const onHash=()=>setRoute(routeFromHash()); window.addEventListener("hashchange",onHash); return ()=>window.removeEventListener("hashchange",onHash); },[]);

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

  /* ===== 単一“小窓”入力 ===== */
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

  /* ===== CX3 カード辞書 ===== */
  const [cx3KeyRarity, setCx3KeyRarity] = useState<Map<string,string>>(new Map());
  const [cx3KeyName,   setCx3KeyName]   = useState<Map<string,string>>(new Map());

  const deriveKeys = (codeRaw: string): string[] => {
    const u = toHalf(String(codeRaw||"")).toUpperCase().trim();
    const keys = new Set<string>();
    keys.add(u);
    const mSuf = u.match(/(\d{1,3}P?)$/);
    if (mSuf) {
      const suf = mSuf[1];
      keys.add(suf);
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
      const cards = await loadCx3Cards(abs("cards.cx3.csv"));
      const mpR = new Map<string,string>();
      const mpN = new Map<string,string>();

      for (const c of cards as any[]) {
        const codeRaw = String(c.code || "");
        const name = String(c.name || "");
        const rar  = String(c.rarity || "");
        for (const k of deriveKeys(codeRaw)) {
          if (name && !mpN.has(k)) mpN.set(k, name);
          if (rar  && !mpR.has(k)) mpR.set(k, rar);
        }
      }

      setCx3KeyRarity(mpR);
      setCx3KeyName(mpN);
    }catch(e){ console.warn("cards.cx3.csv 読込失敗:", e); }
  })() }, []);

  const nameByTokenLoose = (rawToken: string): string | undefined => {
    const t = toHalf(String(rawToken || "")).toUpperCase().trim();
    if (cx3KeyName.has(t)) return cx3KeyName.get(t);
    for (const k of deriveKeys(t)) {
      const n = cx3KeyName.get(k);
      if (n) return n;
    }
    return undefined;
  };
  const rarityByTokenStrict = (rawToken: string): string | undefined => {
    const t = toHalf(String(rawToken || "")).toUpperCase().trim();
    if (cx3KeyRarity.has(t)) return cx3KeyRarity.get(t);
    const m = t.match(/^(\d+)(P)?$/);
    if (!m) return undefined;
    const n  = String(parseInt(m[1],10));
    const n2 = n.padStart(2,"0");
    const wantP = !!m[2];
    if (wantP) return cx3KeyRarity.get(`${n}P`) || cx3KeyRarity.get(`${n2}P`);
    return cx3KeyRarity.get(n) || cx3KeyRarity.get(n2);
  };

  const getRarityByTokenStrict = (k:string) => rarityByTokenStrict(k);
  const getNameByTokenStrict   = (k:string) => nameByTokenLoose(k);

  /* ===== 位置 CSV（CX3） ===== */
  const [cx3Pos, setCx3Pos] = useState<PositionRow[]>([]);
  const [rowIndexCols, setRowIndexCols] = useState<Set<number>>(new Set());
  useEffect(() => { (async ()=>{
    try{
      const raw:any[] = await loadPositions(abs("cx3_positions.csv"));
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
      setCx3Pos(raw);
      setRowIndexCols(idx);
    }catch(e){ console.warn("cx3_positions.csv 読込失敗:", e); }
  })() }, []);

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
          let k = rowsPath[rowsPath.length - 1];
          while (k < seq.length && !(seq[k] && seq[k].length)) k++;
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
    () => isCx3(leftSet)  ? buildCx3Hits(cx3Pos, lQuery, rowIndexCols, dirL) : [],
    [leftSet,  cx3Pos, lQuery, rowIndexCols, dirL]
  );
  const rHitsCX3_raw = useMemo(
    () => isCx3(rightSet) ? buildCx3Hits(cx3Pos, rQuery, rowIndexCols, dirR) : [],
    [rightSet, cx3Pos, rQuery, rowIndexCols, dirR]
  );

  const lHitsCX3 = useMemo(() => lHitsCX3_raw, [lHitsCX3_raw]);
  const rHitsCX3 = useMemo(() => rHitsCX3_raw, [rHitsCX3_raw]);

  const hlCx3L = useMemo(()=> makeHLCx3(lHitsCX3), [lHitsCX3]);
  const hlCx3R = useMemo(()=> makeHLCx3(rHitsCX3), [rHitsCX3]);

  // ===== 可視列（検索結果でヒット列のみ表示） =====
  const visiblePosFromCx3Hits = (hits: Cx3Hit[], rowIdx: Set<number>): number[] => {
    const dataCols = Array.from({ length: 12 }, (_, i) => i + 1).filter(c => !rowIdx.has(c));
    const s = new Set<number>();
    for (const h of hits) {
      const pos = dataCols.indexOf(h.col) + 1; // ①〜⑫ の位置
      if (pos > 0) s.add(pos);
    }
    return [...s].sort((a,b)=>a-b);
  };
  const visibleColsFromGLHits = (hits: any[]): number[] => {
    const s = new Set<number>();
    for (const h of hits) if (typeof h.col === "number") s.add(h.col);
    return [...s].sort((a,b)=>a-b);
  };

  const visColsCx3L = useMemo(()=> visiblePosFromCx3Hits(lHitsCX3, rowIndexCols), [lHitsCX3, rowIndexCols]);
  const visColsCx3R = useMemo(()=> visiblePosFromCx3Hits(rHitsCX3, rowIndexCols), [rHitsCX3, rowIndexCols]);
  const visColsGLL  = useMemo(()=> visibleColsFromGLHits(lHitsGL), [lHitsGL]);
  const visColsGLR  = useMemo(()=> visibleColsFromGLHits(rHitsGL), [rHitsGL]);

  // ヒット位置から、押した方向に沿って LR / P★ の最短を最大4件返す
  type Candidate = { code:string; name:string; dist:number; color:string; badge:"LR"|"LR★" };

  const buildLinesForHit = (hit: Cx3Hit): Candidate[] => {
    const col = hit.col;
    const start = hit.row;

    const rowMap = new Map<number, PositionRow>(cx3Pos.map(r => [r.no, r]));
    const allNos = cx3Pos.map(r => r.no);
    const maxRowNo = allNos.length ? Math.max(...allNos) : 0;
    const minRowNo = allNos.length ? Math.min(...allNos) : 1;

    const firstDist = new Map<string, number>();

    if (hit.dir === "down") {
      for (let rr = start + 1; rr <= maxRowNo; rr++) {
        const row = rowMap.get(rr);
        const tokens = row ? (row as any)[`raw${col}`] as string[] | undefined : undefined;
        if (!Array.isArray(tokens) || tokens.length === 0) continue;

        for (const raw of tokens) {
          const t = String(raw).toUpperCase();
          const rar = getRarityByTokenStrict(t) || "";
          if (!(SPECIAL_P.has(t) || rar.toUpperCase() === "LR")) continue;
          if (!firstDist.has(t)) firstDist.set(t, rr - start);
        }
        if (firstDist.size >= MAX_LR_CANDIDATES) break;
      }
    } else {
      for (let rr = start - 1; rr >= minRowNo; rr--) {
        const row = rowMap.get(rr);
        const tokens = row ? (row as any)[`raw${col}`] as string[] | undefined : undefined;
        if (!Array.isArray(tokens) || tokens.length === 0) continue;

        for (const raw of tokens) {
          const t = String(raw).toUpperCase();
          const rar = getRarityByTokenStrict(t) || "";
          if (!(SPECIAL_P.has(t) || rar.toUpperCase() === "LR")) continue;
          if (!firstDist.has(t)) firstDist.set(t, start - rr);
        }
        if (firstDist.size >= MAX_LR_CANDIDATES) break;
      }
    }

    const items: Candidate[] = [];
    firstDist.forEach((dist, t) => {
      const isPurple = SPECIAL_P.has(t);
      const name = getNameByTokenStrict(t) || t;
      items.push({
        code: t,
        name,
        dist,
        color: isPurple ? "#B388FF" : "#EF4444",
        badge: isPurple ? "LR★" : "LR",
      });
    });

    return items.sort((a,b) => a.dist - b.dist).slice(0, MAX_LR_CANDIDATES);
  };

  /* ===== ホーム候補（検索結果と同じ表示仕様：最短距離優先で4件） ===== */
  type Sug = {
    col: number; row: number;
    lines?: Candidate[];
    noHigh?: boolean; nextAny?: number;
  };

  const buildSuggestions = (pat: number[], direction: "down" | "up" = "down"): Sug[] => {
    if (!isCx3("CX3") || !cx3Pos.length || !pat.length) return [];

    const hits = buildCx3Hits(cx3Pos, pat, rowIndexCols, direction);

    const prepared = hits.map(h => {
      const lines = buildLinesForHit(h);
      const score = lines.length ? Math.min(...lines.map(x => x.dist)) : Number.POSITIVE_INFINITY;
      const nextAny = (typeof h.nextAnySteps === "number") ? h.nextAnySteps : undefined;
      return { h, lines, score, nextAny };
    });

    const good = prepared
      .filter(p => p.lines.length > 0)
      .sort((a, b) => a.score - b.score || a.h.col - b.h.col || a.h.row - b.h.row)
      .slice(0, 4)
      .map(p => ({ col: p.h.col, row: p.h.row, lines: p.lines }));

    if (good.length >= 4) return good;

    const fillers = prepared
      .filter(p => p.lines.length === 0)
      .sort((a, b) => {
        const an = (typeof a.nextAny === "number") ? a.nextAny : 999999;
        const bn = (typeof b.nextAny === "number") ? b.nextAny : 999999;
        return an - bn || a.h.col - b.h.col || a.h.row - b.h.row;
      })
      .map(p => ({ col: p.h.col, row: p.h.row, noHigh: true, nextAny: p.nextAny }));

    return [...good, ...fillers].slice(0, 4);
  };

  const candSugL = useMemo(
    () => isCx3(leftSet) ? buildSuggestions(patLNow, "down") : [],
    [leftSet, patLNow, cx3Pos, rowIndexCols, cx3KeyRarity, cx3KeyName]
  );
  const candSugR = useMemo(
    () => isCx3(rightSet) ? buildSuggestions(patRNow, "down") : [],
    [rightSet, patRNow, cx3Pos, rowIndexCols, cx3KeyRarity, cx3KeyName]
  );

  /* ========= UI ========= */
  return (
    <main className="app">
      <header className="header">
        <h1>ガンバレジェンズ配列表 検索ツール</h1>
        <div className="tools"><button onClick={reload}>再読込</button></div>
      </header>

      {route === "home" && (
        <>
          {/* 左 */}
          <section className="card">
            <div className="section-title">左シリンダー</div>

            <div className="select-row" style={{ display:"flex", alignItems:"center", gap:8, flexWrap:"wrap" }}>
              <select value={leftSet} onChange={e=>{ setLeftSet(e.target.value); setOpenHistL(false); }}>
                {(setOptions.length ? setOptions : sets.length ? sets : ["CX3"]).map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              <button className="btn btn-pink" onClick={runSearchLRev}>逆順検索</button>
              <button className="btn btn-blue" style={{background:SEARCH_BLUE,borderColor:SEARCH_BLUE}} onClick={runSearchL}>検索</button>
              <button className="btn btn-teal" onClick={()=>setOpenHistL(!openHistL)}>履歴</button>
            </div>

            <div style={{ display:"flex", alignItems:"center", gap:8, marginTop:6, marginBottom:6, flexWrap:"nowrap" }}>
              <input
                value={candLInput}
                onChange={onCandChange("L")}
                onKeyDown={onCandKeyDown("L")}
                onBlur={onCandBlur("L")}
                placeholder="番号"
                inputMode="numeric"
                style={{ width:100, height:28, padding:"2px 8px", border:"1px solid #d1d5db", borderRadius:6, fontSize:16 }}
              />
              <button className="btn-outline-blue" onClick={undoOneL}>一つ前へ戻る</button>
              <button className="btn btn-gray" onClick={clearL}>クリア</button>
            </div>

            {!!candLDigits.length && (
              <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:6 }}>
                {candLDigits.map((n,i)=>(<span key={i} className="pill">{n}</span>))}
              </div>
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
            <div className="section-title">右シリンダー</div>

            <div className="select-row" style={{ display:"flex", alignItems:"center", gap:8, flexWrap:"wrap" }}>
              <select value={rightSet} onChange={e=>{ setRightSet(e.target.value); setOpenHistR(false); }}>
                {(setOptions.length ? setOptions : sets.length ? sets : ["CX3"]).map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              <button className="btn btn-pink" onClick={runSearchRRev}>逆順検索</button>
              <button className="btn btn-blue" style={{background:SEARCH_BLUE,borderColor:SEARCH_BLUE}} onClick={runSearchR}>検索</button>
              <button className="btn btn-teal" onClick={()=>setOpenHistR(!openHistR)}>履歴</button>
            </div>

            <div style={{ display:"flex", alignItems:"center", gap:8, marginTop:6, marginBottom:6, flexWrap:"nowrap" }}>
              <input
                value={candRInput}
                onChange={onCandChange("R")}
                onKeyDown={onCandKeyDown("R")}
                onBlur={onCandBlur("R")}
                placeholder="番号"
                inputMode="numeric"
                style={{ width:100, height:28, padding:"2px 8px", border:"1px solid #d1d5db", borderRadius:6, fontSize:16 }}
              />
              <button className="btn-outline-blue" onClick={undoOneR}>一つ前へ戻る</button>
              <button className="btn btn-gray" onClick={clearR}>クリア</button>
            </div>

            {!!candRDigits.length && (
              <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:6 }}>
                {candRDigits.map((n,i)=>(<span key={i} className="pill">{n}</span>))}
              </div>
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
          <div style={{ display:"flex", gap:8, alignItems:"center", marginBottom:8 }}>
            <button className="btn btn-gray" onClick={()=>nav("home")}>← 戻る</button>
            <strong>左シリンダー結果</strong>
          </div>

          <ResultList
            hits={(isCx3(leftSet) ? lHitsCX3 : lHitsGL) as any}
            getLines={isCx3(leftSet) ? buildLinesForHit : undefined}
          />

          <div style={{ marginTop:12 }}>
            {isCx3(leftSet)
              ? <GridCx3
                  positions={cx3Pos}
                  rowIndexCols={rowIndexCols}
                  getRarityForKey={rarityByTokenStrict}
                  getNameForKey={getNameByTokenStrict}
                  highlight={hlCx3L}
                  visibleCols={visColsCx3L}
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
          <div style={{ display:"flex", gap:8, alignItems:"center", marginBottom:8 }}>
            <button className="btn btn-gray" onClick={()=>nav("home")}>← 戻る</button>
            <strong>右シリンダー結果</strong>
          </div>

          <ResultList
            hits={(isCx3(rightSet) ? rHitsCX3 : rHitsGL) as any}
            getLines={isCx3(rightSet) ? buildLinesForHit : undefined}
          />

          <div style={{ marginTop:12 }}>
            {isCx3(rightSet)
              ? <GridCx3
                  positions={cx3Pos}
                  rowIndexCols={rowIndexCols}
                  getRarityForKey={rarityByTokenStrict}
                  getNameForKey={getNameByTokenStrict}
                  highlight={hlCx3R}
                  visibleCols={visColsCx3R}
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

      <div style={{ marginTop:8, fontSize:12, color:"#6b7280" }}>
        {loading && "読込中…"}{" "}
        {(() => {
          const msg = String((error as any)?.message || "");
          if (!msg) return null;
          return /404|Not Found/i.test(msg) ? null : `エラー: ${msg}`;
        })()}
      </div>
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
            <div><strong>{it.pattern.join(" → ")}</strong>{it.rev ? "（逆順）":""}</div>
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

/* ===== 読みやすさ強化版 ResultList（早い順ソート） ===== */
function ResultList({ hits, getLines }:{
  hits: any[],
  getLines?: (hit:any)=>Array<{code:string; name:string; dist:number; badge:"LR"|"LR★"}>
}) {
  if (!hits?.length) return <div className="res-empty">一致はまだありません。</div>;

  const hasCx3 = !!getLines;

  const prepared = hits.map(h => {
    let lines: Array<{code:string; name:string; dist:number; badge:"LR"|"LR★"}> | undefined;
    let score = 999999;

    if (hasCx3) {
      lines = getLines!(h) || [];
      if (lines.length) score = Math.min(...lines.map(l => l.dist));
    } else {
      if (typeof h.nextLRSteps === "number") score = h.nextLRSteps;
    }
    return { h, lines, score };
  }).sort((a,b)=> a.score - b.score);

  const top = prepared.slice(0, 4);

  return (
    <div className="res-list">
      <p className="res-summary">
        <strong className="res-count">{top.length}</strong>件の最短パターンと一致しました。
      </p>

      {top.map(({h, lines}, i) => (
        <div key={i} className="res-card">
          <div className="res-head">
            <div className="pos">
              ヒット位置: <strong>{circledCol(h.col)}</strong> の <strong>{h.row}番目</strong>
            </div>

            {!hasCx3 && (
              <div className="meta">
                {Array.isArray(h.nextLRMany) && h.nextLRMany.length
                  ? <>次: <strong>{h.nextLRMany.join("/")}</strong></>
                  : <>（あと <strong>{h.nextLRSteps ?? 0}</strong> 回です）</>}
              </div>
            )}
          </div>

          {hasCx3 && !!lines?.length && (
            <div className="res-lines">
              {lines
                .slice()
                .sort((a,b)=>a.dist-b.dist)
                .map(b => (
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
            <tr key={row}>
              <td className="rowhead">{row}</td>
              {cols.map(c=>{
                const cell = (show[c] || []).find((x:any)=>x.row===row);
                const isHL = highlightCells?.has?.(`${c}:${row}`);
                const num = cell?.num;
                return (
                  <td key={c} className={`cell ${isHL?"hl":""}`}
                      style={{ background: colorForRarity(cell?.rarity) }}>
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
  positions, rowIndexCols, getRarityForKey, getNameForKey, highlight, visibleCols
}:{
  positions: PositionRow[], rowIndexCols: Set<number>,
  getRarityForKey: (key:string)=>string|undefined,
  getNameForKey: (key:string)=>string|undefined,
  highlight?: Set<string>,
  visibleCols?: number[],
}) {
  const rows = [...positions].sort((a,b)=>a.no-b.no);

  // 見出し①〜⑫の位置フィルタ（未指定なら全表示）
  const circFilter = new Set(visibleCols ?? []);
  const useFilter = circFilter.size > 0;

  // データ列（rowIndexでない列）を①〜⑫の位置に詰める
  const allCols  = Array.from({ length: 12 }, (_, i) => i + 1);
  const dataCols = allCols.filter(c => !rowIndexCols?.has?.(c));
  const viewCols = Array.from({ length: 12 }, (_, i) => dataCols[i] ?? null);

  // ヒットが1列だけのときは“名”列を追加
  const singlePos = useFilter && visibleCols && visibleCols.length === 1 ? visibleCols[0] : null;
  const singleColIdx = singlePos ? viewCols[singlePos - 1] : null;

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
            {singlePos && <th key="__names">名</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.no}>
              <td className="rowhead">{r.no}</td>

              {viewCols.map((colIdx, i) => {
                const pos = i + 1;
                if (useFilter && !circFilter.has(pos)) return null;

                const tokens = colIdx ? ((r as any)[`raw${colIdx}`] as string[] | undefined) : undefined;
                const vals = Array.isArray(tokens) ? tokens : [];
                const isMono = vals.length === 1;
                const token = vals[0];
                const rarKey = isMono ? getRarityForKey(token!) : undefined;
                const isHL = colIdx ? highlight?.has?.(`${colIdx}:${r.no}`) : false;

                const monoBg = ((): string => {
                  if (!isMono) return "#FFFFFF";
                  const t = toHalf(String(token)).toUpperCase();
                  if (SPECIAL_P.has(t)) return "#B388FF";
                  const rarUpper = (rarKey || "").toUpperCase();
                  if (!rarUpper || rarUpper === "N") return "#FFFFFF";
                  return colorForRarity(rarUpper);
                })();

                const baseStyle: React.CSSProperties = {
                  background: monoBg,
                  padding: 2, fontSize: isMono ? 12 : 10,
                  lineHeight: 1.15, verticalAlign: "middle",
                  whiteSpace: "normal", wordBreak: "break-all",
                  boxShadow: isHL ? "inset 0 0 0 3px #ef4444" : undefined
                };

                return (
                  <td key={i} className="cell" style={baseStyle} title={vals.join("/")}>
                    {isMono ? (
                      token ?? ""
                    ) : (
                      <div style={{ display:"flex", flexWrap:"wrap", gap:2, justifyContent:"center", background:"#FFFFFF" }}>
                        {vals.map((k,idx)=>{
                          const t = toHalf(String(k)).toUpperCase();
                          const rarUpper = ((getRarityForKey(t) || "")).toUpperCase();
                          const bg =
                            SPECIAL_P.has(t) ? "#B388FF" :
                            (!rarUpper || rarUpper==="N") ? "#FFFFFF" :
                            colorForRarity(rarUpper);
                          return (
                            <span key={idx}
                              style={{
                                display:"inline-block", padding:"0 2px", borderRadius:3,
                                fontSize:10, lineHeight:1.2, background:bg,
                                border:"1px solid rgba(0,0,0,0.06)"
                              }}>
                              {k}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </td>
                );
              })}

              {singleColIdx && (
                <td className="cell" style={{ background:"#fff", padding:2, fontSize:11, lineHeight:1.2, textAlign:"left" }}>
                  {(() => {
                    const toks = ((r as any)[`raw${singleColIdx}`] as string[] | undefined) ?? [];
                    const names = toks.map(k => getNameForKey(toHalf(String(k)).toUpperCase()) || k);
                    return names.join(" / ");
                  })()}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

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

/* ===== スタイル注入（重複防止） ===== */
(function injectStyle(){
  const STYLE_ID = "legends-inline-style";
  let el = document.getElementById(STYLE_ID) as HTMLStyleElement | null;
  if (!el) { el = document.createElement("style"); el.id = STYLE_ID; document.head.appendChild(el); }
  el.textContent = `
.pill{
  display:inline-flex;align-items:center;justify-content:center;gap:.4em;
  padding:.2em .6em;border-radius:999px;background:#2EC5FF;color:#fff;
  border:1px solid #9BDCF9;font-size:12px;font-weight:700;
}
.pill .muted{ color:rgba(255,255,255,.9); }
.tag{margin-left:.5em;padding:.1em .4em;border-radius:6px;font-size:11px;border:1px solid rgba(0,0,0,.08)}
.tag-lr{background:#ffd9d9}
.tag-p{background:#e2d4ff}

.hint{display:none;font-size:12px;color:#6b7280}

.res-list { display: grid; gap: 10px; margin-top: 8px; }
.res-summary { margin: 0; font-size: 14px; }
.res-count { color: crimson; }

.res-card {
  background: #f7fbff;
  border: 1px solid #dfeefe;
  border-radius: 12px;
  padding: 10px;
}
.res-head { display: flex; gap: 8px; align-items: baseline; }
.res-head .pos { font-weight: 700; }
.res-head .meta { margin-left: auto; font-size: 12px; color: #6b7280; }

.res-lines { display: grid; gap: 6px; margin-top: 6px; }
.res-line { display: flex; align-items: center; flex-wrap: wrap; gap: 8px; line-height: 1.35; }
.res-dist { opacity: .85; font-size: 14px; }
.res-name { font-size: 15px; }

.badge {
  display: inline-flex; align-items: center; gap: 4px;
  padding: 2px 8px; border-radius: 6px; color: #fff;
  font-weight: 700; font-size: 14px;
}
.badge-lr { background: #EF4444; }
.badge-p  { background: #B388FF; }
.res-empty { color: #666; margin-top: 8px; }

.btn-outline-blue{
  background:#fff; color:#1677FF; border:2px solid #1677FF;
  font-weight:700; padding:6px 14px; border-radius:10px; height:32px; line-height:1; cursor:pointer;
}
.btn-outline-blue:hover{ filter:brightness(0.95); }

/* 並びとサイズ固定（履歴=検索と同サイズ） */
.select-row{ display:flex; align-items:center; justify-content:flex-start !important; gap:8px !important; }
.select-row .btn-teal{
  height:28px !important; padding:0 12px !important; line-height:28px !important; border-radius:6px !important; margin-left:0 !important;
}
`;
})();
