<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { createProject } from '@/services/projectService'
import type { ProjectInput } from '@/types/project'
import ProjectForm from '@/components/project/ProjectForm.vue'

const router = useRouter()

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

const isSubmitting = ref(false)
const error = ref<string | null>(null)

const handleSubmit = async (formData: ProjectInput) => {
  try {
    isSubmitting.value = true
    error.value = null

    const createdProject = await createProject(formData)

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
    <ProjectForm
      :form="form"
      :is-submitting="isSubmitting"
      :error="error"
      submit-label="Create Project"
      @submit="handleSubmit"
    />
  </div>
</template>
