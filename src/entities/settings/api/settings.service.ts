import { apiClient } from "@/shared/api/axios-instance";
import type { ApiSuccessBody } from "@/shared/api/response";
import type { SettingsResponse } from "../model/types";

const DEFAULT_SETTINGS: SettingsResponse = {
  settings: {
    website_name: "Desa Pringgodani",
    logo_url: "/images/logo-desa.png",
    favicon_url: "/favicon.ico",
    contact_email: "info@pringgodani.desa.id",
    contact_phone: "081234567890",
    address: "Jl. Raya Desa Pringgodani No. 1, Kec. Bantur, Kabupaten Malang",
    // Empty, not guessed — the village's real accounts must come from the
    // backend/admin settings. Never invent official social media URLs (the
    // Footer widget hides each icon when its URL is empty, rather than
    // linking to a made-up profile).
    social_facebook: "",
    social_instagram: "",
    social_youtube: "",
    social_tiktok: "",
    jumlah_dusun: 4,
  },
};

/**
 * SettingsService — public, read-only site settings (contact info, social
 * links, maintenance mode, etc.), used by widgets like the Footer that
 * appear on every page.
 */
export const SettingsService = {
  async getAll(): Promise<SettingsResponse> {
    try {
      const { data } =
        await apiClient.get<ApiSuccessBody<SettingsResponse>>(
          "/public/settings",
        );
      if (data?.data) return data.data;
    } catch (err) {
      console.error("Gagal memuat pengaturan website dari API:", err);
    }
    return DEFAULT_SETTINGS;
  },
};
