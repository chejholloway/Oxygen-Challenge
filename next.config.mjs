import million from 'million/compiler'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: 'export',
  distDir: 'dist',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'air-prod.imgix.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

million.next(nextConfig)
