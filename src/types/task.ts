import type { Status } from './status'

export type TaskStatus = Status

export type TaskType = 'Frontend' | 'Backend' | 'Design' | 'Bug' | 'Testing'

export type Task = {
  id: number
  projectId: number
  title: string
  description: string
  type: TaskType
  status: TaskStatus
  assignedTo: string
  dueDate: string
}
