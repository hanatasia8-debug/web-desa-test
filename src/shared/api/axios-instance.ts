import axios from "axios";

/**
 * Base HTTP client for calling the backend API.
 *
 * - Client-side (Browser): Dynamically uses window.location.hostname
 *   so it works from localhost AND from other devices on the same network.
 * - Server-side (SSR / Docker): Uses INTERNAL_API_URL env var.
 */

function getBaseURL(): string {
  const isServer = typeof window === "undefined";

  if (isServer) {
    // SSR: use internal Docker hostname or env var
    return (
      process.env.INTERNAL_API_URL ||
      process.env.NEXT_PUBLIC_API_URL ||
      "http://localhost:3000/api"
    );
  }

  // Client-side (Browser): directly connect to backend API URL or localhost:3000
  return process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";
}

export const apiClient = axios.create({
  baseURL: getBaseURL(),
  withCredentials: true,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to attach Authorization Bearer token and handle FormData
apiClient.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("pringgodani_admin_access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  // When sending FormData, delete default Content-Type so browser/axios sets multipart/form-data with boundary
  if (typeof FormData !== "undefined" && config.data instanceof FormData) {
    delete config.headers["Content-Type"];
  }

  return config;
});

// Interceptor to handle unauthorized access (401)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      if (typeof window !== "undefined") {
        const SESSION_KEY = "pringgodani_admin_session";
        const TOKEN_KEY = "pringgodani_admin_access_token";
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(SESSION_KEY);
        document.cookie = `${SESSION_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;

        // Only redirect if we are inside /admin routes and not already on /admin/login
        if (
          window.location.pathname.startsWith("/admin") &&
          !window.location.pathname.startsWith("/admin/login")
        ) {
          window.location.href = "/admin/login";
        }
      }
    }
    return Promise.reject(error);
  },
);

/** Zero Trust Architecture: Frontend strictly connects to backend REST API. */
export const IS_API_CONNECTED = true;
