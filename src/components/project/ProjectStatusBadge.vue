<script setup lang="ts">
import type { ProjectStatus } from '@/types/dashboard'
import { projectStatusConfig } from '@/config/projectStatusConfig'

defineProps<{
  status: ProjectStatus
}>()
</script>

<template>
  <span
    :class="[
      'rounded-full px-3 py-1 text-sm font-medium',
      projectStatusConfig[status].textColor,
      projectStatusConfig[status].bgColor,
    ]"
  >
    {{ status }}
  </span>
</template>
