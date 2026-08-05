import axios from "axios";

import { apiClient, IS_API_CONNECTED } from "@/shared/api/axios-instance";
import type { ApiSuccessBody } from "@/shared/api/response";
import { MOCK_POTENSI } from "@/shared/data/mock-potensi";
import type {
  PotensiDetailDto,
  PotensiListItemDto,
  PotensiListResponse,
} from "../model/types";

function sortedMockPotensi(): PotensiListItemDto[] {
  return [...MOCK_POTENSI].sort((a, b) => a.title.localeCompare(b.title));
}

export const PotensiService = {
  async getList(): Promise<PotensiListResponse> {
    if (IS_API_CONNECTED) {
      const { data } =
        await apiClient.get<ApiSuccessBody<PotensiListResponse>>("/potensi");
      return data.data;
    }

    const items = sortedMockPotensi();
    return { items, total: items.length };
  },

  async getBySlug(slug: string): Promise<PotensiDetailDto | null> {
    if (IS_API_CONNECTED) {
      try {
        const { data } = await apiClient.get<ApiSuccessBody<PotensiDetailDto>>(
          `/potensi/${slug}`,
        );
        return data.data;
      } catch (err) {
        if (axios.isAxiosError(err) && err.response?.status === 404) {
          return null;
        }
        throw err;
      }
    }

    return sortedMockPotensi().find((item) => item.slug === slug) ?? null;
  },
};
