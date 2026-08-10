import { apiClient, IS_API_CONNECTED } from "@/shared/api/axios-instance";
import type { ApiSuccessBody } from "@/shared/api/response";
import type { BannerListResponse } from "../model/types";
import { MOCK_BANNERS } from "@/shared/data/mock-banner";

export const BannerService = {
  async getActive(): Promise<BannerListResponse> {
    if (IS_API_CONNECTED) {
      try {
        const { data } =
          await apiClient.get<ApiSuccessBody<BannerListResponse>>(
            "/public/banner",
          );
        if (data?.data) return data.data;
      } catch (err) {
        console.error("Gagal memuat banner dari API:", err);
      }
    }
    return MOCK_BANNERS;
  },
};
