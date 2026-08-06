import type { Task } from '@/types/task'

const tasks: Task[] = [
  {
    id: 1,
    projectId: 1,
    title: 'Create wireframes',
    description: 'Create initial wireframes for the redesigned dashboard.',
    status: 'Done',
    assignedTo: 'Alice Chen',
    dueDate: '2026-06-10',
    type: 'Design',
  },
  {
    id: 2,
    projectId: 1,
    title: 'Build project cards',
    description: 'Implement reusable project card components.',
    status: 'In Progress',
    assignedTo: 'Marcus Rodriguez',
    dueDate: '2026-06-18',
    type: 'Frontend',
  },
  {
    id: 3,
    projectId: 1,
    title: 'Review design tokens',
    description: 'Make sure spacing, colors and radius match the design system.',
    status: 'In Review',
    assignedTo: 'Sara Kim',
    dueDate: '2026-06-22',
    type: 'Design',
  },
  {
    id: 4,
    projectId: 1,
    title: 'Add task filters',
    description: 'Allow filtering tasks by status.',
    status: 'To Do',
    assignedTo: 'Alice Chen',
    dueDate: '2026-06-25',
    type: 'Frontend',
  },
]

export const getTasksByProjectId = (projectId: number): Task[] => {
  return tasks.filter((task) => task.projectId === projectId)
}
