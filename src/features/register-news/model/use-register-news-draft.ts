"use client";

import { useEffect, useState, useCallback } from "react";
import type { RegisterNewsDTO } from "@/entities/berita/model/register-news.schema";

const DRAFT_KEY = "register_news_draft_v1";

export const DEFAULT_NEWS_FORM_DATA: Partial<RegisterNewsDTO> = {
  title: "",
  newsCategoryId: "",
  newCategoryName: "",
  newsTypeId: "STANDARD",
  authorName: "",
  phone: "",
  villagePotentialId: "",
  excerpt: "",
  coverUrl: "",
  coverCaption: "",
  blocks: [{ subHeading: "", content: "", imageUrl: "", sortOrder: 0 }],
  galleryImages: [{ imageUrl: "", imageDescription: "", sortOrder: 0 }],
};

export function useRegisterNewsDraft() {
  const [formData, setFormData] = useState<Partial<RegisterNewsDTO>>(() => {
    if (typeof window === "undefined") return DEFAULT_NEWS_FORM_DATA;
    try {
      const saved = localStorage.getItem(DRAFT_KEY);
      if (saved) {
        return { ...DEFAULT_NEWS_FORM_DATA, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.error("Gagal membaca draf berita dari localStorage:", e);
    }
    return DEFAULT_NEWS_FORM_DATA;
  });

  // Save to localStorage whenever formData changes (with safe quota fallback)
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify(formData));
    } catch (e) {
      console.warn(
        "Gagal menyimpan draf berita lengkap ke localStorage (kuota penuh), menerapkan simpanan teks:",
        e,
      );
      try {
        // Fallback: Strip huge Base64 data URLs to prevent localStorage QuotaExceededError
        const safeData = {
          ...formData,
          coverUrl: formData.coverUrl?.startsWith("data:")
            ? ""
            : formData.coverUrl,
          blocks: formData.blocks?.map((b) => ({
            ...b,
            imageUrl: b.imageUrl?.startsWith("data:") ? "" : b.imageUrl,
          })),
          galleryImages: formData.galleryImages?.map((g) => ({
            ...g,
            imageUrl: g.imageUrl?.startsWith("data:") ? "" : g.imageUrl,
          })),
        };
        localStorage.setItem(DRAFT_KEY, JSON.stringify(safeData));
      } catch (err2) {
        console.error("Gagal menyimpan draf fallback:", err2);
      }
    }
  }, [formData]);

  // Clear draft
  const clearDraft = useCallback(() => {
    try {
      if (typeof window !== "undefined") {
        localStorage.removeItem(DRAFT_KEY);
      }
    } catch (e) {
      console.error("Gagal menghapus draf berita:", e);
    }
    setFormData(DEFAULT_NEWS_FORM_DATA);
  }, []);

  return {
    formData,
    setFormData,
    clearDraft,
  };
}
