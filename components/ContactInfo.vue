<template>
  <div class="lg:w-1/2">
    <h3 class="text-2xl font-semibold mb-6">
      {{ t('contact.letsTalk') }}
    </h3>
    <p class="text-text-light mb-8">
      {{ t('contact.description') }}
    </p>

    <div class="space-y-6">
      <div class="flex items-start">
        <div class="w-12 h-12 rounded-lg bg-light flex items-center justify-center mr-4 mt-1">
          <i class="fas fa-envelope text-highlight text-xl"></i>
        </div>
        <div>
          <h4 class="font-semibold text-lg">{{ t('contact.email') }}</h4>
          <p class="text-text-light">henriquedotcpp@gmail.com</p>
        </div>
      </div>

      <div class="flex items-start">
        <div class="w-12 h-12 rounded-lg bg-light flex items-center justify-center mr-4 mt-1">
          <i class="fas fa-phone text-highlight text-xl"></i>
        </div>
        <div>
          <h4 class="font-semibold text-lg">{{ t('contact.phone') }}</h4>
          <p class="text-text-light">+55 (11) 91306-4646</p>
        </div>
      </div>

      <div class="flex items-start">
        <div class="w-12 h-12 rounded-lg bg-light flex items-center justify-center mr-4 mt-1">
          <i class="fas fa-map-marker-alt text-highlight text-xl"></i>
        </div>
        <div>
          <h4 class="font-semibold text-lg">{{ t('contact.location') }}</h4>
          <p class="text-text-light">São Paulo, Brasil</p>
        </div>
      </div>
    </div>

    <div class="flex space-x-4 mt-8">
      <a
        href="https://github.com/henriquecpp"
        target="_blank"
        class="w-10 h-10 rounded-full bg-light flex items-center justify-center hover:bg-secondary transition-colors"
        aria-label="GitHub"
      >
        <i class="fab fa-github text-text-light"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/henrique-cpp"
        target="_blank"
        class="w-10 h-10 rounded-full bg-light flex items-center justify-center hover:bg-secondary transition-colors"
        aria-label="LinkedIn"
      >
        <i class="fab fa-linkedin-in text-text-light"></i>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useLanguage()
</script>