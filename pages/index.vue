<template>
  <div>
    <Header />

    <MobileMenu />

    <BackToTop />

    <main>
      <HeroSection />

      <AboutSection />

      <SkillsSection />

      <ProjectsSection />

      <ContactSection />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useSEO } from '../composables/useSEO';

useSEO({
  title: 'Henrique Marino - Software Engineer | Backend & Cloud Specialist',
  description: 'Engenheiro de Software com mais de 3 anos de experiência em sistemas robustos e escaláveis. Especializado em backend, microservices, cloud architecture (AWS) e DevOps.',
  keywords: [
    'Software Engineer',
    'Backend Developer',
    'Cloud Architecture',
    'Microservices',
    'Node.js',
    'TypeScript',
    'AWS',
    'Java',
    'Docker',
    'Terrraform',
    'Spring Boot',
    'Node.js',
    'NestJS',
    'CI/CD',
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'DynamoDB',
    'ElasticSearch',
    'Valkey',
    'Redis',
    'Git'
  ]
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Henrique Marino',
        jobTitle: 'Software Engineer',
        description: 'Engenheiro de Software especializado em backend, cloud architecture e microservices',
        url: 'https://henriquecpp.github.io',
        image: 'https://henriquecpp.github.io/img/profile-picture.jpeg',
        sameAs: [
          'https://github.com/henriquecpp',
          'https://linkedin.com/in/henriquemarino'
        ],
        worksFor: {
          '@type': 'Organization',
          name: 'Software Development'
        },
        knowsAbout: [
          'Software Engineering',
          'Backend Development',
          'Cloud Computing',
          'Microservices Architecture',
          'Node.js',
          'TypeScript',
          'AWS',
          'Java',
          'Docker',
          'Terrraform',
          'Spring Boot',
          'Node.js',
          'NestJS',
          'CI/CD',
          'PostgreSQL',
          'MySQL',
          'MongoDB',
          'DynamoDB',
          'ElasticSearch',
          'Valkey',
          'Redis',
          'Git'
        ],
        alumniOf: {
          '@type': 'Organization',
          name: 'Educational Institution'
        }
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Henrique Marino Portfolio',
        url: 'https://henriquecpp.github.io/portfolio',
        description: 'Portfolio profissional de Henrique Marino - Software Engineer',
        author: {
          '@type': 'Person',
          name: 'Henrique Marino'
        },
        inLanguage: ['pt-BR', 'en-US']
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        dateCreated: '2025-01-01T00:00:00+00:00',
        dateModified: new Date().toISOString(),
        mainEntity: {
          '@type': 'Person',
          name: 'Henrique Marino',
          alternateName: 'Henrique Marino',
          identifier: 'henriquecpp',
          description: 'Software Engineer com foco em backend e cloud',
          image: 'https://henriquecpp.github.io/portfolio/img/profile-picture.jpeg',
          sameAs: [
            'https://github.com/henriquecpp',
            'https://linkedin.com/in/henriquemarino'
          ]
        }
      })
    }
  ]
})
</script>