/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@iweddingb-workspace/shared'],
  reactStrictMode: true,
  experimental: {
    externalDir: true,
    scrollRestoration: true,
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
