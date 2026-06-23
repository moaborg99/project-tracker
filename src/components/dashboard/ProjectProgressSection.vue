<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight } from '@lucide/vue'
import { RouterLink } from 'vue-router'

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

defineProps<{
  projects: Project[]
}>()

const getProjectProgress = (project: Project) => {
  if (project.totalTasks === 0) {
    return 0
  }

  return Math.round((project.completedTasks / project.totalTasks) * 100)
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
</template>
