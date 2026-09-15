import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder photography from Unsplash until the real shoots arrive.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/photo-**",
      },
    ],
  },
};

export default nextConfig;
