import { apiClient, IS_API_CONNECTED } from "@/shared/api/axios-instance";
import type { ApiSuccessBody } from "@/shared/api/response";
import type { AdminMapLocation, AdminMapCategory } from "../model/admin.types";
import {
  MOCK_ADMIN_MAP_LOCATIONS,
  MOCK_ADMIN_MAP_CATEGORIES,
} from "@/shared/data/mock-admin";

let localLocations: AdminMapLocation[] = [...MOCK_ADMIN_MAP_LOCATIONS];
const localCategories: AdminMapCategory[] = [...MOCK_ADMIN_MAP_CATEGORIES];

export const AdminMapsService = {
  async getLocations(): Promise<AdminMapLocation[]> {
    if (IS_API_CONNECTED) {
      try {
        const { data } = await apiClient.get<
          ApiSuccessBody<AdminMapLocation[]>
        >("/admin/maps/locations");
        if (data?.data) return data.data;
      } catch (err) {
        console.error("Gagal memuat titik peta dari API:", err);
      }
    }
    return localLocations;
  },

  async createLocation(
    payload: Partial<AdminMapLocation>,
  ): Promise<AdminMapLocation> {
    if (IS_API_CONNECTED) {
      const { data } = await apiClient.post<ApiSuccessBody<AdminMapLocation>>(
        "/admin/maps/locations",
        payload,
      );
      return data.data;
    }

    const newItem: AdminMapLocation = {
      id: `loc-${Date.now()}`,
      name: payload.name || "Titik Peta Baru",
      categoryId: payload.categoryId || "cat-1",
      categoryName: payload.categoryName || "Fasilitas Umum",
      shortDescription:
        payload.shortDescription || "Deskripsi singkat titik lokasi.",
      address: payload.address || "Desa Pringgodani",
      latitude: payload.latitude || -7.981,
      longitude: payload.longitude || 112.631,
      googleMapsUrl: payload.googleMapsUrl || "https://maps.google.com",
      imageUrl:
        payload.imageUrl ||
        "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
    };

    localLocations.unshift(newItem);
    return newItem;
  },

  async updateLocation(
    id: string,
    payload: Partial<AdminMapLocation>,
  ): Promise<{ success: boolean }> {
    if (IS_API_CONNECTED) {
      try {
        await apiClient.put(`/admin/maps/locations/${id}`, payload);
        return { success: true };
      } catch (err) {
        console.error(`Gagal merubah peta ${id}:`, err);
      }
    }

    const item = localLocations.find((l) => l.id === id);
    if (item) {
      Object.assign(item, payload);
    }
    return { success: true };
  },

  async deleteLocation(id: string): Promise<{ success: boolean }> {
    if (IS_API_CONNECTED) {
      try {
        await apiClient.delete(`/admin/maps/locations/${id}`);
        return { success: true };
      } catch (err) {
        console.error(`Gagal menghapus peta ${id}:`, err);
      }
    }

    localLocations = localLocations.filter((l) => l.id !== id);
    return { success: true };
  },

  async getCategories(): Promise<AdminMapCategory[]> {
    if (IS_API_CONNECTED) {
      try {
        const { data } = await apiClient.get<
          ApiSuccessBody<AdminMapCategory[]>
        >("/admin/maps/categories");
        if (data?.data) return data.data;
      } catch (err) {
        console.error("Gagal memuat kategori peta dari API:", err);
      }
    }
    return localCategories;
  },
};
