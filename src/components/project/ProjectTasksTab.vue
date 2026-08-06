<script setup lang="ts">
import { computed, ref } from 'vue'
import type { TaskStatus } from '@/types/task'
import { getTasksByProjectId } from '@/services/taskService'
import StatusBadge from '@/components/badges/StatusBadge.vue'
import { Calendar, User } from '@lucide/vue'

const props = defineProps<{
  projectId: number
}>()

const selectedStatus = ref<TaskStatus | 'All'>('All')

const taskFilters: Array<TaskStatus | 'All'> = [
  'All',
  'In Progress',
  'In Review',
  'To Do',
  'Backlog',
  'Done',
]

const tasks = computed(() => {
  return getTasksByProjectId(props.projectId)
})

const filteredTasks = computed(() => {
  if (selectedStatus.value === 'All') {
    return tasks.value
  }

  return tasks.value.filter((task) => task.status === selectedStatus.value)
})
</script>

<template>
  <div class="rounded-2xl border bg-card">
    <div class="flex flex-wrap gap-3 border-b p-4">
      <button
        v-for="filter in taskFilters"
        :key="filter"
        type="button"
        class="rounded-xl px-4 py-2 text-sm font-medium"
        :class="
          selectedStatus === filter
            ? 'bg-muted text-foreground'
            : 'text-muted-foreground hover:text-foreground'
        "
        @click="selectedStatus = filter"
      >
        {{ filter }}
      </button>
    </div>
    <div class="space-y-4 p-6">
      <div
        v-for="task in filteredTasks"
        :key="task.id"
        class="rounded-2xl border bg-background p-5 shadow-sm transition hover:shadow-md"
      >
        <div class="flex items-start justify-between gap-6">
          <div>
            <h3 class="font-semibold text-foreground">
              {{ task.title }}
            </h3>

            <span
              class="mt-2 inline-flex rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {{ task.type }}
            </span>
          </div>

          <StatusBadge :status="task.status" />
        </div>

        <div class="mt-5 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <div class="flex items-center gap-2">
            <User class="h-4 w-4" />
            <span>{{ task.assignedTo }}</span>
          </div>

          <div class="flex items-center gap-2">
            <Calendar class="h-4 w-4" />
            <span>Due {{ task.dueDate }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
