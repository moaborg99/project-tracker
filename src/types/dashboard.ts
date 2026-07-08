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
