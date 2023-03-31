/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@iweddingb-workspace/shared'],
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
  experimental: {
    externalDir: true,
    scrollRestoration: true,
    forceSwcTransforms: true,
    swcMinify: true,
  },
};

module.exports = nextConfig;
