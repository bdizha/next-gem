/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    modules: {
      // Disable hashing in class names
      localIdentName: '[local]',
      exportLocalsConvention: 'camelCase',
    },
  },
  webpack(config) {
    return config;
  },
};

module.exports = nextConfig;
