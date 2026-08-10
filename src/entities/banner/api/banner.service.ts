import { apiClient, IS_API_CONNECTED } from "@/shared/api/axios-instance";
import type { ApiSuccessBody } from "@/shared/api/response";
import type { BannerListResponse } from "../model/types";
import { MOCK_BANNERS } from "@/shared/data/mock-banner";

export const BannerService = {
  // Simple in-memory cache to avoid repeated API calls during navigation.
  _cache: null as BannerListResponse | null,
  _inFlight: null as Promise<BannerListResponse> | null,

  async getActive(): Promise<BannerListResponse> {
    if (this._cache) return this._cache;

    if (this._inFlight) return this._inFlight;

    if (IS_API_CONNECTED) {
      this._inFlight = (async () => {
        try {
          const { data } =
            await apiClient.get<ApiSuccessBody<BannerListResponse>>(
              "/public/banner",
            );
          if (data?.data) {
            this._cache = data.data;
            return data.data;
          }
        } catch (err) {
          console.error("Gagal memuat banner dari API:", err);
        }
        this._inFlight = null;
        return MOCK_BANNERS;
      })();

      return this._inFlight;
    }

    return MOCK_BANNERS;
  },
};
