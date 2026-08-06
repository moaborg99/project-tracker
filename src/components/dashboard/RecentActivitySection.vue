<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import AppAvatar from '@/components/avatars/AppAvatar.vue'
import type { Activity } from '@/types/activity'

defineProps<{
  activities: Activity[]
}>()
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
            <AppAvatar :name="activity.user" />
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
