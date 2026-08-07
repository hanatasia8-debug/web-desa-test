import { apiClient, IS_API_CONNECTED } from "@/shared/api/axios-instance";
import type { ApiSuccessBody } from "@/shared/api/response";
import type { VillageProfileResponse } from "../model/types";
import { MOCK_PROFILE, MOCK_STATS } from "@/shared/data/mock-profil";
import { getStoredProfileHistory } from "@/shared/utils/profile-history-storage";

export const DesaService = {
  async getProfileWithStats(): Promise<VillageProfileResponse> {
    if (IS_API_CONNECTED) {
      try {
        const { data } =
          await apiClient.get<ApiSuccessBody<VillageProfileResponse>>(
            "/public/profil",
          );
        if (data?.data) return data.data;
      } catch (err) {
        console.error(
          "Gagal memuat profil desa dari API, menggunakan fallback mock data:",
          err,
        );
      }
    }

    const storedHistory = getStoredProfileHistory();
    const profile = {
      ...MOCK_PROFILE,
      historyText: storedHistory || MOCK_PROFILE.historyText,
      historyExcerpt: storedHistory || MOCK_PROFILE.historyExcerpt,
    };

    return { profile, stats: MOCK_STATS };
  },
};
