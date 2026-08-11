<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { createProject } from '@/services/projectService'
import type { CreateProjectInput } from '@/types/project'

const router = useRouter()

const form = ref<CreateProjectInput>({
  name: '',
  description: '',
  status: 'To Do',
  priority: 'Medium',
  completedTasks: 0,
  totalTasks: 0,
  dueDate: '',
  startDate: '',
})

const isSubmitting = ref(false)
const error = ref<string | null>(null)

const handleSubmit = async () => {
  try {
    isSubmitting.value = true
    error.value = null

    const createdProject = await createProject(form.value)

    await router.push(`/projects/${createdProject.id}`)
  } catch {
    error.value = 'Could not create project'
  } finally {
    isSubmitting.value = false
  }
}
</script>
<template>
  <div class="mx-auto max-w-4xl px-6">
    <RouterLink to="/projects" class="mb-8 inline-flex text-sm text-slate-500 hover:text-slate-900">
      ← Back to Projects
    </RouterLink>

    <div class="mb-8">
      <h1 class="text-3xl font-bold text-slate-900">New Project</h1>
      <p class="mt-2 text-slate-500">Set up a new project for your team to collaborate on.</p>
    </div>

    <form class="space-y-6" @submit.prevent="handleSubmit">
      <Card>
        <CardHeader class="border-b">
          <CardTitle>Basics</CardTitle>
          <p class="text-sm text-slate-500">Name your project and give it a description.</p>
        </CardHeader>

        <CardContent class="space-y-6 pt-6">
          <div>
            <label for="name" class="mb-2 block text-sm font-medium"> Project name </label>

            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              placeholder="e.g. Mobile App Redesign"
              class="w-full rounded-md border border-slate-200 bg-white px-3 py-2"
            />
          </div>

          <div>
            <label for="description" class="mb-2 block text-sm font-medium"> Description </label>

            <textarea
              id="description"
              v-model="form.description"
              required
              rows="4"
              placeholder="What's this project about? What are the goals?"
              class="w-full rounded-md border border-slate-200 bg-white px-3 py-2"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader class="border-b">
          <CardTitle>Details</CardTitle>
          <p class="text-sm text-slate-500">Set the status, priority, and timeline.</p>
        </CardHeader>

        <CardContent class="grid gap-6 pt-6 md:grid-cols-2">
          <div>
            <label for="status" class="mb-2 block text-sm font-medium"> Status </label>

            <select
              id="status"
              v-model="form.status"
              class="w-full rounded-md border border-slate-200 bg-white px-3 py-2"
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="In Review">In Review</option>
              <option value="Done">Done</option>
            </select>
          </div>

          <div>
            <label for="priority" class="mb-2 block text-sm font-medium"> Priority </label>

            <select
              id="priority"
              v-model="form.priority"
              class="w-full rounded-md border border-slate-200 bg-white px-3 py-2"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div>
            <label for="startDate" class="mb-2 block text-sm font-medium"> Start date </label>

            <input
              id="startDate"
              v-model="form.startDate"
              type="date"
              required
              class="w-full rounded-md border border-slate-200 bg-white px-3 py-2"
            />
          </div>

          <div>
            <label for="dueDate" class="mb-2 block text-sm font-medium"> Due date </label>

            <input
              id="dueDate"
              v-model="form.dueDate"
              type="date"
              required
              class="w-full rounded-md border border-slate-200 bg-white px-3 py-2"
            />
          </div>

          <div class="md:col-span-2">
            <label for="totalTasks" class="mb-2 block text-sm font-medium"> Total tasks </label>

            <input
              id="totalTasks"
              v-model.number="form.totalTasks"
              type="number"
              min="0"
              required
              class="w-full rounded-md border border-slate-200 bg-white px-3 py-2"
            />
          </div>
        </CardContent>
      </Card>

      <p v-if="error" class="text-sm text-red-600">
        {{ error }}
      </p>

      <div class="flex items-center justify-end gap-4">
        <RouterLink to="/projects" class="rounded-md border px-4 py-2 text-sm font-medium">
          Cancel
        </RouterLink>

        <Button type="submit" :disabled="isSubmitting">
          {{ isSubmitting ? 'Creating...' : 'Create Project' }}
        </Button>
      </div>
    </form>
  </div>
</template>
