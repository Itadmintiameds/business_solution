import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // qualities used by <Image quality={...}> across the site (required from Next.js 16)
    qualities: [75, 85, 90],
  },
};

export default nextConfig;
