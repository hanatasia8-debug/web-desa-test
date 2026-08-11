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

    const historyContent = apiProfile?.historyText || stored.historyText || "";
    const historyExcerpt =
      historyContent.length > 200
        ? historyContent.substring(0, 200) + "..."
        : historyContent;

    const mergedProfile = {
      villageName: apiProfile?.villageName || "Desa Pringgodani",
      headGreeting:
        apiProfile?.headGreeting ||
        stored.headGreeting ||
        "Selamat datang di website resmi Desa Pringgodani.",
      headPhoto:
        apiProfile?.headPhoto ||
        stored.headPhoto ||
        "/images/kepala-desa.jpg",
      headName: apiProfile?.headName || stored.headName || "Kepala Desa",
      headPosition:
        apiProfile?.headPosition || stored.headPosition || "Kepala Desa",
      historyText: historyContent,
      historyExcerpt: historyExcerpt,
      vision: apiProfile?.vision || stored.vision || "",
      missions:
        apiProfile?.missions && apiProfile.missions.length > 0
          ? apiProfile.missions
          : stored.missions || [],
      officials:
        apiProfile?.officials && apiProfile.officials.length > 0
          ? apiProfile.officials
          : stored.officials?.length > 0
          ? stored.officials.map((o) => ({
              name: String(o.name || ""),
              position: String(o.position || ""),
              photo: String(o.photoUrl || ""),
              greeting: o.greeting ? String(o.greeting) : undefined,
              email: o.email ? String(o.email) : undefined,
            }))
          : [],
      structureImageUrl:
        apiProfile?.structureImageUrl || stored.structureImageUrl || "",
    };

    return { profile: mergedProfile, stats };
  },
};
