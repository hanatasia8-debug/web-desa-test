import { apiClient, IS_API_CONNECTED } from "@/shared/api/axios-instance";
import type { ApiSuccessBody } from "@/shared/api/response";
import type { AdminUmkmItem, UmkmStatus } from "../model/admin.types";
import { MOCK_ADMIN_UMKM } from "@/shared/data/mock-admin";

let localUmkm = [...MOCK_ADMIN_UMKM];

export const AdminUmkmService = {
  async getAllUmkm(): Promise<{ items: AdminUmkmItem[]; total: number }> {
    if (IS_API_CONNECTED) {
      try {
        const { data } =
          await apiClient.get<
            ApiSuccessBody<{ items: AdminUmkmItem[]; total: number }>
          >("/admin/umkm");
        if (data?.data) return data.data;
      } catch (err) {
        console.error("Gagal memuat UMKM admin dari API:", err);
      }
    }
    return { items: localUmkm, total: localUmkm.length };
  },

  async createUmkm(payload: Partial<AdminUmkmItem>): Promise<AdminUmkmItem> {
    if (IS_API_CONNECTED) {
      const { data } = await apiClient.post<ApiSuccessBody<AdminUmkmItem>>(
        "/admin/umkm",
        payload,
      );
      return data.data;
    }

    const newItem: AdminUmkmItem = {
      id: `umkm-${Date.now()}`,
      name: payload.name || "UMKM Baru",
      slug: (payload.name || "umkm-baru")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-"),
      ownerName: payload.ownerName || "Pemilik UMKM",
      categoryName: payload.categoryName || "Kuliner",
      status: payload.status || "APPROVED",
      phone: payload.phone || "081234567890",
      address: payload.address || "Dusun Krajan, Desa Pringgodani",
      coverUrl:
        payload.coverUrl ||
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    };

    localUmkm.unshift(newItem);
    return newItem;
  },

  async updateUmkmStatus(
    id: string,
    status: UmkmStatus,
  ): Promise<{ success: boolean }> {
    if (IS_API_CONNECTED) {
      // Bug fix: same fake-success pattern as admin-news.service.ts /
      // admin-submissions.service.ts - used to fall through to local-mock
      // success on a real API failure.
      try {
        await apiClient.patch(`/admin/umkm/${id}/status`, { status });
        return { success: true };
      } catch (err) {
        console.error(`Gagal merubah status UMKM ${id}:`, err);
        return { success: false };
      }
    }

    const item = localUmkm.find((u) => u.id === id);
    if (item) {
      item.status = status;
    }
    return { success: true };
  },

  async deleteUmkm(id: string): Promise<{ success: boolean }> {
    if (IS_API_CONNECTED) {
      try {
        await apiClient.delete(`/admin/umkm/${id}`);
        return { success: true };
      } catch (err) {
        console.error(`Gagal menghapus UMKM ${id}:`, err);
        return { success: false };
      }
    }

    localUmkm = localUmkm.filter((u) => u.id !== id);
    return { success: true };
  },

  async getUmkmById(id: string): Promise<AdminUmkmItem | null> {
    if (IS_API_CONNECTED) {
      try {
        const { data } = await apiClient.get<ApiSuccessBody<AdminUmkmItem>>(
          `/admin/umkm/${id}`,
        );
        if (data?.data) return data.data;
      } catch (err) {
        console.error(`Gagal memuat UMKM ${id}:`, err);
      }
    }
    return localUmkm.find((u) => u.id === id) || null;
  },

  async updateUmkm(
    id: string,
    payload: Partial<AdminUmkmItem>,
  ): Promise<{ success: boolean }> {
    if (IS_API_CONNECTED) {
      try {
        await apiClient.put(`/admin/umkm/${id}`, payload);
        return { success: true };
      } catch (err) {
        console.error(`Gagal memperbarui UMKM ${id}:`, err);
        return { success: false };
      }
    }

    const idx = localUmkm.findIndex((u) => u.id === id);
    if (idx !== -1) {
      localUmkm[idx] = { ...localUmkm[idx], ...payload };
    }
    return { success: true };
  },
};
