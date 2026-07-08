<script setup lang="ts">
import ProjectStatCard from '@/components/project/ProjectStatCard.vue'
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import ProjectStatusBadge from '@/components/project/ProjectStatusBadge.vue'
import { getProjectById, getProjectStats } from '@/services/projectService'
import { projectStatusConfig } from '@/config/projectStatusConfig'
import { Plus, Ellipsis, Calendar } from '@lucide/vue'

const route = useRoute()

const projectId = computed(() => Number(route.params.id))

const project = computed(() => getProjectById(projectId.value))

const projectStats = computed(() => {
  if (!project.value) return []

  return getProjectStats(project.value)
})

const projectBorderColor = computed(() => {
  if (!project.value) return ''

  return projectStatusConfig[project.value.status].borderColor
})
</script>

<template>
  <main>
    <RouterLink to="/projects" class="text-sm text-slate-500 hover:text-slate-900">
      ← Back to Projects
    </RouterLink>

    <Card v-if="project" :class="['mt-6 border-t-4', projectBorderColor]">
      <CardHeader class="flex flex-row items-start justify-between px-6 pt-2 pb-4">
        <div>
          <div class="flex items-center gap-3">
            <CardTitle class="text-2xl">
              {{ project.name }}
            </CardTitle>

            <ProjectStatusBadge :status="project.status" />
          </div>

          <p class="mt-3 text-slate-500">
            {{ project.description }}
          </p>
        </div>
        <div class="flex items-center gap-3">
          <Button type="button" class="gap-2">
            <Plus class="h-4 w-4" />
            Add Task
          </Button>
          <button type="button" class="text-slate-400 hover:text-slate-600">
            <Ellipsis class="h-5 w-5" />
          </button>
        </div>
      </CardHeader>

      <CardContent class="px-6 pb-2">
        <div class="flex flex-wrap items-center gap-6">
          <div class="flex flex-wrap gap-4 text-sm text-slate-500">
            <div class="flex items-center gap-2">
              <Calendar class="h-4 w-4" />
              <span>Started {{ project.startDate }}</span>
            </div>

            <div class="flex items-center gap-2">
              <Calendar class="h-4 w-4" />
              <span>Due {{ project.dueDate }}</span>
            </div>
          </div>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>

    <div v-else>Project not found</div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 pt-6">
      <ProjectStatCard
        v-for="stat in projectStats"
        :key="stat.title"
        :title="stat.title"
        :value="stat.value"
        :icon="stat.icon"
      />
    </div>
  </main>
</template>
