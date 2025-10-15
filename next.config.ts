import type { NextConfig } from "next";

// next.config.js
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export', // important for GitHub Pages
  basePath: isProd ? '' : '',
  assetPrefix: isProd ? '' : '',
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },

  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
}

export default nextConfig;
