/** @type {import('next').NextConfig} */
module.exports = {
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
