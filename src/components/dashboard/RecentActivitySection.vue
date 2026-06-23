<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type Activity = {
  user: string
  action: string
  target: string
  createdAt: string
  type: 'completed' | 'commented' | 'created' | 'updated' | 'joined'
}

defineProps<{
  activities: Activity[]
}>()

const getInitials = (fullName: string) => {
  return fullName
    .trim()
    .split(' ')
    .filter(Boolean)
    .map((name) => name[0])
    .join('')
    .toUpperCase()
}
</script>
<template>
  <Card class="mt-6">
    <CardHeader class="flex justify-between border-b">
      <CardTitle class="text-lg mb-2">Recent Activity</CardTitle>
    </CardHeader>

    <CardContent>
      <ul>
        <li
          v-for="activity in activities"
          :key="`${activity.user}-${activity.target}`"
          class="border-b border-slate-200 py-5 last:border-b-0"
        >
          <div class="flex gap-4">
            <div>
              <span
                class="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white"
              >
                {{ getInitials(activity.user) }}
              </span>
            </div>
            <div>
              <h3>
                <span class="font-semibold">
                  {{ activity.user }}
                </span>

                {{ activity.action }} "{{ activity.target }}"
              </h3>

              <p class="mt-1 text-sm text-slate-500">
                {{ activity.createdAt }}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </CardContent>
  </Card>
</template>
