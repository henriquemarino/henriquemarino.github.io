// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  // Configuração para GitHub Pages
  ssr: false,

  app: {
    // Se seu repo for username.github.io, deixe baseURL como '/'
    // Se for username.github.io/repo-name, descomente e configure:
    // baseURL: '/portfolio/',

    head: {
      title: 'Henrique Marino - Software Engineer',
      htmlAttrs: {
        lang: 'pt-br'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Portfólio de Henrique Marino - Engenheiro de Software especializado em Java, Node.js, AWS, microservices e arquitetura escalável'
        },
        {
          name: 'keywords',
          content: 'software engineer, backend, java, nodejs, typescript, aws, docker, microservices, arquitetura, desenvolvimento'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
        }
      ]
    }
  },

  googleFonts: {
    families: {
      'JetBrains Mono': [300, 400, 500]
    },
    display: 'swap'
  },

  css: [
    '~/assets/css/main.css'
  ]
})