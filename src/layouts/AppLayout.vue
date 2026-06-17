<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import AppSidebar from '@/components/app/AppSidebar.vue'
import AppTopbar from '@/components/app/AppTopbar.vue'

const isSidebarOpen = ref(false)

const openSidebar = () => {
  isSidebarOpen.value = true
}

const closeSidebar = () => {
  isSidebarOpen.value = false
}
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <div class="flex min-h-screen">
      <div class="hidden lg:block">
        <AppSidebar />
      </div>

      <div v-if="isSidebarOpen" class="fixed inset-0 z-50 lg:hidden">
        <div class="absolute inset-0 bg-black/40" @click="closeSidebar" />

        <div class="relative h-full w-64 bg-white">
          <AppSidebar @close-sidebar="closeSidebar" />
        </div>
      </div>

      <div class="flex min-h-screen flex-1 flex-col">
        <AppTopbar @open-sidebar="openSidebar" />

        <main class="flex-1 p-6">
          <RouterView />
        </main>
      </div>
    </div>
  </div>
</template>
