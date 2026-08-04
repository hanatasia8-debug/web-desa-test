import { apiClient } from "@/shared/api/axios-instance";
import type { ApiSuccessBody } from "@/shared/api/response";
import type { VillageProfileResponse } from "../model/types";

export const DesaService = {
  async getProfileWithStats(): Promise<VillageProfileResponse> {
    const { data } =
      await apiClient.get<ApiSuccessBody<VillageProfileResponse>>("/profil");
    return data.data;
  },
};
