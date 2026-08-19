import type { NextConfig } from "next";

/**
 * Destination for the /api/:path* rewrite.
 * Dynamically resolves from environment variables with trailing slash sanitization.
 */
function getBackendRewriteDestination(): string {
  const rawUrl =
    process.env.INTERNAL_API_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:3000/api";

  return rawUrl.trim().replace(/\/+$/, "");
}

/**
 * Parses allowed development origins from ALLOWED_DEV_ORIGINS environment variable
 * and provides safe wildcards for local dev networks instead of hardcoded IPs.
 */
function getAllowedDevOrigins(): string[] {
  const envOrigins = process.env.ALLOWED_DEV_ORIGINS
    ? process.env.ALLOWED_DEV_ORIGINS.split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    : [];

  const defaultOrigins = [
    "localhost:*",
    "127.0.0.1:*",
    "192.168.*.*",
    "10.*.*.*",
    "172.16.*.*",
    "*.local",
  ];

  return Array.from(new Set([...envOrigins, ...defaultOrigins]));
}

const nextConfig: NextConfig = {
  allowedDevOrigins: getAllowedDevOrigins(),
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },
  async rewrites() {
    const backendUrl = getBackendRewriteDestination();
    return [
      {
        source: "/api/:path*",
        destination: `${backendUrl}/:path*`,
      },
    ];
  },
};

export default nextConfig;

