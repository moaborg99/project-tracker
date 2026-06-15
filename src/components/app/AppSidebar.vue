<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <aside>
    <nav>
      <RouterLink to="/">Dashboard</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
      <RouterLink to="/tasks">Tasks</RouterLink>
    </nav>
  </aside>
</template>
