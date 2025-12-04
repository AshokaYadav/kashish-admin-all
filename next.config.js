/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: 'export',
  // distDir: 'dist',
  transpilePackages: ['@react-pdf/renderer'],
  // If you have experimental features, add this:
  experimental: {
    // Your existing experimental config
    esmExternals: 'loose', // This helps with ESM modules
  },
}

module.exports = nextConfig
