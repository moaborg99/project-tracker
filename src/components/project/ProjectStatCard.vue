<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  title: string
  value: string | number
  icon: Component
}>()
</script>

<template>
  <div class="rounded-2xl border bg-card p-4 shadow-sm">
    <div class="flex items-center gap-4">
      <div class="rounded-xl bg-primary/10 p-3 text-primary">
        <component :is="icon" class="h-4 w-4" />
      </div>

      <div>
        <p class="text-3xl font-semibold text-foreground">
          {{ value }}
        </p>
        <p class="text-sm text-muted-foreground">
          {{ title }}
        </p>
      </div>
    </div>
  </div>
</template>
