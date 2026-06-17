<script setup lang="ts">
import { useRoute } from 'vue-router'
import { Menu } from '@lucide/vue'

const route = useRoute()

const emit = defineEmits<{
  openSidebar: []
}>()
</script>

<template>
  <header class="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
    <div class="flex items-center gap-3">
      <button
        type="button"
        class="rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 lg:hidden"
        aria-label="Open sidebar"
        @click="emit('openSidebar')"
      >
        <Menu class="h-5 w-5" />
      </button>

      <h1 class="text-lg font-semibold">{{ route.meta.title }}</h1>
    </div>

    <div>
      <!-- actions later -->
    </div>
  </header>
</template>
