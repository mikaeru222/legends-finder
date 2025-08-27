import { useEffect, useState } from 'react'

export type HistoryItem = {
  pattern: number[]
  rev: boolean
  ts: number
}

const read = (key: string): HistoryItem[] => {
  try { return JSON.parse(localStorage.getItem(key) || '[]') as HistoryItem[] } catch { return [] }
}
const write = (key: string, items: HistoryItem[]) => {
  localStorage.setItem(key, JSON.stringify(items))
}

export function useSearchHistory(key: string) {
  const [items, setItems] = useState<HistoryItem[]>(() => read(key))

  // key（セットやL/R）が変わったら読み直し
  useEffect(() => { setItems(read(key)) }, [key])

  const save = (next: HistoryItem[]) => { setItems(next); write(key, next) }
  const add  = (pattern: number[], rev: boolean) => {
    if (!pattern.length) return
    const next = [{ pattern, rev, ts: Date.now() }, ...items].slice(0, 50)
    save(next)
  }
  const remove = (ts: number) => save(items.filter(i => i.ts !== ts))
  const clear  = () => save([])

  return { items, add, remove, clear }
}
