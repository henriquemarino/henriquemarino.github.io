// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  ssr: true,

  app: {

    baseURL: '/',
    //buildAssetsDir: 'assets',
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

  nitro: {
    preset: 'github_pages'
  },

  googleFonts: {
    families: {
      'JetBrains Mono': [300, 400, 500]
    },
    display: 'swap'
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.ts'
  }
})