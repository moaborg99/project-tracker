import type { ProjectStatus } from '@/types/dashboard'

export const projectStatusConfig: Record<
  ProjectStatus,
  {
    textColor: string
    bgColor: string
    progressColor: string
    borderColor: string
  }
> = {
  'In Progress': {
    textColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
    progressColor: 'bg-indigo-600',
    borderColor: 'border-t-indigo-600',
  },
  'In Review': {
    textColor: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    progressColor: 'bg-yellow-600',
    borderColor: 'border-t-yellow-600'
  },
  'To Do': {
    textColor: 'text-gray-600',
    bgColor: 'bg-gray-50',
    progressColor: 'bg-gray-600',
    borderColor: 'border-t-gray-600',
  },
  Done: {
    textColor: 'text-green-600',
    bgColor: 'bg-green-50',
    progressColor: 'bg-green-600',
    borderColor: 'border-t-green-600'
  },
}
