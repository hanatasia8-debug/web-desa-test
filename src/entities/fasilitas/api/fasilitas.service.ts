import { apiClient, IS_API_CONNECTED } from "@/shared/api/axios-instance";
import type { ApiSuccessBody } from "@/shared/api/response";
import type { FacilityListResponse } from "../model/types";
import { MOCK_FACILITIES } from "@/shared/data/mock-fasilitas";

export interface GetFacilitiesParams {
  category?: string;
  limit?: number;
}

/**
 * FasilitasService — for public facility pins (Home map preview, `/peta`
 * public map). GUARDRAIL: never mix UMKM markers into this.
 */
export const FasilitasService = {
  async getFacilities({
    category,
    limit,
  }: GetFacilitiesParams = {}): Promise<FacilityListResponse> {
    if (IS_API_CONNECTED) {
      const { data } = await apiClient.get<
        ApiSuccessBody<FacilityListResponse>
      >("/peta", {
        params: { category, limit },
      });
      return data.data;
    }

    let items = [...MOCK_FACILITIES];

    if (category) {
      items = items.filter((f) => f.category === category);
    }

    if (limit) {
      items = items.slice(0, limit);
    }

    return { items };
  },
};
