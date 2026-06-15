<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppSidebar from '@/components/app/AppSidebar.vue'
import AppTopbar from '@/components/app/AppTopbar.vue'
</script>

<template>
  <div>
    <AppSidebar />

    <div>
      <AppTopbar />

      <RouterView />
    </div>
  </div>
</template>
