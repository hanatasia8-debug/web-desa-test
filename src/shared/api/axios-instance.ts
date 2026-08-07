import axios from "axios";

/**
 * Base HTTP client for calling the backend API.
 *
 * - Client-side (Browser): Dynamically uses window.location.hostname
 *   so it works from localhost AND from other devices on the same network.
 * - Server-side (SSR / Docker): Uses INTERNAL_API_URL env var.
 */

const BACKEND_PORT = 3000;

function getBaseURL(): string {
  const isServer = typeof window === "undefined";

  if (isServer) {
    // SSR: use internal Docker hostname or env var
    return (
      process.env.INTERNAL_API_URL ||
      process.env.NEXT_PUBLIC_API_URL ||
      `http://localhost:${BACKEND_PORT}/api`
    );
  }

  // Client-side: dynamically resolve from current browser hostname
  // e.g. if opened via 192.168.1.12:3001, API calls go to 192.168.1.12:3000
  const protocol = window.location.protocol; // http: or https:
  const hostname = window.location.hostname; // localhost or 192.168.x.x
  return `${protocol}//${hostname}:${BACKEND_PORT}/api`;
}

export const apiClient = axios.create({
  baseURL: getBaseURL(),
  headers: {
    "Content-Type": "application/json",
  },
});

/** Zero Trust Architecture: Frontend strictly connects to backend REST API. */
export const IS_API_CONNECTED = true;
