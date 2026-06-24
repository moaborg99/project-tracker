<script setup lang="ts">
import { getDashboardOverview } from '@/services/dashboardService'
import ProjectProgressSection from '@/components/dashboard/ProjectProgressSection.vue'
import UpcomingDeadlinesSection from '@/components/dashboard/UpcomingDeadlinesSection.vue'
import RecentActivitySection from '@/components/dashboard/RecentActivitySection.vue'
import DashboardStats from '@/components/dashboard/DashboardStats.vue'

const { stats, projects, upcomingTasks, recentActivities } = getDashboardOverview()
</script>
<template>
  <main>
    <DashboardStats :stats="stats" />

    <ProjectProgressSection :projects="projects" />

    <UpcomingDeadlinesSection :tasks="upcomingTasks" />

    <RecentActivitySection :activities="recentActivities" />
  </main>
</template>
