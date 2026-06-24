import type { Project } from '@/types/dashboard'

export const getProjects = (): Project[] => {
  return [
    {
      id: 1,
      name: 'Platform Redesign',
      description:
        'Complete overhaul of the core product UI to align with the new design system and improve user experience.',
      status: 'In Progress',
      priority: 'High',
      tags: ['Design', 'Frontend', 'UX'],
      memberCount: 3,
      completedTasks: 23,
      totalTasks: 34,
      dueDate: '2026-09-23',
    },
    {
      id: 2,
      name: 'Mobile App v2',
      description:
        'Next generation mobile experience with offline support, push notifications, and improved navigation.',
      status: 'In Review',
      priority: 'High',
      tags: ['Mobile', 'iOS', 'Android'],
      memberCount: 3,
      completedTasks: 18,
      totalTasks: 52,
      dueDate: '2026-09-15',
    },
    {
      id: 3,
      name: 'API Gateway',
      description:
        'Unified API gateway with rate limiting, authentication middleware, versioning, and monitoring.',
      status: 'To Do',
      priority: 'Medium',
      tags: ['Backend', 'Infrastructure', 'Security'],
      memberCount: 2,
      completedTasks: 0,
      totalTasks: 21,
      dueDate: '2026-10-01',
    },
    {
      id: 4,
      name: 'Analytics Dashboard',
      description:
        'Business intelligence dashboard for tracking KPIs, cohort analysis, and custom reports.',
      status: 'Done',
      priority: 'Low',
      tags: ['Data', 'Frontend', 'Reporting'],
      memberCount: 3,
      completedTasks: 28,
      totalTasks: 28,
      dueDate: '2026-05-30',
    },
  ]
}
