import axios from "axios";

import { apiClient } from "@/shared/api/axios-instance";
import type { ApiSuccessBody } from "@/shared/api/response";
import type {
  NewsCategoryListResponse,
  NewsDetailDto,
  NewsListResponse,
} from "../model/types";

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
 * BeritaService — the only thing view components (`views/*`, `app/**\/page.tsx`)
 * are allowed to call for News data. Never import Prisma directly into a
 * page/component; this Service calls the Route Handlers under
 * `app/api/berita/`, which are the only layer allowed to touch the database.
 */
export const BeritaService = {
  async getLatestPublished({
    limit = 3,
  }: GetLatestNewsParams = {}): Promise<NewsListResponse> {
    const { data } = await apiClient.get<ApiSuccessBody<NewsListResponse>>(
      "/berita",
      { params: { limit, sort: "publishedAt_desc" } },
    );
    return data.data;
  },

  /** Listing page: paginated + filtered by category and/or free-text search. */
  async getPaginated({
    page = 1,
    limit = 6,
    category,
    search,
    exclude,
  }: GetPaginatedNewsParams = {}): Promise<NewsListResponse> {
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
  },

  /**
   * Detail page. Returns `null` when the slug does not resolve to a PUBLISHED
   * article, so the view can call Next's `notFound()` instead of surfacing an
   * HTTP error — any other failure still throws and hits the error state.
   */
  async getBySlug(slug: string): Promise<NewsDetailDto | null> {
    try {
      const { data } = await apiClient.get<ApiSuccessBody<NewsDetailDto>>(
        `/berita/${encodeURIComponent(slug)}`,
      );
      return data.data;
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 404) return null;
      throw err;
    }
  },

  /** "Berita Terkait": same category, newest first, current article excluded. */
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

  /** Category chips on /berita — always the real `NewsCategory` rows. */
  async getCategories(): Promise<NewsCategoryListResponse> {
    const { data } =
      await apiClient.get<ApiSuccessBody<NewsCategoryListResponse>>(
        "/berita/categories",
      );
    return data.data;
  },
};
