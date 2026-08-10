import type { NextConfig } from "next";

/**
 * Destination for the /api/:path* rewrite below (used by client-side/browser
 * requests via `apiClient`'s relative "/api" base URL — see
 * src/shared/api/axios-instance.ts).
 *
 * BUG FIX: this used to be hardcoded to "http://localhost:3000/api/:path*".
 * That only works when the Next.js server and the backend are on the same
 * host (plain local dev). In Docker/production, the backend runs in a
 * separate container — "localhost" from inside the Next.js container refers
 * to the Next.js container itself, not the backend, so every client-side API
 * call would fail to reach the backend. Falls back to the same default only
 * for local dev without Docker.
 */
const REWRITE_BACKEND_URL =
  process.env.INTERNAL_API_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:3000/api";

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
        destination: `${REWRITE_BACKEND_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
