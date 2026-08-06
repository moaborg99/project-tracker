<script setup lang="ts">
import { computed } from 'vue'
import { getInitials } from '@/utils/getInitials'

const props = defineProps<{
  name: string
  size?: 'sm' | 'md'
}>()

const avatarClasses = computed(() => {
  return props.size === 'sm' ? 'h-8 w-8 text-[10px]' : 'h-10 w-10 text-xs'
})
</script>
<template>
  <span
    :class="[
      'flex shrink-0 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white',
      avatarClasses,
    ]"
  >
    {{ getInitials(name) }}
  </span>
</template>
