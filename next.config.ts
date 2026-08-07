import type { NextConfig } from "next";

const LP_SLUGS = [
  'custom-truck-bodies',
  'service-bodies',
  'flatbed-dump-bodies',
  'fleet-upfitting',
  'van-bodies',
  'thank-you',
];

const nextConfig: NextConfig = {
  async rewrites() {
    return LP_SLUGS.map((slug) => ({
      source: `/lp/${slug}`,
      destination: `/lp/${slug}.html`,
    }));
  },
};

export default nextConfig;
