export type Cylinder = 'L' | 'R'

export interface CardRowRaw {
  set_code?: string
  cylinder?: string
  col?: string | number
  row?: string | number
  num?: string | number
  rarity?: string
  name?: string
}

export interface CardRow {
  set_code: string
  cylinder: Cylinder
  col: number
  row: number
  num: number
  rarity?: string
  name?: string
}

export interface HitInfo {
  set: string
  cylinder: Cylinder
  col: number
  row: number // マッチの末尾のrow（1-based）
  matched: number[] // マッチした並び
  nextLRSteps: number // 次のLRまでの残回数
  nextLR?: { row: number; rarity: string; num: number; name?: string }
}
