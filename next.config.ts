import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    qualities: [60, 70, 75, 80],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;