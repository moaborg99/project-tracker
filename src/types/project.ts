import type { Component } from 'vue'

import type { Status } from './status'

export type ProjectStatus = Exclude<Status, 'Backlog'>

export type Project = {
  id: number
  name: string
  description: string
  status: ProjectStatus
  priority: 'Low' | 'Medium' | 'High'
  tags?: string[]
  members?: string[]
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

export type CreateProjectInput = Omit<Project, 'id' | 'tags' | 'members'>
