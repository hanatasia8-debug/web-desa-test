import { apiClient } from "@/shared/api/axios-instance";
import type { ApiSuccessBody } from "@/shared/api/response";
import type { BannerListResponse } from "../model/types";
export const BannerService = {
  _cache: null as BannerListResponse | null,
  _inFlight: null as Promise<BannerListResponse> | null,

  async getActive(): Promise<BannerListResponse> {
    if (this._cache) return this._cache;
    if (this._inFlight) return this._inFlight;

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
      } finally {
        this._inFlight = null;
      }
      return { items: [] };
    })();

    return this._inFlight!;
  },
};
