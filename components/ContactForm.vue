<template>
  <div class="lg:w-1/2">
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div>
        <label for="name" class="block text-text-light mb-2">
          {{ t('contact.form.name') }}
        </label>
        <input
          id="name"
          v-model="formData.name"
          type="text"
          class="w-full bg-light border border-secondary border-opacity-30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-highlight focus:border-transparent"
          :placeholder="t('contact.form.namePlaceholder')"
          required
        />
      </div>

      <div>
        <label for="email" class="block text-text-light mb-2">
          {{ t('contact.form.email') }}
        </label>
        <input
          id="email"
          v-model="formData.email"
          type="email"
          class="w-full bg-light border border-secondary border-opacity-30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-highlight focus:border-transparent"
          :placeholder="t('contact.form.emailPlaceholder')"
          required
        />
      </div>

      <div>
        <label for="message" class="block text-text-light mb-2">
          {{ t('contact.form.message') }}
        </label>
        <textarea
          id="message"
          v-model="formData.message"
          rows="5"
          class="w-full bg-light border border-secondary border-opacity-30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-highlight focus:border-transparent"
          :placeholder="t('contact.form.messagePlaceholder')"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        class="w-full bg-secondary hover:bg-accent text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        :disabled="isSubmitting"
      >
        {{ isSubmitting ? 'Enviando...' : t('contact.form.button') }}
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
const { t } = useLanguage()
const { formData, isSubmitting, handleSubmit } = useContactForm()
</script>