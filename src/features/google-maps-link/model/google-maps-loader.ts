/**
 * Singleton Google Maps Script Loader
 * Ensures Google Maps JavaScript SDK is loaded asynchronously only once globally,
 * avoiding duplicate script tags, memory leaks, and blocking main thread initialization.
 */

let loadPromise: Promise<typeof google.maps> | null = null;

export interface LoadGoogleMapsOptions {
  apiKey?: string;
  libraries?: string[];
}

export function loadGoogleMapsSDK(
  options: LoadGoogleMapsOptions = {},
): Promise<typeof google.maps> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Google Maps SDK cannot be loaded on SSR"));
  }

  // Already loaded globally
  if (window.google?.maps) {
    return Promise.resolve(window.google.maps);
  }

  // Already in-flight loading promise
  if (loadPromise) {
    return loadPromise;
  }

  const apiKey =
    options.apiKey || process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  if (!apiKey) {
    return Promise.reject(
      new Error("API Key Google Maps tidak ditemukan di process.env"),
    );
  }

  const libraries = options.libraries || ["marker", "places"];
  const scriptId = "google-maps-singleton-script";

  loadPromise = new Promise((resolve, reject) => {
    const existingScript = document.getElementById(scriptId);

    if (existingScript) {
      existingScript.addEventListener("load", () => {
        if (window.google?.maps) resolve(window.google.maps);
        else reject(new Error("SDK Google Maps tidak ditemukan setelah load"));
      });
      existingScript.addEventListener("error", () => {
        reject(new Error("Gagal mengunduh skrip Google Maps SDK"));
      });
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=${libraries.join(
      ",",
    )}&v=weekly&loading=async`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      if (window.google?.maps) {
        resolve(window.google.maps);
      } else {
        reject(new Error("Gagal menginisialisasi object google.maps"));
      }
    };

    script.onerror = () => {
      loadPromise = null;
      reject(new Error("Gagal mengunduh skrip Google Maps JS API"));
    };

    document.head.appendChild(script);
  });

  return loadPromise;
}
