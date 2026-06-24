import type { Project, Stat, Task, Activity } from '@/types/dashboard'
import { FolderKanban, SquareCheckBig, TrendingUp, Users } from '@lucide/vue'

export const getDashboardOverview = () => {
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

  const projects: Project[] = [
    {
      name: 'Project Alpha',
      status: 'In Progress',
      completedTasks: 7,
      totalTasks: 10,
      dueDate: '2026-09-23',
    },
    {
      name: 'Project Beta',
      status: 'In Review',
      completedTasks: 9,
      totalTasks: 10,
      dueDate: '2026-09-15',
    },
    {
      name: 'Project Gamma',
      status: 'To Do',
      completedTasks: 0,
      totalTasks: 5,
      dueDate: '2026-10-01',
    },
    {
      name: 'Project Delta',
      status: 'Done',
      completedTasks: 10,
      totalTasks: 10,
      dueDate: '2026-05-30',
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

  return {
    stats,
    projects,
    upcomingTasks,
    recentActivities,
  }
}
