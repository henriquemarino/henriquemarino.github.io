<template>
  <header
    class="fixed w-full bg-dark bg-opacity-90 backdrop-blur-sm z-50 border-b border-secondary border-opacity-20 py-4 transition-shadow duration-300"
    :class="{ 'shadow-lg': isScrolled }"
  >
    <div class="container mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center">
        <a
          href="#"
          class="text-xl font-bold text-white"
          @click.prevent="scrollToTop"
        >
          HenriqueMarino<span class="text-highlight">.dev</span>
        </a>

        <div class="flex items-center space-x-4">
          <Navigation />

          <div class="hidden md:block">
            <LanguageSelector />
          </div>

          <button
            id="mobileMenuButton"
            class="md:hidden text-text-light text-xl"
            @click="toggleMenu"
            aria-label="Abrir menu"
          >
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const { isScrolled, scrollToTop } = useScroll()
const { toggleMenu } = useMobileMenu()
</script>