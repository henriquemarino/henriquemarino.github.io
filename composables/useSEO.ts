export interface SEOConfig {
  title?: string
  description?: string
  ogImage?: string
  ogType?: string
  twitterCard?: 'summary' | 'summary_large_image'
  canonical?: string
  keywords?: string[]
}

export const useSEO = (config: SEOConfig = {}) => {
  const route = useRoute()
  const baseUrl = 'https://henriquecpp.github.io'

  const defaultTitle = 'Henrique Marino - Software Engineer'
  const defaultDescription = 'Engenheiro de Software com mais de 3 anos de experiência em sistemas robustos e escaláveis. Especializado em backend, cloud e arquitetura de software.'
  const defaultOgImage = `${baseUrl}/img/og-image.jpg`
  const defaultKeywords = [
    'Software Engineer',
    'Backend Developer',
    'Cloud Architecture',
    'Microservices',
    'DevOps',
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

  const siteTitle = config.title || defaultTitle
  const siteDescription = config.description || defaultDescription
  const ogImage = config.ogImage || defaultOgImage
  const ogType = config.ogType || 'website'
  const twitterCard = config.twitterCard || 'summary_large_image'
  const canonical = config.canonical || `${baseUrl}${route.path}`
  const keywords = config.keywords || defaultKeywords

  useHead({
    title: siteTitle,
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [

      { name: 'description', content: siteDescription },
      { name: 'keywords', content: keywords.join(', ') },
      { name: 'author', content: 'Henrique Marino' },

      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },

      { property: 'og:site_name', content: 'Henrique Marino Portfolio' },
      { property: 'og:type', content: ogType },
      { property: 'og:url', content: canonical },
      { property: 'og:title', content: siteTitle },
      { property: 'og:description', content: siteDescription },
      { property: 'og:image', content: ogImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Henrique Marino - Software Engineer Portfolio' },
      { property: 'og:locale', content: 'pt_BR' },
      { property: 'og:locale:alternate', content: 'en_US' },


      { name: 'twitter:card', content: twitterCard },
      { name: 'twitter:site', content: '@henriquemarino' },
      { name: 'twitter:creator', content: '@henriquemarino' },
      { name: 'twitter:title', content: siteTitle },
      { name: 'twitter:description', content: siteDescription },
      { name: 'twitter:image', content: ogImage },
      { name: 'twitter:image:alt', content: 'Henrique Marino - Software Engineer Portfolio' },

      { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      { name: 'googlebot', content: 'index, follow' },

      { name: 'canonical', content: canonical },

      { name: 'theme-color', content: '#0a1f1a' },
      { name: 'msapplication-TileColor', content: '#0a1f1a' },

      { name: 'geo.region', content: 'BR' },
      { name: 'geo.placename', content: 'Brasil' },

      { name: 'copyright', content: 'Henrique Marino' },
      { name: 'language', content: 'Portuguese' }
    ],
    link: [
      { rel: 'canonical', href: canonical },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
    ]
  })

  return {
    baseUrl,
    siteTitle,
    siteDescription,
    ogImage,
    canonical
  }
}