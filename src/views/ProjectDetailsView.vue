<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const projectId = route.params.id
</script>

<template>
  <main>
    <h1 class="text-3xl font-bold">Project {{ projectId }}</h1>
  </main>
</template>
