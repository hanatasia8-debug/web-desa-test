import { apiClient } from "@/shared/api/axios-instance";
import type { ApiSuccessBody } from "@/shared/api/response";
import type { SettingsResponse } from "../model/types";

/**
 * SettingsService — public, read-only site settings (contact info, social
 * links, maintenance mode, etc.), used by widgets like the Footer that
 * appear on every page. Admin write access is a separate concern
 * (`/api/admin/settings`, built in Tahap 5).
 */
export const SettingsService = {
  async getAll(): Promise<SettingsResponse> {
    const { data } =
      await apiClient.get<ApiSuccessBody<SettingsResponse>>("/settings");
    return data.data;
  },
};
