import { apiClient } from "@/shared/api/axios-instance";
import type { ApiSuccessBody } from "@/shared/api/response";
import type { BannerListResponse } from "../model/types";

export const BannerService = {
  async getActive(): Promise<BannerListResponse> {
    const { data } =
      await apiClient.get<ApiSuccessBody<BannerListResponse>>("/banner");
    return data.data;
  },
};
