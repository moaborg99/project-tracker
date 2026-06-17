<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { X } from '@lucide/vue'

const navItems = [
  { name: 'Dashboard', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Tasks', path: '/tasks' },
]

const emit = defineEmits<{
  closeSidebar: []
}>()
</script>

<template>
  <aside class="min-h-screen w-64 border-r border-slate-200 bg-white">
    <div class="flex h-16 items-center justify-between border-b border-slate-200 px-6 mb-6">
      <span class="text-lg font-semibold">Project Tracker</span>

      <button
        type="button"
        class="rounded-md p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
        @click="emit('closeSidebar')"
      >
        <X class="h-5 w-5" />
      </button>
    </div>

    <nav class="flex flex-col py-2 px-6">
      <ul class="space-y-1">
        <li v-for="navItem in navItems" :key="navItem.path">
          <RouterLink
            :to="navItem.path"
            class="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
            active-class="bg-slate-200 text-slate-900"
          >
            {{ navItem.name }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>
