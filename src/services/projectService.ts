import type { CreateProjectInput, Project, ProjectStat } from '@/types/project'
import { CheckSquare, Users, FolderKanban, TrendingUp } from '@lucide/vue'

export const getProjects = async (): Promise<Project[]> => {
  const response = await fetch('http://localhost:8080/api/projects')

  if (!response.ok) {
    throw new Error('Failed to fetch projects')
  }

  return response.json()
}

export const getProjectById = async (id: number): Promise<Project> => {
  const response = await fetch(`http://localhost:8080/api/projects/${id}`)

  if (!response.ok) {
    throw new Error(`Failed to fetch project with id ${id}`)
  }

  return response.json()
}

export const createProject = async (project: CreateProjectInput): Promise<Project> => {
  const response = await fetch('http://localhost:8080/api/projects', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(project),
  })

  if (!response.ok) {
    throw new Error('Failed to create project')
  }

  return response.json()
}

export const getProjectStats = (project: Project): ProjectStat[] => {
  return [
    {
      title: 'Total Tasks',
      value: project.totalTasks,
      icon: CheckSquare,
    },
    {
      title: 'Completed',
      value: project.completedTasks,
      icon: TrendingUp,
    },
    {
      title: 'Team Members',
      value: project.members?.length ?? 0,
      icon: Users,
    },
    {
      title: 'Remaining',
      value: project.totalTasks - project.completedTasks,
      icon: FolderKanban,
    },
  ]
}

export const getProjectProgress = (project: Project): number => {
  if (project.totalTasks === 0) return 0

  return Math.round((project.completedTasks / project.totalTasks) * 100)
}
