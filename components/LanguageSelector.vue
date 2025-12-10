<template>
  <div class="language-selector">
    <button
      class="language-button"
      @click="toggleDropdown"
      aria-label="Selecionar idioma"
    >
      <i class="fas fa-globe"></i>
      <span>{{ currentLanguage.toUpperCase() }}</span>
      <i class="fas fa-chevron-down text-xs"></i>
    </button>

    <div
      class="language-dropdown"
      :class="{ show: isDropdownOpen }"
    >
      <div
        class="language-option"
        :class="{ active: currentLanguage === 'pt' }"
        @click="changeLanguage('pt')"
      >
        Português
      </div>
      <div
        class="language-option"
        :class="{ active: currentLanguage === 'en' }"
        @click="changeLanguage('en')"
      >
        English
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { currentLanguage, setLanguage } = useLanguage()
const isDropdownOpen = ref(false)

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const changeLanguage = (lang: 'pt' | 'en') => {
  setLanguage(lang)
  isDropdownOpen.value = false
}

onMounted(() => {
  if (process.client) {
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement
      if (!target.closest('.language-selector')) {
        isDropdownOpen.value = false
      }
    })
  }
})
</script>