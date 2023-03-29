const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // i18n,
  experimental: {
    appDir: true
  },
  images: {
    domains: ['https://zukkos.s3.sa-east-1.amazonaws.com']
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  }
};

module.exports = withBundleAnalyzer(nextConfig);
