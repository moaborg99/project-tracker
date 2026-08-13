<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getProjectById, updateProject } from '@/services/projectService'
import type { Project, ProjectInput } from '@/types/project'
import { RouterLink } from 'vue-router'
import ProjectForm from '@/components/project/ProjectForm.vue'

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

const handleSubmit = async (formData: ProjectInput) => {
  try {
    isSubmitting.value = true
    error.value = null

    const updatedProject = await updateProject(projectId.value, formData)

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

      <ProjectForm
        :form="form"
        :is-submitting="isSubmitting"
        :error="error"
        submit-label="Save Changes"
        @submit="handleSubmit"
      />
    </div>
  </div>
</template>
