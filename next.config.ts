import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '', // Leave empty for default port (443 for https)
        pathname: '/**', // Allow any path on this host
      },
      // You can add other hostnames here if needed later
    ],
  },
};

export default nextConfig;
