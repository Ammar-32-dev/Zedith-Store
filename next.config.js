/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  allowedDevOrigins: [
    '192.168.1.202',
    'localhost',
  ],
  // Ensure we're not using the app directory incorrectly
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig 