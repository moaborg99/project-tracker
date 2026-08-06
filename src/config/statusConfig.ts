import type { Status } from '@/types/status'

export const statusConfig: Record<
  Status,
  {
    textColor: string
    bgColor: string
    progressColor: string
    borderColor: string
  }
> = {
  Backlog: {
    textColor: 'text-slate-600',
    bgColor: 'bg-slate-50',
    progressColor: 'bg-slate-500',
    borderColor: 'border-t-slate-500',
  },
  'To Do': {
    textColor: 'text-gray-600',
    bgColor: 'bg-gray-50',
    progressColor: 'bg-gray-600',
    borderColor: 'border-t-gray-600',
  },
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
    borderColor: 'border-t-yellow-600',
  },
  Done: {
    textColor: 'text-green-600',
    bgColor: 'bg-green-50',
    progressColor: 'bg-green-600',
    borderColor: 'border-t-green-600',
  },
}
