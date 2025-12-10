<template>
  <div
    id="backToTop"
    :class="{ show: showBackToTop }"
    @click="scrollToTop"
    title="Voltar ao topo"
  >
    <i class="fas fa-arrow-up"></i>
  </div>
</template>

<script setup lang="ts">
const { showBackToTop, scrollToTop } = useScroll()
</script>