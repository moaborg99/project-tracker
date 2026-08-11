<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getDashboardOverview } from '@/services/dashboardService'
import ProjectProgressSection from '@/components/dashboard/ProjectProgressSection.vue'
import UpcomingDeadlinesSection from '@/components/dashboard/UpcomingDeadlinesSection.vue'
import RecentActivitySection from '@/components/dashboard/RecentActivitySection.vue'
import DashboardStats from '@/components/dashboard/DashboardStats.vue'
import type { Project } from '@/types/project'
import type { Stat } from '@/types/dashboard'
import type { Task } from '@/types/task'
import type { Activity } from '@/types/activity'

const stats = ref<Stat[]>([])
const projects = ref<Project[]>([])
const upcomingTasks = ref<Task[]>([])
const recentActivities = ref<Activity[]>([])

onMounted(async () => {
  const overview = await getDashboardOverview()

  stats.value = overview.stats
  projects.value = overview.projects
  upcomingTasks.value = overview.upcomingTasks
  recentActivities.value = overview.recentActivities
})
</script>
<template>
  <main>
    <DashboardStats :stats="stats" />

    <ProjectProgressSection :projects="projects" />

    <UpcomingDeadlinesSection :tasks="upcomingTasks" />

    <RecentActivitySection :activities="recentActivities" />
  </main>
</template>
