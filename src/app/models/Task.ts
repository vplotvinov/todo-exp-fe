export interface Task {
  title: string
  id: string
  completed: boolean
  position: number
  folderId: string
  dueDate: string
  dueTime: string
  ghost?: boolean
}
