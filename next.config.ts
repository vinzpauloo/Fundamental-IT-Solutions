import type { NextConfig } from "next";
import { legacyServiceRedirects } from "./src/content/services";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  compress: true,
  poweredByHeader: false,
  async redirects() {
    return Object.entries(legacyServiceRedirects).map(
      ([legacySlug, capabilitySlug]) => ({
        source: `/services/${legacySlug}`,
        destination: `/services/${capabilitySlug}`,
        permanent: true,
      }),
    );
  },
};

export default nextConfig;
