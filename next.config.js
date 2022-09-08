/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'X-XSS-Protection', value: '1; mode=block' }
]

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      { source: '/:path*', headers: securityHeaders }
    ]
  }
}

module.exports = nextConfig
