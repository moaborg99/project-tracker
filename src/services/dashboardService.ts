import type { Stat } from '@/types/dashboard'
import type { Task } from '@/types/task'
import type { Activity } from '@/types/activity'
import { FolderKanban, SquareCheckBig, TrendingUp, Users } from '@lucide/vue'
import { getProjects } from '@/services/projectService'

export const getDashboardOverview = async () => {
  const stats: Stat[] = [
    {
      title: 'Total Projects',
      icon: FolderKanban,
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
    },
    {
      title: 'Completed',
      value: 15,
      subtitle: 'Tasks this month',
      change: 8,
      changeLabel: 'from last month',
      icon: TrendingUp,
    },
    {
      title: 'Team Members',
      value: 6,
      subtitle: 'Online now',
      icon: Users,
    },
  ]

  const upcomingTasks: Task[] = [
    {
      id: 1,
      projectId: 1,
      title: 'Design Landing Page',
      description: 'Create the landing page design.',
      type: 'Design',
      status: 'In Progress',
      assignedTo: 'Alice Cooper',
      dueDate: '2026-09-20',
    },
    {
      id: 2,
      projectId: 1,
      title: 'Set Up Database',
      description: 'Set up the initial project database.',
      type: 'Backend',
      status: 'To Do',
      assignedTo: 'Bob Marley',
      dueDate: '2026-09-18',
    },
    {
      id: 3,
      projectId: 1,
      title: 'Write API Documentation',
      description: 'Document the current project API.',
      type: 'Backend',
      status: 'In Review',
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

  const projects = await getProjects()

  return {
    stats,
    projects,
    upcomingTasks,
    recentActivities,
  }
}
