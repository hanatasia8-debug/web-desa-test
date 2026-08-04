import axios from "axios";

import { apiClient, IS_API_CONNECTED } from "@/shared/api/axios-instance";
import type { ApiSuccessBody } from "@/shared/api/response";
import type {
  UmkmCategoryListResponse,
  UmkmDetailDto,
  UmkmListItemDto,
  UmkmListResponse,
} from "../model/types";
import { resolveUmkmCategory } from "../model/category-meta";
import {
  MOCK_UMKM,
  MOCK_UMKM_CATEGORIES,
  getMockUmkmDetail,
} from "@/shared/data/mock-umkm";

export interface GetLatestUmkmParams {
  limit?: number;
}

export interface GetPaginatedUmkmParams {
  page?: number;
  limit?: number;
  /** `UmkmCategory` enum value or its slug (`kerajinan-souvenir`). */
  category?: string;
  /** Case-insensitive keyword matched against name + description. */
  search?: string;
  /** UMKM id to leave out (the one currently being viewed). */
  exclude?: string;
}

export interface GetSimilarUmkmParams {
  category: string;
  excludeId: string;
  limit?: number;
}

/** Newest first — the ordering the API guarantees, applied to mock data too. */
function sortedMockUmkm(): UmkmListItemDto[] {
  return [...MOCK_UMKM].sort(
    (a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt),
  );
}

function filterMockUmkm({
  category,
  search,
  exclude,
}: Omit<GetPaginatedUmkmParams, "page" | "limit">): UmkmListItemDto[] {
  const categoryValue = category ? resolveUmkmCategory(category) : null;
  const keyword = search?.trim().toLowerCase() ?? "";

  return sortedMockUmkm().filter((item) => {
    // An unknown `?kategori=` matches nothing rather than everything, so a
    // stale link shows an empty state instead of the full directory.
    if (category && item.category !== categoryValue) return false;
    if (exclude && item.id === exclude) return false;
    if (
      keyword &&
      !`${item.name} ${item.description}`.toLowerCase().includes(keyword)
    ) {
      return false;
    }
    return true;
  });
}

/**
 * UmkmService — dual-mode data source.
 * When NEXT_PUBLIC_API_URL is set → fetches from backend API.
 * When empty → returns static mock data with client-side filtering.
 *
 * GUARDRAIL: UMKM is never sorted by rating anywhere (there is no rating in
 * the schema) — every listing orders by `publishedAt DESC`.
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
    return { items: sortedMockUmkm().slice(0, limit), total: MOCK_UMKM.length };
  },

  /** Directory listing: category chip + keyword + page, all optional. */
  async getPaginated({
    page = 1,
    limit = 8,
    category,
    search,
    exclude,
  }: GetPaginatedUmkmParams = {}): Promise<UmkmListResponse> {
    if (IS_API_CONNECTED) {
      const { data } = await apiClient.get<ApiSuccessBody<UmkmListResponse>>(
        "/umkm",
        {
          params: {
            page,
            limit,
            category,
            search,
            exclude,
            sort: "publishedAt_desc",
          },
        },
      );
      return data.data;
    }

    const filtered = filterMockUmkm({ category, search, exclude });
    const start = (page - 1) * limit;
    return {
      items: filtered.slice(start, start + limit),
      total: filtered.length,
    };
  },

  /** `null` (not a thrown error) when the slug does not exist. */
  async getBySlug(slug: string): Promise<UmkmDetailDto | null> {
    if (IS_API_CONNECTED) {
      try {
        const { data } = await apiClient.get<ApiSuccessBody<UmkmDetailDto>>(
          `/umkm/${slug}`,
        );
        return data.data;
      } catch (err) {
        if (axios.isAxiosError(err) && err.response?.status === 404) {
          return null;
        }
        throw err;
      }
    }
    return getMockUmkmDetail(slug);
  },

  /** "UMKM Serupa" — same category, newest first, current UMKM excluded. */
  async getSimilar({
    category,
    excludeId,
    limit = 3,
  }: GetSimilarUmkmParams): Promise<UmkmListResponse> {
    return this.getPaginated({ page: 1, limit, category, exclude: excludeId });
  },

  async getCategories(): Promise<UmkmCategoryListResponse> {
    if (IS_API_CONNECTED) {
      const { data } =
        await apiClient.get<ApiSuccessBody<UmkmCategoryListResponse>>(
          "/umkm/categories",
        );
      return data.data;
    }
    return { items: MOCK_UMKM_CATEGORIES };
  },
};
