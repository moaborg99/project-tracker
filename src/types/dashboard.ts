import type { Component } from 'vue'

export type StatTitle = 'Total Projects' | 'Active Tasks' | 'Completed' | 'Team Members'

export type Stat = {
  title: StatTitle
  value: number
  subtitle: string
  change?: number
  changeLabel?: string
  icon: Component
}

export type ProjectStatus = 'In Progress' | 'In Review' | 'To Do' | 'Done'

export type Project = {
  name: string
  status: ProjectStatus
  completedTasks: number
  totalTasks: number
  dueDate: string
}

export type Task = {
  name: string
  project: string
  assignedTo: string
  dueDate: string
}

export type Activity = {
  user: string
  action: string
  target: string
  createdAt: string
  type: 'completed' | 'commented' | 'created' | 'updated' | 'joined'
}
