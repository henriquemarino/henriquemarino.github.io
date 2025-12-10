<template>
  <nav class="hidden md:flex space-x-8">
    <a
      href="#sobre"
      class="nav-link text-text-light hover:text-text transition-colors"
      @click.prevent="handleClick('#sobre')"
    >
      {{ t('nav.about') }}
    </a>
    <a
      href="#habilidades"
      class="nav-link text-text-light hover:text-text transition-colors"
      @click.prevent="handleClick('#habilidades')"
    >
      {{ t('nav.skills') }}
    </a>
    <a
      href="#projetos"
      class="nav-link text-text-light hover:text-text transition-colors"
      @click.prevent="handleClick('#projetos')"
    >
      {{ t('nav.projects') }}
    </a>
    <a
      href="#contato"
      class="nav-link text-text-light hover:text-text transition-colors"
      @click.prevent="handleClick('#contato')"
    >
      {{ t('nav.contact') }}
    </a>
  </nav>
</template>

<script setup lang="ts">
const { t } = useLanguage()
const { scrollToSection } = useScroll()

const handleClick = (sectionId: string) => {
  scrollToSection(sectionId)
}
</script>