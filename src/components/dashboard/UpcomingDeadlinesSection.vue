<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Clock } from '@lucide/vue'
import type { Task } from '@/types/task'
import { getInitials } from '@/utils/getInitials'

defineProps<{
  tasks: Task[]
}>()
</script>
<template>
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
          v-for="task in tasks"
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
</template>
