<template>
  <div>
    <!-- Header -->
    <Header />

    <!-- Mobile Menu -->
    <MobileMenu />

    <!-- Back to Top Button -->
    <BackToTop />

    <!-- Content -->
    <main>
      <!-- Hero Section -->
      <HeroSection />

      <!-- About Section -->
      <AboutSection />

      <!-- Skills Section -->
      <SkillsSection />

      <!-- Projects Section -->
      <ProjectsSection />

      <!-- Contact Section -->
      <ContactSection />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
// Meta tags e configurações da página
useHead({
  title: 'Henrique Marino - Software Engineer',
  meta: [
    {
      name: 'description',
      content: 'Portfólio de Henrique Marino - Engenheiro de Software especializado em Java, Node.js, AWS, microservices e arquitetura escalável'
    }
  ]
})
</script>