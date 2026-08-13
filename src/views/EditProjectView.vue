<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getProjectById, updateProject } from '@/services/projectService'
import type { Project, ProjectInput } from '@/types/project'
import { RouterLink } from 'vue-router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const route = useRoute()
const router = useRouter()
const projectId = computed(() => Number(route.params.id))

const project = ref<Project | null>(null)
const isLoading = ref(true)
const isSubmitting = ref(false)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    project.value = await getProjectById(projectId.value)

    form.value = {
      name: project.value.name,
      description: project.value.description,
      status: project.value.status,
      priority: project.value.priority,
      completedTasks: project.value.completedTasks,
      totalTasks: project.value.totalTasks,
      dueDate: project.value.dueDate,
      startDate: project.value.startDate,
    }
  } catch {
    error.value = 'Could not load project'
  } finally {
    isLoading.value = false
  }
})

const form = ref<ProjectInput>({
  name: '',
  description: '',
  status: 'To Do',
  priority: 'Medium',
  completedTasks: 0,
  totalTasks: 0,
  dueDate: '',
  startDate: '',
})

const handleSubmit = async () => {
  try {
    isSubmitting.value = true
    error.value = null

    const updatedProject = await updateProject(projectId.value, form.value)

    await router.push(`/projects/${updatedProject.id}`)
  } catch {
    error.value = 'Could not update project'
  } finally {
    isSubmitting.value = false
  }
}
</script>
<template>
  <div class="mx-auto max-w-4xl px-6">
    <RouterLink
      :to="`/projects/${projectId}`"
      class="mb-8 inline-flex text-sm text-slate-500 hover:text-slate-900"
    >
      ← Back to Project
    </RouterLink>

    <p v-if="isLoading" class="text-sm text-slate-500">Loading project...</p>

    <p v-else-if="error" class="text-sm text-red-600">
      {{ error }}
    </p>

    <div v-else>
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-slate-900">Edit Project</h1>
        <p class="mt-2 text-slate-500">Update the project details.</p>
      </div>

      <form class="space-y-6" @submit.prevent="handleSubmit">
        <Card>
          <CardHeader class="border-b">
            <CardTitle>Basics</CardTitle>
            <p class="text-sm text-slate-500">Update the project name and description.</p>
          </CardHeader>

          <CardContent class="space-y-6 pt-6">
            <div>
              <label for="name" class="mb-2 block text-sm font-medium"> Project name </label>

              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full rounded-md border border-slate-200 bg-white px-3 py-2"
              />
            </div>

            <div>
              <label for="description" class="mb-2 block text-sm font-medium"> Description </label>

              <textarea
                id="description"
                v-model="form.description"
                rows="4"
                required
                class="w-full rounded-md border border-slate-200 bg-white px-3 py-2"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader class="border-b">
            <CardTitle>Details</CardTitle>
            <p class="text-sm text-slate-500">Update status, priority, and timeline.</p>
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

        <div class="flex items-center justify-between">
          <RouterLink
            :to="`/projects/${projectId}`"
            class="rounded-md border px-4 py-2 text-sm font-medium"
          >
            Cancel
          </RouterLink>

          <Button type="submit" :disabled="isSubmitting">
            {{ isSubmitting ? 'Saving...' : 'Save Changes' }}
          </Button>
        </div>
      </form>
    </div>
  </div>
</template>
