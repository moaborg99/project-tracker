<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <header class="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
    <h1 class="text-lg font-semibold">{{ route.meta.title }}</h1>

    <div>
      <!-- actions later -->
    </div>
  </header>
</template>
