export interface Topic {
  id: number
  date: string
  title: string
  summary: string
  tab: string
  pv: number
  commentsCount: number
  tags?: string[]
}