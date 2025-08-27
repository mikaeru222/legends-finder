import type { CardRow, Cylinder, HitInfo } from '../types'

const circled = ['①','②','③','④','⑤','⑥','⑦','⑧','⑨','⑩','⑪','⑫']

export function circledCol(n: number) {
  return circled[(n - 1) % 12]
}

export function buildIndex(rows: CardRow[], set: string) {
  const ofSet = rows.filter((r) => r.set_code === set)
  const byCyl: Record<Cylinder, Record<number, CardRow[]>> = { L: {}, R: {} }
  for (const r of ofSet) {
    byCyl[r.cylinder][r.col] = byCyl[r.cylinder][r.col] || []
    byCyl[r.cylinder][r.col].push(r)
  }
  // row順に統一
  for (const c of ['L','R'] as Cylinder[]) {
    for (const col of Object.keys(byCyl[c])) {
      byCyl[c][+col].sort((a, b) => a.row - b.row)
    }
  }
  const maxRow = Math.max(0, ...ofSet.map((r) => r.row))
  return { byCyl, maxRow }
}

export function parsePattern(inputs: string[]): number[] {
  return inputs
    .map((s) => parseInt((s || '').trim(), 10))
    .filter((n) => Number.isFinite(n))
}

function findSubseq(hay: number[], needle: number[]): number {
  if (needle.length === 0) return -1
  outer: for (let i = 0; i <= hay.length - needle.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (hay[i + j] !== needle[j]) continue outer
    }
    return i // 先頭index
  }
  return -1
}

function isLR(r: CardRow | undefined) {
  if (!r?.rarity) return false
  const x = r.rarity.toUpperCase()
  return x.startsWith('LR') // LR, LR★ など
}

function nextLRInfo(seq: CardRow[], fromRow: number) {
  // fromRow の次から探索、無ければ先頭へwrap
  const startIdx = seq.findIndex((r) => r.row === fromRow)
  if (startIdx < 0) return { steps: Infinity as number, hit: undefined as CardRow | undefined }
  const n = seq.length
  for (let k = 1; k <= n; k++) {
    const r = seq[(startIdx + k) % n]
    if (isLR(r)) return { steps: k, hit: r }
  }
  return { steps: Infinity as number, hit: undefined }
}

export function matchAll(
  rows: CardRow[],
  set: string,
  cylinder: Cylinder,
  pattern: number[]
): HitInfo[] {
  const { byCyl } = buildIndex(rows, set)
  const cols = byCyl[cylinder] || {}
  const hits: HitInfo[] = []
  for (const col of Object.keys(cols).map(Number).sort((a, b) => a - b)) {
    const seq = cols[col]
    const nums = seq.map((r) => r.num)
    const idx = findSubseq(nums, pattern)
    if (idx >= 0) {
      const tail = seq[idx + pattern.length - 1]
      const nx = nextLRInfo(seq, tail.row)
      hits.push({
        set,
        cylinder,
        col,
        row: tail.row,
        matched: pattern,
        nextLRSteps: Number.isFinite(nx.steps) ? (nx.steps as number) : 9999,
        nextLR: nx.hit ? { row: nx.hit.row, rarity: nx.hit.rarity!, num: nx.hit.num, name: nx.hit.name } : undefined
      })
    }
  }
  // 次LRまでの残回数が短い順 → 同率はrow, col順
  return hits.sort((a, b) => a.nextLRSteps - b.nextLRSteps || a.row - b.row || a.col - b.col)
}
