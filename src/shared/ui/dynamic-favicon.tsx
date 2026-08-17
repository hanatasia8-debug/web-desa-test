"use client";

import { useEffect, useState } from "react";
import {
  getStoredAdminSettings,
  subscribeStoredAdminSettings,
} from "@/entities/admin/api/admin-settings.service";
import { SettingsService } from "@/entities/settings/api/settings.service";

export function DynamicFavicon() {
  const [faviconUrl, setFaviconUrl] = useState<string>("/favicon.ico");

  useEffect(() => {
    // 1. Initial read from local cache
    const stored = getStoredAdminSettings();
    if (stored?.favicon_url) {
      setFaviconUrl(stored.favicon_url);
    }

    // 2. Fetch public settings to ensure sync with server
    SettingsService.getAll()
      .then((res) => {
        const s = res?.settings as Record<string, any> | undefined;
        const url = s?.favicon_url || s?.faviconUrl;
        if (url && typeof url === "string") {
          setFaviconUrl(url);
        }
      })
      .catch((err) => {
        console.warn("Gagal sinkronisasi favicon dari public settings:", err);
      });

    // 3. Subscribe to changes (updates when admin changes settings)
    const unsubscribe = subscribeStoredAdminSettings(() => {
      const latest = getStoredAdminSettings();
      if (latest?.favicon_url) {
        setFaviconUrl(latest.favicon_url);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // Update favicon in document.head
  useEffect(() => {
    if (!faviconUrl || typeof document === "undefined") return;

    // Helper function to update or create link tag
    const updateLink = (rel: string) => {
      let link = document.querySelector<HTMLLinkElement>(`link[rel='${rel}']`);
      if (!link) {
        link = document.createElement("link");
        link.rel = rel;
        document.head.appendChild(link);
      }
      link.href = faviconUrl;
    };

    updateLink("icon");
    updateLink("shortcut icon");
    updateLink("apple-touch-icon");
  }, [faviconUrl]);

  return null;
}
