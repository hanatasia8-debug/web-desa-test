import axios from "axios";

import { apiClient, IS_API_CONNECTED } from "@/shared/api/axios-instance";
import type { ApiSuccessBody } from "@/shared/api/response";
import type {
  NewsCategoryListResponse,
  NewsDetailDto,
  NewsListResponse,
} from "../model/types";
import {
  MOCK_NEWS,
  MOCK_NEWS_CATEGORIES,
  getMockNewsDetail,
} from "@/shared/data/mock-berita";

export interface GetLatestNewsParams {
  limit?: number;
}

export interface GetPaginatedNewsParams {
  page?: number;
  limit?: number;
  /** `NewsCategory.id` or `slug`. */
  category?: string;
  /** Case-insensitive keyword matched against title + summary. */
  search?: string;
  /** News id to leave out (featured hero article, or the article being read). */
  exclude?: string;
}

export interface GetRelatedNewsParams {
  categoryId: string;
  excludeId: string;
  limit?: number;
}

/**
 * BeritaService — dual-mode data source.
 * When NEXT_PUBLIC_API_URL is set → fetches from backend API.
 * When empty → returns static mock data with client-side filtering.
 */
export const BeritaService = {
  async getLatestPublished({
    limit = 3,
  }: GetLatestNewsParams = {}): Promise<NewsListResponse> {
    if (IS_API_CONNECTED) {
      const { data } = await apiClient.get<ApiSuccessBody<NewsListResponse>>(
        "/berita",
        { params: { limit, sort: "publishedAt_desc" } },
      );
      return data.data;
    }
    return { items: MOCK_NEWS.slice(0, limit), total: MOCK_NEWS.length };
  },

  async getPaginated({
    page = 1,
    limit = 6,
    category,
    search,
    exclude,
  }: GetPaginatedNewsParams = {}): Promise<NewsListResponse> {
    if (IS_API_CONNECTED) {
      const { data } = await apiClient.get<ApiSuccessBody<NewsListResponse>>(
        "/berita",
        {
          params: {
            page,
            limit,
            ...(category ? { category } : {}),
            ...(search ? { search } : {}),
            ...(exclude ? { exclude } : {}),
          },
        },
      );
      return data.data;
    }

    // Client-side filtering for mock data
    let filtered = [...MOCK_NEWS];

    if (exclude) {
      filtered = filtered.filter((n) => n.id !== exclude);
    }

    if (category) {
      filtered = filtered.filter(
        (n) => n.categorySlug === category || n.categoryName === category,
      );
    }

    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        (n) =>
          n.title.toLowerCase().includes(q) ||
          n.summary.toLowerCase().includes(q),
      );
    }

    const total = filtered.length;
    const start = (page - 1) * limit;
    const items = filtered.slice(start, start + limit);

    return { items, total };
  },

  async getBySlug(slug: string): Promise<NewsDetailDto | null> {
    if (IS_API_CONNECTED) {
      try {
        const { data } = await apiClient.get<ApiSuccessBody<NewsDetailDto>>(
          `/berita/${encodeURIComponent(slug)}`,
        );
        return data.data;
      } catch (err) {
        if (axios.isAxiosError(err) && err.response?.status === 404)
          return null;
        throw err;
      }
    }
    return getMockNewsDetail(slug);
  },

  async getRelated({
    categoryId,
    excludeId,
    limit = 3,
  }: GetRelatedNewsParams): Promise<NewsListResponse> {
    return this.getPaginated({
      category: categoryId,
      exclude: excludeId,
      limit,
    });
  },

  async getCategories(): Promise<NewsCategoryListResponse> {
    if (IS_API_CONNECTED) {
      const { data } =
        await apiClient.get<ApiSuccessBody<NewsCategoryListResponse>>(
          "/berita/categories",
        );
      return data.data;
    }
    return { items: MOCK_NEWS_CATEGORIES };
  },
};
