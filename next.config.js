/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
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
