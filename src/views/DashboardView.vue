<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { Component } from 'vue'
import { FolderKanban, SquareCheckBig, TrendingUp, Users, ArrowRight, Clock } from '@lucide/vue'
import { RouterLink } from 'vue-router'

type Stat = {
  title: string
  value: number
  subtitle: string
  change?: number
  changeLabel?: string
  icon: Component
  iconColor?: string
  backgroundColorIcon?: string
}

type Project = {
  name: string
  status: 'In Progress' | 'In Review' | 'To Do' | 'Done'
  statusTextColor: string
  statusBgColor: string
  statusProgressColor: string
  completedTasks: number
  totalTasks: number
  dueDate: string
}

type Task = {
  name: string
  project: string
  assignedTo: string
  dueDate: string
}

type Activity = {
  user: string
  action: string
  target: string
  createdAt: string
  type: 'completed' | 'commented' | 'created' | 'updated' | 'joined'
}

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

const getProjectProgress = (project: Project) => {
  if (project.totalTasks === 0) {
    return 0
  }

  return Math.round((project.completedTasks / project.totalTasks) * 100)
}

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

const getInitials = (fullName: string) => {
  return fullName
    .trim()
    .split(' ')
    .filter(Boolean)
    .map((name) => name[0])
    .join('')
    .toUpperCase()
}
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
    <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-3">
      <Card v-for="stat in stats" :key="stat.title">
        <CardHeader class="flex flex-row items-center justify-between">
          <CardTitle>{{ stat.title }}</CardTitle>
          <div :class="['p-2 rounded', stat.backgroundColorIcon]">
            <component :is="stat.icon" :class="['h-4 w-4', stat.iconColor]" />
          </div>
        </CardHeader>

        <CardContent>
          <div class="text-4xl font-bold">
            {{ stat.value }}
          </div>

          <p class="mt-2 text-sm text-slate-500">{{ stat.subtitle }}</p>

          <p
            v-if="stat.change !== undefined && stat.changeLabel"
            class="mt-1 text-sm font-medium text-green-600"
          >
            +{{ stat.change }} {{ stat.changeLabel }}
          </p>
        </CardContent>
      </Card>
    </div>

    <Card class="mt-6">
      <CardHeader class="flex justify-between border-b">
        <CardTitle class="text-lg mb-2">Project Progress</CardTitle>
        <RouterLink
          to="/projects"
          class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          View all <ArrowRight class="inline h-4 w-4" />
        </RouterLink>
      </CardHeader>

      <CardContent>
        <ul>
          <li
            v-for="project in projects"
            :key="project.name"
            class="border-b border-slate-200 py-5 last:border-b-0"
          >
            <div class="flex items-center justify-between gap-4">
              <h3 class="font-semibold">
                {{ project.name }}
              </h3>

              <div class="flex shrink-0 items-center gap-3">
                <span
                  :class="[
                    'rounded-full px-3 py-1 text-sm font-medium',
                    project.statusTextColor,
                    project.statusBgColor,
                  ]"
                >
                  {{ project.status }}
                </span>

                <span class="text-sm font-medium text-slate-600">
                  {{ getProjectProgress(project) }}%
                </span>
              </div>
            </div>

            <div class="mt-3 h-2 w-full rounded-full bg-slate-100">
              <div
                :class="['h-2 rounded-full', project.statusProgressColor]"
                :style="{ width: `${getProjectProgress(project)}%` }"
              />
            </div>

            <div class="mt-3 flex items-center justify-between text-sm text-slate-500">
              <span> {{ project.completedTasks }}/{{ project.totalTasks }} tasks </span>

              <span v-if="project.dueDate"> Due {{ project.dueDate }} </span>
            </div>
          </li>
        </ul>
      </CardContent>
    </Card>

    <Card class="mt-6">
      <CardHeader class="flex justify-between border-b">
        <CardTitle class="text-lg mb-2">Upcoming Deadlines</CardTitle>
        <span class="flex gap-2 items-center text-sm text-slate-500"
          ><Clock class="h-4 w-4"></Clock>Next 14 days</span
        >
      </CardHeader>

      <CardContent>
        <ul>
          <li
            v-for="task in upcomingTasks"
            :key="task.name"
            class="border-b border-slate-200 py-5 last:border-b-0"
          >
            <div class="flex items-center justify-between gap-4">
              <div>
                <h3 class="font-semibold">
                  {{ task.name }}
                </h3>

                <p class="mt-1 text-sm text-slate-500">
                  {{ task.project }}
                </p>
              </div>

              <div class="flex shrink-0 items-center gap-3">
                <span
                  class="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white"
                >
                  {{ getInitials(task.assignedTo) }}
                </span>

                <span class="text-sm font-medium text-slate-600">
                  {{ task.dueDate }}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </CardContent>
    </Card>

    <Card class="mt-6">
      <CardHeader class="flex justify-between border-b">
        <CardTitle class="text-lg mb-2">Recent Activity</CardTitle>
      </CardHeader>

      <CardContent>
        <ul>
          <li
            v-for="activity in recentActivities"
            :key="`${activity.user}-${activity.target}`"
            class="border-b border-slate-200 py-5 last:border-b-0"
          >
            <div class="flex gap-4">
              <div>
                <span
                  class="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white"
                >
                  {{ getInitials(activity.user) }}
                </span>
              </div>
              <div>
                <h3>
                  <span class="font-semibold">
                    {{ activity.user }}
                  </span>

                  {{ activity.action }} "{{ activity.target }}"
                </h3>

                <p class="mt-1 text-sm text-slate-500">
                  {{ activity.createdAt }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </CardContent>
    </Card>
  </main>
</template>
