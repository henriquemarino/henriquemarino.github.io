<template>
  <section id="projetos" class="bg-dark py-16 sm:py-24">
    <div class="container mx-auto px-4 sm:px-6">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-12 sm:mb-16">
          <h2 class="section-title text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            {{ t('projects.title') }}
          </h2>
          <p class="text-text-light max-w-2xl mx-auto text-sm sm:text-base">
            {{ t('projects.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <ProjectCard
            v-for="project in projects"
            :key="project.id"
            :project="project"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useLanguage()
const { projects } = useProjects()
</script>