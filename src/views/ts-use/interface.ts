export interface Topic {
  date: string
  title: string
  summary: string
  id: number
  tab: string
  pv: number
  commentsCount: number
  tags?: string[]
}