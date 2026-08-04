import axios from "axios";

/**
 * Base HTTP client for all Service Layer classes (BeritaService, UmkmService, dst).
 * Page/component code must never call axios directly — always go through a
 * Service in `entities/*\/api` or `features/*\/api`, per the mandatory
 * Page → Service → API → Database flow.
 *
 * In the browser a relative `/api` base is enough. On the server the URL must
 * be absolute, and the real origin is only known at request time — a hardcoded
 * `http://localhost:3000` silently breaks whenever the app runs on another
 * port or behind a real domain, so the origin is resolved per request from the
 * incoming `Host` header instead (override with `INTERNAL_API_BASE_URL` if the
 * server should reach itself through a different internal address).
 */
export const apiClient = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

async function resolveServerBaseUrl(): Promise<string> {
  const override = process.env.INTERNAL_API_BASE_URL;
  if (override) return override;

  // Imported lazily: `next/headers` is server-only, and this module is shared
  // with the browser bundle.
  const { headers } = await import("next/headers");
  const requestHeaders = await headers();

  const host =
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");

  if (!host) {
    throw new Error(
      "Tidak bisa menentukan origin server: header Host/X-Forwarded-Host tidak ada. Set INTERNAL_API_BASE_URL secara eksplisit.",
    );
  }

  const isLocal = /^(localhost|127\.0\.0\.1|\[::1\])(:|$)/.test(host);
  const protocol =
    requestHeaders.get("x-forwarded-proto") ?? (isLocal ? "http" : "https");

  return `${protocol}://${host}/api`;
}

apiClient.interceptors.request.use(async (config) => {
  if (typeof window === "undefined") {
    config.baseURL = await resolveServerBaseUrl();
  }
  return config;
});
