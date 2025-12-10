<template>
  <div class="bg-light rounded-xl overflow-hidden border border-secondary border-opacity-30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
    <div class="h-48 bg-gradient-to-br from-secondary to-dark flex items-center justify-center">
      <span class="text-white text-xl font-semibold">
        {{ t(project.titleKey) }}
      </span>
    </div>

    <div class="p-6">
      <h3 class="text-xl font-semibold mb-3">
        {{ t(project.nameKey) }}
      </h3>
      <p class="text-text-light mb-4">
        {{ t(project.descriptionKey) }}
      </p>

      <div class="flex flex-wrap gap-2">
        <span
          v-for="(tech, index) in project.technologies"
          :key="index"
          class="px-3 py-1 bg-secondary text-text rounded-full text-sm"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/composables/useProjects'

const { t } = useLanguage()

defineProps<{
  project: Project
}>()
</script>