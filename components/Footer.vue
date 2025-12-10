<template>
  <footer class="bg-dark py-8 border-t border-secondary border-opacity-20">
    <div class="container mx-auto px-4 sm:px-6">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <p class="text-text-light text-center md:text-left">
            {{ t('footer.copyright') }}
          </p>
        </div>

        <!-- <div class="flex space-x-6">
          <a
            href="#"
            class="text-text-light hover:text-highlight transition-colors"
          >
            {{ t('footer.privacy') }}
          </a>
          <a
            href="#"
            class="text-text-light hover:text-highlight transition-colors"
          >
            {{ t('footer.terms') }}
          </a>
        </div> -->
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t } = useLanguage()
</script>