import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { RouteTransition } from '@/components/layout/RouteTransition'
import { ThemeProvider, ThemeScript } from '@/components/theme/ThemeProvider'
import { absoluteUrl, siteConfig, withBasePath } from '@/lib/site'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.name, url: siteConfig.github }],
  creator: siteConfig.name,
  keywords: [
    'Software Engineer',
    'Backend Developer',
    'Java',
    'Spring Boot',
    'Node.js',
    'PostgreSQL',
    'Redis',
    'Docker',
    'Microsserviços',
    'Arquitetura de Software',
  ],
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': absoluteUrl('/rss.xml'),
    },
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: 'Henrique Marino Portfolio',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: 'Henrique Marino - Software Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
  icons: {
    icon: withBasePath('/favicon.svg'),
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a1f1a',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    alternateName: siteConfig.handle,
    jobTitle: 'Software Engineer',
    description: siteConfig.description,
    url: siteConfig.url,
    image: absoluteUrl('/img/profile-picture.jpeg'),
    sameAs: [siteConfig.github, siteConfig.linkedin],
    knowsAbout: ['Java', 'Spring Boot', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Microservices', 'Software Architecture'],
  }

  return (
    <html lang="pt-BR" className={`${jetbrainsMono.variable} dark`} suppressHydrationWarning>
      <head>
        <ThemeScript />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen pt-[68px]">{children}</main>
          <Footer />
          <RouteTransition />
        </ThemeProvider>
      </body>
    </html>
  )
}
