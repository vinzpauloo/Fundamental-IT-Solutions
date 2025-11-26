import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "readdy.ai",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "public.readdy.ai",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
