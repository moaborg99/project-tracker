<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight } from '@lucide/vue'
import { RouterLink } from 'vue-router'
import type { Project, ProjectStatus } from '@/types/dashboard'

defineProps<{
  projects: Project[]
}>()

const getProjectProgress = (project: Project) => {
  if (project.totalTasks === 0) {
    return 0
  }

  return Math.round((project.completedTasks / project.totalTasks) * 100)
}

const projectStatusConfig: Record<
  ProjectStatus,
  {
    textColor: string
    bgColor: string
    progressColor: string
  }
> = {
  'In Progress': {
    textColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
    progressColor: 'bg-indigo-600',
  },
  'In Review': {
    textColor: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    progressColor: 'bg-yellow-600',
  },
  'To Do': {
    textColor: 'text-gray-600',
    bgColor: 'bg-gray-50',
    progressColor: 'bg-gray-600',
  },
  Done: {
    textColor: 'text-green-600',
    bgColor: 'bg-green-50',
    progressColor: 'bg-green-600',
  },
}
</script>

<template>
  <Card class="mt-6">
    <CardHeader class="flex justify-between border-b">
      <CardTitle class="text-lg mb-2">Project Progress</CardTitle>
      <RouterLink to="/projects" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">
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
                  projectStatusConfig[project.status].textColor,
                  projectStatusConfig[project.status].bgColor,
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
              :class="['h-2 rounded-full', projectStatusConfig[project.status].progressColor]"
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
</template>
