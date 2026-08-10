import { apiClient } from "@/shared/api/axios-instance";
import type { ApiSuccessBody } from "@/shared/api/response";
import type { VillageProfileResponse, VillageStatsDto } from "../model/types";
import { getStoredVillageProfile } from "@/shared/utils/profile-storage";

export const DesaService = {
  async getProfileWithStats(): Promise<VillageProfileResponse> {
    const stored = getStoredVillageProfile();

    let apiProfile = null;
    let stats: VillageStatsDto = {
      umkmCount: 0,
      productCount: 0,
      newsCount: 0,
      dusunCount: 0,
    };

    try {
      const { data } =
        await apiClient.get<ApiSuccessBody<VillageProfileResponse>>(
          "/public/profil",
        );
      if (data?.data) {
        apiProfile = data.data.profile;
        if (data.data.stats) {
          stats = data.data.stats;
        }
      }
    } catch (err) {
      console.error("Gagal memuat profil desa dari API:", err);
    }

    const historyContent = stored.historyText || apiProfile?.historyText || "";
    const historyExcerpt =
      historyContent.length > 200
        ? historyContent.substring(0, 200) + "..."
        : historyContent;

    const mergedProfile = {
      villageName: apiProfile?.villageName || "Desa Pringgodani",
      headGreeting:
        stored.headGreeting ||
        apiProfile?.headGreeting ||
        "Selamat datang di website resmi Desa Pringgodani.",
      headPhoto:
        stored.headPhoto ||
        apiProfile?.headPhoto ||
        "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=1200&q=80",
      headName: stored.headName || apiProfile?.headName || "Kepala Desa",
      headPosition:
        stored.headPosition || apiProfile?.headPosition || "Kepala Desa",
      historyText: historyContent,
      historyExcerpt: historyExcerpt,
      vision: stored.vision || apiProfile?.vision || "",
      missions:
        stored.missions?.length > 0
          ? stored.missions
          : apiProfile?.missions || [],
      officials:
        stored.officials?.length > 0
          ? stored.officials.map((o: Record<string, unknown>) => ({
              name: o.name,
              position: o.position,
              photo: o.photoUrl,
              greeting: o.greeting,
              email: o.email,
            }))
          : apiProfile?.officials || [],
      structureImageUrl:
        stored.structureImageUrl || apiProfile?.structureImageUrl || "",
    };

    return { profile: mergedProfile, stats };
  },
};
