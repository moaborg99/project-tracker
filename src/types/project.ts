import type { Component } from 'vue'

export type ProjectStatus = 'In Progress' | 'In Review' | 'To Do' | 'Done'

export type Project = {
  id: number
  name: string
  description: string
  status: ProjectStatus
  priority: 'Low' | 'Medium' | 'High'
  tags: string[]
  members: string[]
  completedTasks: number
  totalTasks: number
  dueDate: string
  startDate: string
}

export type ProjectStat = {
  title: string
  value: number
  icon: Component
}
