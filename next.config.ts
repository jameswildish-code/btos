import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "*.sanity.io" },
    ],
  },
  async redirects() {
    return [
      { source: "/", destination: "/public-release", permanent: false },
    ];
  },
};

export default nextConfig;
