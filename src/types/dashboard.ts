import type { Component } from 'vue'

export type Stat = {
  title: string
  value: number
  subtitle: string
  change?: number
  changeLabel?: string
  icon: Component
  iconColor?: string
  backgroundColorIcon?: string
}

export type Project = {
  name: string
  status: 'In Progress' | 'In Review' | 'To Do' | 'Done'
  statusTextColor: string
  statusBgColor: string
  statusProgressColor: string
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
