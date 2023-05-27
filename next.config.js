const dotenv = require("dotenv");
dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

const withVideos = require("next-videos");

module.exports = withVideos({
  // assetPrefix: process.env.NODE_ENV === 'production' ? process.env.ASSET_PREFIX : '',

  webpack(config, options) {
    return config;
  },
});
