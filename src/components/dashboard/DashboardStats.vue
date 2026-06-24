<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { Stat } from '@/types/dashboard'

defineProps<{
  stats: Stat[]
}>()
</script>
<template>
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
</template>
