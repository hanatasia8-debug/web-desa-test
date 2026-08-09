import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.1.16",
    "192.168.1.*",
    "192.168.*.*",
    "10.*.*.*",
    "172.16.*.*",
    "localhost:*",
    "127.0.0.1:*",
    "*.local",
  ],
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3000/api/:path*",
      },
    ];
  },
};

export default nextConfig;
