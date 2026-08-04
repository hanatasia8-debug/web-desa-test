import { apiClient, IS_API_CONNECTED } from "@/shared/api/axios-instance";
import type { ApiSuccessBody } from "@/shared/api/response";
import type { VillageProfileResponse } from "../model/types";
import { MOCK_PROFILE, MOCK_STATS } from "@/shared/data/mock-profil";

export const DesaService = {
  async getProfileWithStats(): Promise<VillageProfileResponse> {
    if (IS_API_CONNECTED) {
      const { data } =
        await apiClient.get<ApiSuccessBody<VillageProfileResponse>>("/profil");
      return data.data;
    }
    return { profile: MOCK_PROFILE, stats: MOCK_STATS };
  },
};
