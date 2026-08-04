import { apiClient } from "@/shared/api/axios-instance";
import type { ApiSuccessBody } from "@/shared/api/response";
import type { FacilityListResponse } from "../model/types";

export interface GetFacilitiesParams {
  category?: string;
  limit?: number;
}

/**
 * FasilitasService — for public facility pins (Home map preview, `/peta`
 * public map). GUARDRAIL: never mix UMKM markers into this — UMKM has no
 * relation to PublicFacility in the schema, so this is naturally enforced.
 */
export const FasilitasService = {
  async getFacilities({
    category,
    limit,
  }: GetFacilitiesParams = {}): Promise<FacilityListResponse> {
    const { data } = await apiClient.get<ApiSuccessBody<FacilityListResponse>>(
      "/peta",
      { params: { category, limit } },
    );
    return data.data;
  },
};
