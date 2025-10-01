
# CX4 レア色マッチング「まるっと修正」パック（全文不要／ワンコマンド適用）

**目的:** デザインも機能も一切変えずに、CX4 の「レア色マッチング」を正しくする。  
**修正点:**  
- `SPECIAL_P` は **LR★（紫）** として扱う（従来通り）  
- `CP_P`（CPにPが付く型）を **CP★** として色・バッジ表示に反映  
- `LR` 系（`LR` / `LR★`）は一律 **高レア** としてヒット候補に出す（`=== "LR"` 固定をやめて `startsWith("LR")`）  
- 候補バッジ表示を **LR / LR★ / CP / CP★** に拡張（色は `colorForRarity()` に委譲）

## 使い方

プロジェクトのルート（`package.json` がある場所）で、次のコマンドを実行してください。

```bash
# 1) zip を展開（任意の場所）
# 2) プロジェクトルートで実行（src/App.tsx を直接上書き修正します）
node scripts/apply_cx4_full_fix.js
```

> 失敗した場合や内容を確認したい場合は、`scripts/apply_cx4_full_fix.js` の中身をご覧ください。
> 適用前に `src/App.tsx` のバックアップとして `src/App.tsx.bak` を自動作成します。

## 変更概要（技術）

- `type Candidate` の `badge` を `"LR" | "LR★" | "CP" | "CP★"` に拡張
- `buildLinesForHit(...)`:
  - 高レア判定：`SPECIAL_P.has(t) || /^LR/i.test(rar) || /^CP/i.test(rar)`
  - バッジ決定：`SPECIAL_P => "LR★"`, `rar.startsWith("LR") => "LR / LR★"`, `rar.startsWith("CP") => "CP / CP★"`
  - 既存のスコアリングや件数上限は変更なし
- `ResultList` のバッジ描画：クラス名ではなく `colorForRarity(b.badge)` を使ったインラインスタイルに変更
  - デザイン・レイアウトはそのまま

## ロールバック

`src/App.tsx.bak` を `src/App.tsx` に戻せば元に戻せます。
