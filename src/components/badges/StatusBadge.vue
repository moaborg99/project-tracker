<script setup lang="ts">
import { statusConfig } from '@/config/statusConfig'
import type { Status } from '@/types/status'

defineProps<{
  status: Status
}>()
</script>

<template>
  <span
    :class="[
      'rounded-full px-3 py-1 text-sm font-medium',
      statusConfig[status].textColor,
      statusConfig[status].bgColor,
    ]"
  >
    {{ status }}
  </span>
</template>
