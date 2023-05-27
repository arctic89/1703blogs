/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

const withVideos = require('next-videos')

module.exports = withVideos({
  // basePath: '/main',
  assetPrefix: 'https://1703blogs.vercel.app',

  webpack(config, options) {
    return config
  }
})