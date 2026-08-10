import { apiClient } from "@/shared/api/axios-instance";
import type { ApiSuccessBody } from "@/shared/api/response";
import type { AdminUmkmItem, UmkmStatus } from "../model/admin.types";

export const AdminUmkmService = {
  async getAllUmkm(): Promise<{ items: AdminUmkmItem[]; total: number }> {
    try {
      const { data } =
        await apiClient.get<
          ApiSuccessBody<{ items: AdminUmkmItem[]; total: number }>
        >("/admin/umkm");
      if (data?.data) return data.data;
    } catch (err) {
      console.error("Gagal memuat UMKM admin dari API:", err);
    }
    return { items: [], total: 0 };
  },

  async createUmkm(payload: Partial<AdminUmkmItem>): Promise<AdminUmkmItem> {
    const { data } = await apiClient.post<ApiSuccessBody<AdminUmkmItem>>(
      "/admin/umkm",
      payload,
    );
    return data.data;
  },

  async updateUmkmStatus(
    id: string,
    status: UmkmStatus,
  ): Promise<{ success: boolean }> {
    try {
      await apiClient.patch(`/admin/umkm/${id}/status`, { status });
      return { success: true };
    } catch (err) {
      console.error(`Gagal merubah status UMKM ${id}:`, err);
      return { success: false };
    }
  },

  async deleteUmkm(id: string): Promise<{ success: boolean }> {
    try {
      await apiClient.delete(`/admin/umkm/${id}`);
      return { success: true };
    } catch (err) {
      console.error(`Gagal menghapus UMKM ${id}:`, err);
      return { success: false };
    }
  },

  async getUmkmById(id: string): Promise<AdminUmkmItem | null> {
    try {
      const { data } = await apiClient.get<ApiSuccessBody<AdminUmkmItem>>(
        `/admin/umkm/${id}`,
      );
      if (data?.data) return data.data;
    } catch (err) {
      console.error(`Gagal memuat UMKM ${id}:`, err);
    }
    return null;
  },

  async updateUmkm(
    id: string,
    payload: Partial<AdminUmkmItem>,
  ): Promise<{ success: boolean }> {
    try {
      await apiClient.put(`/admin/umkm/${id}`, payload);
      return { success: true };
    } catch (err) {
      console.error(`Gagal memperbarui UMKM ${id}:`, err);
      return { success: false };
    }
  },
};
