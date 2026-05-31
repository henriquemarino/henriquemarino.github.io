import createMDX from '@next/mdx'
import { DEFAULT_BASE_PATH } from './config/site.mjs'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? DEFAULT_BASE_PATH

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  reactStrictMode: true,
}

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
})

export default withMDX(nextConfig)
