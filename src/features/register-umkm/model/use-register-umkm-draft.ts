"use client";

import { useEffect, useState, useCallback } from "react";
import type { RegisterUmkmDTO } from "@/entities/umkm/model/register-umkm.schema";

const DRAFT_KEY = "register_umkm_draft_v1";

export const DEFAULT_UMKM_FORM_DATA: Partial<RegisterUmkmDTO> = {
  name: "",
  ownerName: "",
  umkmCategoryId: "",
  newCategoryName: "",
  villagePotentialId: "",
  description: "",
  phone: "",
  email: "",
  coverUrl: "",
  address: "",
  latitude: -8.2811,
  longitude: 112.5664,
  googlePlaceId: "",
  since: new Date().getFullYear(),
  openDay: "Senin - Sabtu",
  startTime: "08:00",
  endTime: "17:00",
  galleries: [],
  products: [],
};

export function useRegisterUmkmDraft() {
  const [formData, setFormData] = useState<Partial<RegisterUmkmDTO>>(() => {
    if (typeof window === "undefined") return DEFAULT_UMKM_FORM_DATA;
    try {
      const saved = localStorage.getItem(DRAFT_KEY);
      if (saved) {
        return { ...DEFAULT_UMKM_FORM_DATA, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.error("Gagal membaca draf UMKM dari localStorage:", e);
    }
    return DEFAULT_UMKM_FORM_DATA;
  });

  // Save to localStorage whenever formData changes (with safe quota fallback)
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify(formData));
    } catch (e) {
      console.warn(
        "Gagal menyimpan draf UMKM ke localStorage (kuota penuh), menerapkan simpanan teks:",
        e,
      );
      try {
        const safeData = {
          ...formData,
          coverUrl: formData.coverUrl?.startsWith("data:")
            ? ""
            : formData.coverUrl,
          galleries: formData.galleries?.map((g) =>
            g.startsWith("data:") ? "" : g,
          ),
          products: formData.products?.map((p) => ({
            ...p,
            productPhoto: p.productPhoto?.startsWith("data:")
              ? ""
              : p.productPhoto,
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
      console.error("Gagal menghapus draf UMKM:", e);
    }
    setFormData(DEFAULT_UMKM_FORM_DATA);
  }, []);

  return {
    formData,
    setFormData,
    clearDraft,
  };
}
