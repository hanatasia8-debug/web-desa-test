import type { NextConfig } from "next";

/**
 * Destination for the /api/:path* rewrite.
 * Dynamically resolves from environment variables with protocol, quote, and trailing slash sanitization.
 * Next.js requires destination to start with '/', 'http://', or 'https://'.
 */
function getBackendRewriteDestination(): string {
  const raw =
    process.env.INTERNAL_API_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:3000/api";

  let url = raw.trim().replace(/^['"]+|['"]+$/g, "").trim();
  if (!url) return "http://localhost:3000/api";

  if (url.startsWith("/")) {
    return url.replace(/\/+$/, "");
  }

  if (url.startsWith("//")) {
    return `https:${url}`.replace(/\/+$/, "");
  }

  if (!/^https?:\/\//i.test(url)) {
    if (
      url.startsWith("localhost") ||
      url.startsWith("127.0.0.1") ||
      url.startsWith("192.168.") ||
      url.startsWith("10.") ||
      url.startsWith("172.16.")
    ) {
      url = `http://${url}`;
    } else {
      url = `https://${url}`;
    }
  }

  return url.replace(/\/+$/, "");
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

