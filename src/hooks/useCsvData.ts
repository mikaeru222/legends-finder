import { useCallback, useEffect, useState } from 'react'
import Papa from 'papaparse'

export type CsvRow = {
  set: string
  cyl: 'L' | 'R'
  col: number
  row: number
  num?: string | number
  rarity?: string
  name?: string
}

const toHalf = (s: string) =>
  s.replace(/[！-～]/g, c => String.fromCharCode(c.charCodeAt(0) - 0xFEE0)).replace(/\u3000/g, ' ')
const normSet = (s: string) => toHalf((s || '').trim()).toUpperCase().replace(/\s+/g, '')

export function useCsvData(url: string) {
  const [rows, setRows] = useState<CsvRow[]>([])
  const [sets, setSets] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const reload = useCallback(() => {
    setLoading(true)
    setError(null)

    fetch(url, { cache: 'no-cache' })
      .then(r => {
        if (!r.ok) throw new Error(`CSV fetch failed: ${r.status}`)
        return r.text()
      })
      .then(text => {
        const parsed = Papa.parse<Record<string, any>>(text, {
          header: true,
          skipEmptyLines: true,
          transformHeader: h => (h ?? '').toString().trim()
        })

        if (parsed.errors?.length) {
          console.warn('PapaParse errors:', parsed.errors)
        }

        const pick = (o: Record<string, any>, keys: string[]) => {
          for (const k of keys) if (k in o) return o[k]
          return undefined
        }

        const out: CsvRow[] = []
        for (const raw of parsed.data) {
          const vSet = pick(raw, ['set', 'SET', 'シリーズ', '弾', 'series'])
          const vCyl = pick(raw, ['cyl', 'Cyl', 'LR', 'lr', 'side', '左右'])
          const vCol = pick(raw, ['col', 'COL', 'column', '列'])
          const vRow = pick(raw, ['row', 'ROW', '行'])
          if (vSet == null || vCyl == null || vCol == null || vRow == null) continue

          const cyl = String(vCyl).trim().toUpperCase().startsWith('R') ? 'R' : 'L'
          const col = Number(String(vCol).trim())
          const row = Number(String(vRow).trim())
          if (!Number.isFinite(col) || !Number.isFinite(row) || col <= 0 || row <= 0) continue

          out.push({
            set: String(vSet).trim(),
            cyl,
            col,
            row,
            num: pick(raw, ['num', '番号', 'No', 'NO']),
            rarity: pick(raw, ['rarity', 'レアリティ', 'レア', 'rar']),
            name: pick(raw, ['name', 'カード名', '名称', 'title'])
          })
        }

        // ユニークなセット名
        const uniq = Array.from(new Map(out.map(r => [normSet(r.set), r.set])).values())
        uniq.sort((a, b) => {
          const na = parseInt(a.replace(/\D+/g, ''), 10)
          const nb = parseInt(b.replace(/\D+/g, ''), 10)
          if (!Number.isNaN(na) && !Number.isNaN(nb)) return na - nb
          return a.localeCompare(b, 'ja')
        })

        setRows(out)
        setSets(uniq)
        console.log(`useCsvData rows=${out.length}`, out[0])
        console.log('useCsvData sets=', uniq)
      })
      .catch(e => setError(e as Error))
      .finally(() => setLoading(false))
  }, [url])

  useEffect(() => {
    reload()
  }, [reload])

  return { rows, sets, loading, error, reload }
}
export default useCsvData
