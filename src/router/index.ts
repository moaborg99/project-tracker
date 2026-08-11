import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
      meta: {
        title: 'Dashboard',
      },
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/ProjectsView.vue'),
    },
    {
      path: '/projects/new',
      name: 'new-project',
      component: () => import('@/views/NewProjectView.vue'),
    },
    {
      path: '/projects/:id',
      name: 'project-details',
      component: () => import('@/views/ProjectDetailsView.vue'),
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('../views/TasksView.vue'),
      meta: {
        title: 'Tasks',
      },
    },
  ],
})

router.afterEach((to) => {
  document.title = `${to.meta.title}`
})

export default router
