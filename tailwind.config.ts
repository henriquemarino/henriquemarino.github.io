import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: '#0a1f1a',
        secondary: '#1a4d3e',
        accent: '#2d8c65',
        highlight: '#4cda9a',
        light: '#132a23',
        dark: '#051410',
        text: '#e0f0ea',
        'text-light': '#a0c0b0',
        'code-bg': '#14231e'
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif']
      }
    }
  }
}