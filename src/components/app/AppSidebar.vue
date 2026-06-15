<template>
  <aside class="min-h-screen w-64 border-r bg-white p-6">
    <div class="mb-6">
      <p class="text-xl font-semibold">Project Tracker</p>
    </div>

    <nav class="flex flex-col gap-2">
      <RouterLink to="/">Dashboard</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
      <RouterLink to="/tasks">Tasks</RouterLink>
    </nav>
  </aside>
</template>
