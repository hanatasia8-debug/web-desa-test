import { apiClient, IS_API_CONNECTED } from "@/shared/api/axios-instance";
import type { ApiSuccessBody } from "@/shared/api/response";
import type { UmkmListResponse } from "../model/types";
import { MOCK_UMKM } from "@/shared/data/mock-umkm";

export interface GetLatestUmkmParams {
  limit?: number;
}

/**
 * UmkmService — dual-mode data source.
 * GUARDRAIL: the Homepage must NEVER sort UMKM by rating —
 * `getLatestPublished` always orders by `publishedAt DESC`.
 */
export const UmkmService = {
  async getLatestPublished({
    limit = 3,
  }: GetLatestUmkmParams = {}): Promise<UmkmListResponse> {
    if (IS_API_CONNECTED) {
      const { data } = await apiClient.get<ApiSuccessBody<UmkmListResponse>>(
        "/umkm",
        { params: { limit, sort: "publishedAt_desc" } },
      );
      return data.data;
    }
    return { items: MOCK_UMKM.slice(0, limit), total: MOCK_UMKM.length };
  },
};
