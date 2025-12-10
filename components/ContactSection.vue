<template>
  <section id="contato" class="bg-primary py-16 sm:py-24">
    <div class="container mx-auto px-4 sm:px-6">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-12 sm:mb-16">
          <h2 class="section-title text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            {{ t('contact.title') }}
          </h2>
          <p class="text-text-light max-w-2xl mx-auto text-sm sm:text-base">
            {{ t('contact.subtitle') }}
          </p>
        </div>

        <div class="flex flex-col lg:flex-row gap-8 sm:gap-12">
          <ContactInfo />

          <ContactForm />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useLanguage()
</script>