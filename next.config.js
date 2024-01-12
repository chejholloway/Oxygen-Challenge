const withTwin = require('./withTwin.js')

/**
 * @type {import('next').NextConfig}
 */
module.exports = withTwin({
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
  }
})
