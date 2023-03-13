/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@iweddingb-workspace/shared'],
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      ssr: false,
    },
  },
  experimental: {
    externalDir: true,
    scrollRestoration: true,
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
