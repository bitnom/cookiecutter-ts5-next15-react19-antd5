import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['@ant-design'],
  webpack(config) {
    return config;
  }
};

export default nextConfig;
