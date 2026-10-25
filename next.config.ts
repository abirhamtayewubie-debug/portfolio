import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // WebP only: AVIF at these settings smooths away fine texture (stone, glazing, foliage).
    formats: ["image/webp"],
    qualities: [75, 80, 82, 90],
    deviceSizes: [640, 828, 1080, 1280, 1600, 1920, 2400],
  },
};

export default nextConfig;
