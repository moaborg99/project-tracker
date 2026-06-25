<script setup lang="ts">
import { getProjects } from '@/services/projectService'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ProjectStatusBadge from '@/components/project/ProjectStatusBadge.vue'
import type { Project } from '@/types/dashboard'
import { projectStatusConfig } from '@/config/projectStatusConfig'
import { getInitials } from '@/utils/getInitials'

const projects = getProjects()

const getProjectProgress = (project: Project) => {
  if (project.totalTasks === 0) {
    return 0
  }

  return Math.round((project.completedTasks / project.totalTasks) * 100)
}
</script>

<template>
  <main>
    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <Card
        v-for="project in projects"
        :key="project.name"
        :class="[
          'border-t-4 cursor-pointer transition-all duration-200',
          'hover:-translate-y-0.5 hover:shadow-lg',
          projectStatusConfig[project.status].borderColor,
        ]"
      >
        <CardHeader class="px-6 mt-2">
          <CardTitle class="font-semibold">{{ project.name }}</CardTitle>
          <p class="text-sm text-slate-400">
            {{ project.members.length }} members · {{ project.totalTasks }} tasks
          </p>
        </CardHeader>
        <CardContent class="p-6 space-y-3">
          <p class="text-sm text-slate-500">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600"
            >
              {{ tag }}
            </span>
          </div>
          <div class="space-y-2">
            <div class="flex items-center justify-between text-sm text-slate-500">
              <span>{{ project.completedTasks }}/{{ project.totalTasks }} tasks</span>
              <span>{{ getProjectProgress(project) }}%</span>
            </div>

            <div class="h-2 w-full rounded-full bg-slate-100">
              <div
                :class="['h-2 rounded-full', projectStatusConfig[project.status].progressColor]"
                :style="{ width: `${getProjectProgress(project)}%` }"
              />
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <ProjectStatusBadge :status="project.status" />

              <span class="text-sm font-medium text-orange-600">
                {{ project.priority }}
              </span>
            </div>

            <div class="flex -space-x-2">
              <span
                v-for="member in project.members"
                :key="member"
                class="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-[9px] font-semibold text-white ring-2 ring-white"
              >
                {{ getInitials(member) }}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </main>
</template>
