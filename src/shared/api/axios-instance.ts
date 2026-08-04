import axios from "axios";

/**
 * Base HTTP client for calling the backend API.
 *
 * When `NEXT_PUBLIC_API_URL` is set, requests go to the external backend.
 * When empty, services fall back to mock data (see each service file).
 *
 * Usage: check `API_URL` in each service — if truthy, use `apiClient`;
 * otherwise return static mock data directly.
 */
export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

/** True when a backend API URL is configured. */
export const IS_API_CONNECTED = !!process.env.NEXT_PUBLIC_API_URL;
