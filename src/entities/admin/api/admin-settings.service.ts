import { apiClient, IS_API_CONNECTED } from "@/shared/api/axios-instance";
import type { ApiSuccessBody } from "@/shared/api/response";
import type { AdminSettingsPayload } from "../model/admin.types";
import { MOCK_ADMIN_SETTINGS } from "@/shared/data/mock-admin";

let localSettings: AdminSettingsPayload = { ...MOCK_ADMIN_SETTINGS };

export const AdminSettingsService = {
  async getSettings(): Promise<AdminSettingsPayload> {
    if (IS_API_CONNECTED) {
      try {
        const { data } =
          await apiClient.get<ApiSuccessBody<AdminSettingsPayload>>(
            "/admin/settings",
          );
        if (data?.data) return data.data;
      } catch (err) {
        console.error("Gagal memuat pengaturan admin dari API:", err);
      }
    }
    return localSettings;
  },

  async updateSettings(
    payload: AdminSettingsPayload,
  ): Promise<{ success: boolean; message: string }> {
    if (IS_API_CONNECTED) {
      try {
        await apiClient.put("/admin/settings", payload);
        return {
          success: true,
          message: "Pengaturan desa berhasil diperbarui.",
        };
      } catch (err) {
        console.error("Gagal menyimpan pengaturan admin ke API:", err);
      }
    }

    localSettings = { ...localSettings, ...payload };
    return { success: true, message: "Pengaturan desa berhasil diperbarui." };
  },
};
