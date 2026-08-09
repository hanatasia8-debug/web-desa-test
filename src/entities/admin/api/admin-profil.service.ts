import { apiClient, IS_API_CONNECTED } from "@/shared/api/axios-instance";
import type { ApiSuccessBody } from "@/shared/api/response";
import { MOCK_PROFILE } from "@/shared/data/mock-profil";

export interface AdminOfficialItem {
  id: string;
  name: string;
  position: string;
  photoUrl: string;
  email?: string;
  greeting?: string;
}

export interface AdminProfilPayload {
  headName: string;
  headPosition: string;
  headPhoto: string;
  headGreeting: string;
  historyText: string;
  vision: string;
  missions: string[];
  structureImageUrl: string;
  officials: AdminOfficialItem[];
}

let localProfil: AdminProfilPayload = {
  headName: MOCK_PROFILE.headName || "Ki Suryo Pringgo",
  headPosition: MOCK_PROFILE.headPosition || "Kepala Desa Pringgodani",
  headPhoto:
    MOCK_PROFILE.headPhoto ||
    "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=1200&q=80",
  headGreeting:
    MOCK_PROFILE.headGreeting ||
    "Selamat datang di website resmi Desa Pringgodani.",
  historyText:
    MOCK_PROFILE.historyText ||
    "Desa Pringgodani berdiri sejak masa kolonial...",
  vision:
    MOCK_PROFILE.vision ||
    "Mewujudkan Desa Pringgodani yang mandiri, maju, dan sejahtera.",
  missions: MOCK_PROFILE.missions || [
    "Meningkatkan kualitas pelayanan publik",
    "Mendorong UMKM desa",
  ],
  structureImageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=1200&q=80",
  officials: (MOCK_PROFILE.officials || []).map((o, i) => ({
    id: `official-${i + 1}`,
    name: o.name,
    position: o.position,
    photoUrl:
      o.photo ||
      "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=1200&q=80",
    email: "perangkat@pringgodani.desa.id",
  })),
};

export const AdminProfilService = {
  async getProfil(): Promise<AdminProfilPayload> {
    if (IS_API_CONNECTED) {
      try {
        const { data } =
          await apiClient.get<ApiSuccessBody<AdminProfilPayload>>(
            "/admin/profil",
          );
        if (data?.data) return data.data;
      } catch (err) {
        console.error("Gagal memuat profil desa dari API:", err);
      }
    }
    return localProfil;
  },

  async updateProfil(
    payload: Partial<AdminProfilPayload>,
  ): Promise<{ success: boolean }> {
    if (IS_API_CONNECTED) {
      try {
        await apiClient.put("/admin/profil", payload);
        return { success: true };
      } catch (err) {
        console.error("Gagal memperbarui profil desa ke API:", err);
      }
    }

    localProfil = { ...localProfil, ...payload };
    return { success: true };
  },

  async addOfficial(
    official: Omit<AdminOfficialItem, "id">,
  ): Promise<AdminOfficialItem> {
    if (IS_API_CONNECTED) {
      try {
        const { data } = await apiClient.post<
          ApiSuccessBody<AdminOfficialItem>
        >("/admin/officials", official);
        if (data?.data) return data.data;
      } catch (err) {
        console.error("Gagal menambah perangkat desa ke API:", err);
      }
    }

    const newOfficial: AdminOfficialItem = {
      id: `official-${Date.now()}`,
      ...official,
    };
    localProfil.officials.unshift(newOfficial);
    return newOfficial;
  },

  async updateOfficial(
    id: string,
    official: Partial<AdminOfficialItem>,
  ): Promise<{ success: boolean }> {
    if (IS_API_CONNECTED) {
      try {
        await apiClient.put(`/admin/officials/${id}`, official);
        return { success: true };
      } catch (err) {
        console.error(`Gagal merubah perangkat desa ${id}:`, err);
      }
    }

    const item = localProfil.officials.find((o) => o.id === id);
    if (item) {
      Object.assign(item, official);
    }
    return { success: true };
  },

  async deleteOfficial(id: string): Promise<{ success: boolean }> {
    if (IS_API_CONNECTED) {
      try {
        await apiClient.delete(`/admin/officials/${id}`);
        return { success: true };
      } catch (err) {
        console.error(`Gagal menghapus perangkat desa ${id}:`, err);
      }
    }

    localProfil.officials = localProfil.officials.filter((o) => o.id !== id);
    return { success: true };
  },
};
