<template>
  <div
    id="mobileMenu"
    :class="{ active: isOpen }"
  >
    <button
      id="closeMobileMenu"
      class="absolute top-6 right-6 text-3xl text-highlight"
      @click="closeMenu"
      aria-label="Fechar menu"
    >
      <i class="fas fa-times"></i>
    </button>

    <nav class="flex flex-col items-center space-y-8">
      <a
        href="#sobre"
        class="text-2xl nav-link text-text-light hover:text-highlight transition-colors"
        @click.prevent="handleClick('#sobre')"
      >
        {{ t('nav.about') }}
      </a>
      <a
        href="#habilidades"
        class="text-2xl nav-link text-text-light hover:text-highlight transition-colors"
        @click.prevent="handleClick('#habilidades')"
      >
        {{ t('nav.skills') }}
      </a>
      <a
        href="#projetos"
        class="text-2xl nav-link text-text-light hover:text-highlight transition-colors"
        @click.prevent="handleClick('#projetos')"
      >
        {{ t('nav.projects') }}
      </a>
      <a
        href="#contato"
        class="text-2xl nav-link text-text-light hover:text-highlight transition-colors"
        @click.prevent="handleClick('#contato')"
      >
        {{ t('nav.contact') }}
      </a>
    </nav>
  </div>
</template>

<script setup lang="ts">
const { t } = useLanguage()
const { isOpen, closeMenu } = useMobileMenu()
const { scrollToSection } = useScroll()

const handleClick = (sectionId: string) => {
  scrollToSection(sectionId)
  closeMenu()
}
</script>