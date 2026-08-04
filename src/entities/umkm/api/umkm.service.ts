import { apiClient } from "@/shared/api/axios-instance";
import type { ApiSuccessBody } from "@/shared/api/response";
import type { UmkmListResponse } from "../model/types";

export interface GetLatestUmkmParams {
  limit?: number;
}

/**
 * UmkmService — Page components must go through this, never Prisma
 * directly. GUARDRAIL: the Homepage must NEVER sort UMKM by rating —
 * `getLatestPublished` always orders by `publishedAt DESC` (enforced in
 * the Route Handler, not here, but documented on both ends deliberately).
 */
export const UmkmService = {
  async getLatestPublished({
    limit = 3,
  }: GetLatestUmkmParams = {}): Promise<UmkmListResponse> {
    const { data } = await apiClient.get<ApiSuccessBody<UmkmListResponse>>(
      "/umkm",
      { params: { limit, sort: "publishedAt_desc" } },
    );
    return data.data;
  },
};
