<script setup lang="ts">
import { FolderKanban, SquareCheckBig, TrendingUp, Users } from '@lucide/vue'
import type { Project, Stat, Task, Activity } from '@/types/dashboard'
import ProjectProgressSection from '@/components/dashboard/ProjectProgressSection.vue'
import UpcomingDeadlinesSection from '@/components/dashboard/UpcomingDeadlinesSection.vue'
import RecentActivitySection from '@/components/dashboard/RecentActivitySection.vue'
import DashboardStats from '@/components/dashboard/DashboardStats.vue'

const stats: Stat[] = [
  {
    title: 'Total Projects',
    icon: FolderKanban,
    iconColor: 'text-indigo-600',
    backgroundColorIcon: 'bg-indigo-50',
    value: 6,
    subtitle: '3 active this month',
    change: 2,
    changeLabel: 'from last month',
  },
  {
    title: 'Active Tasks',
    value: 11,
    subtitle: '8 due this week',
    icon: SquareCheckBig,
    iconColor: 'text-blue-600',
    backgroundColorIcon: 'bg-blue-50',
  },
  {
    title: 'Completed',
    value: 15,
    subtitle: 'Tasks this month',
    change: 8,
    changeLabel: 'from last month',
    icon: TrendingUp,
    iconColor: 'text-emerald-600',
    backgroundColorIcon: 'bg-emerald-50',
  },
  {
    title: 'Team Members',
    value: 6,
    subtitle: 'Online now',
    icon: Users,
    iconColor: 'text-violet-600',
    backgroundColorIcon: 'bg-violet-50',
  },
]

const projects: Project[] = [
  {
    name: 'Project Alpha',
    status: 'In Progress',
    completedTasks: 7,
    statusBgColor: 'bg-blue-50',
    statusTextColor: 'text-blue-600',
    totalTasks: 10,
    dueDate: '2026-09-23',
    statusProgressColor: 'bg-indigo-600',
  },
  {
    name: 'Project Beta',
    status: 'In Review',
    completedTasks: 9,
    statusBgColor: 'bg-yellow-50',
    statusTextColor: 'text-yellow-600',
    totalTasks: 10,
    dueDate: '2026-09-15',
    statusProgressColor: 'bg-yellow-600',
  },
  {
    name: 'Project Gamma',
    status: 'To Do',
    completedTasks: 0,
    statusBgColor: 'bg-gray-50',
    statusTextColor: 'text-gray-600',
    totalTasks: 5,
    dueDate: '2026-10-01',
    statusProgressColor: 'bg-gray-600',
  },
  {
    name: 'Project Delta',
    status: 'Done',
    completedTasks: 10,
    statusBgColor: 'bg-green-50',
    statusTextColor: 'text-green-600',
    totalTasks: 10,
    dueDate: '2026-05-30',
    statusProgressColor: 'bg-green-600',
  },
]

const upcomingTasks: Task[] = [
  {
    name: 'Design Landing Page',
    project: 'Project Alpha',
    assignedTo: 'Alice Cooper',
    dueDate: '2026-09-20',
  },
  {
    name: 'Set Up Database',
    project: 'Project Beta',
    assignedTo: 'Bob Marley',
    dueDate: '2026-09-18',
  },
  {
    name: 'Write API Documentation',
    project: 'Project Gamma',
    assignedTo: 'Charlie Chaplin',
    dueDate: '2026-09-25',
  },
]

const recentActivities: Activity[] = [
  {
    user: 'Marcus Bobby',
    action: 'completed',
    target: 'Design system token audit',
    createdAt: '28m ago',
    type: 'completed',
  },
  {
    user: 'James Bond',
    action: 'merged',
    target: 'PR #142 — Rate limiting middleware',
    createdAt: '1h ago',
    type: 'updated',
  },
]
</script>
<template>
  <main>
    <DashboardStats :stats="stats" />

    <ProjectProgressSection :projects="projects" />

    <UpcomingDeadlinesSection :tasks="upcomingTasks" />

    <RecentActivitySection :activities="recentActivities" />
  </main>
</template>
