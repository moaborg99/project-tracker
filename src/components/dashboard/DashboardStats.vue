<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { Stat, StatTitle } from '@/types/dashboard'

defineProps<{
  stats: Stat[]
}>()

const statStyleConfig: Record<
  StatTitle,
  {
    iconColor: string
    backgroundColorIcon: string
  }
> = {
  'Total Projects': {
    iconColor: 'text-indigo-600',
    backgroundColorIcon: 'bg-indigo-50',
  },
  'Active Tasks': {
    iconColor: 'text-blue-600',
    backgroundColorIcon: 'bg-blue-50',
  },
  Completed: {
    iconColor: 'text-emerald-600',
    backgroundColorIcon: 'bg-emerald-50',
  },
  'Team Members': {
    iconColor: 'text-violet-600',
    backgroundColorIcon: 'bg-violet-50',
  },
}
</script>
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-3">
    <Card v-for="stat in stats" :key="stat.title">
      <CardHeader class="flex flex-row items-center justify-between">
        <CardTitle>{{ stat.title }}</CardTitle>

        <div :class="['p-2 rounded', statStyleConfig[stat.title].backgroundColorIcon]">
          <component :is="stat.icon" :class="['h-4 w-4', statStyleConfig[stat.title].iconColor]" />
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
</template>
