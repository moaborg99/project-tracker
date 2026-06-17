<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { Component } from 'vue'
import { FolderKanban, SquareCheckBig, TrendingUp, Users } from '@lucide/vue'

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
  </main>
</template>
