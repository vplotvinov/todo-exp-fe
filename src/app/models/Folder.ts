export interface Folder {
  id: string
  title: string
  inbox: boolean
  ghost: boolean
  position: number
  parentId: string | null
  _count?: { tasks: number }
}
