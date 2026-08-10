import axios from "axios";

/**
 * Base HTTP client for calling the backend API.
 *
 * - Client-side (Browser): Dynamically uses window.location.hostname
 *   so it works from localhost AND from other devices on the same network.
 * - Server-side (SSR / Docker): Uses INTERNAL_API_URL env var.
 */

function getBaseURL(): string {
  return (
    process.env.NEXT_PUBLIC_API_URL || "https://api-pringgodani.vercel.app/api"
  );
}

export const apiClient = axios.create({
  baseURL: getBaseURL(),
  withCredentials: true,
  timeout: 8000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor to handle unauthorized access (401)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      if (typeof window !== "undefined") {
        const SESSION_KEY = "pringgodani_admin_session";
        localStorage.removeItem(SESSION_KEY);
        document.cookie = `${SESSION_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;

        // Only redirect if we are not already on the login page
        if (!window.location.pathname.startsWith("/admin/login")) {
          window.location.href = "/admin/login";
        }
      }
    }
    return Promise.reject(error);
  },
);

/** Zero Trust Architecture: Frontend strictly connects to backend REST API. */
export const IS_API_CONNECTED = true;
