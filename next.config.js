/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   serverActions: true
  // },

  images: {
    domains: ['via.placeholder.com'], // ✅ Add any image domains you use
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ disables build failure on ESLint errors
  },
};

module.exports = nextConfig;

// export default nextConfig;
