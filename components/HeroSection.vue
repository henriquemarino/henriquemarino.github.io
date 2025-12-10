<template>
  <section class="gradient-bg min-h-screen flex items-center pt-20 pb-10 md:pt-32 md:pb-20 relative overflow-hidden">
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-highlight rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 relative z-10">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-8 sm:mb-12">
          <div class="inline-flex items-center mb-4 sm:mb-6 px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-light border border-secondary border-opacity-30">
            <span class="w-2 h-2 bg-highlight rounded-full pulse-dot mr-2"></span>
            <span class="text-xs sm:text-sm text-text-light">
              {{ t('hero.available') }}
            </span>
          </div>

          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 glow">
            Henrique <span class="text-highlight">Marino</span>
          </h1>

          <p class="text-lg sm:text-xl text-text-light mb-8 sm:mb-12 max-w-2xl mx-auto">
            {{ t('hero.subtitle') }}
          </p>
        </div>

        <Terminal />

        <div class="flex flex-col sm:flex-row justify-center gap-4 mt-8 sm:mt-12">
          <a
            href="#projetos"
            class="bg-secondary hover:bg-accent text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
            @click.prevent="scrollToSection('#projetos')"
          >
            {{ t('hero.viewProjects') }}
          </a>
          <a
            href="#contato"
            class="bg-transparent border border-secondary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
            @click.prevent="scrollToSection('#contato')"
          >
            {{ t('hero.contact') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useLanguage()
const { scrollToSection } = useScroll()
</script>