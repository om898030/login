/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gymove.dexignzone.com",
      },
      
      
    ],
  },
};

module.exports = nextConfig;
