import axios from "axios";

/**
 * Base HTTP client for calling the backend API.
 *
 * - Client-side (Browser): NEXT_PUBLIC_API_URL -> http://localhost:3000/api
 * - Server-side (SSR in Docker): INTERNAL_API_URL -> http://backend:3000/api
 */
const defaultApiUrl = "http://localhost:3000/api";

const isServer = typeof window === "undefined";
const baseURL = isServer
  ? process.env.INTERNAL_API_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    defaultApiUrl
  : process.env.NEXT_PUBLIC_API_URL || defaultApiUrl;

export const apiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

/** Zero Trust Architecture: Frontend strictly connects to backend REST API. */
export const IS_API_CONNECTED = true;
