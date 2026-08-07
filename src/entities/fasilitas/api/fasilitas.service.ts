import { apiClient, IS_API_CONNECTED } from "@/shared/api/axios-instance";
import type { ApiSuccessBody } from "@/shared/api/response";
import type {
  MapCategoryListResponse,
  MapCategoryDto,
  MapLocationDto,
  MapLocationListResponse,
} from "../model/types";
import {
  MOCK_FACILITIES,
  MOCK_MAP_CATEGORIES,
} from "@/shared/data/mock-fasilitas";

export interface GetFacilitiesParams {
  categorySlug?: string;
  category?: string; // fallback alias for legacy callers
  search?: string;
  limit?: number;
}

/**
 * FasilitasService — for public facility & landmark pins on the interactive map `/peta`.
 * Connects to `web-desa` backend `/public/maps/locations` and `/public/maps/categories`.
 */
export const FasilitasService = {
  async getFacilities({
    categorySlug,
    category,
    search,
    limit,
  }: GetFacilitiesParams = {}): Promise<MapLocationListResponse> {
    const slugFilter = categorySlug || category;

    if (IS_API_CONNECTED) {
      try {
        const { data } = await apiClient.get<ApiSuccessBody<MapLocationDto[]>>(
          "/public/maps/locations",
          {
            params: {
              categorySlug: slugFilter,
              q: search,
            },
          },
        );

        let items = data?.data || [];
        if (limit) {
          items = items.slice(0, limit);
        }
        return { items };
      } catch (err) {
        console.error("Gagal memuat titik peta dari API:", err);
      }
    }

    let items = [...MOCK_FACILITIES];

    if (slugFilter) {
      items = items.filter(
        (f) =>
          f.category.slug === slugFilter ||
          f.category.name.toLowerCase() === slugFilter.toLowerCase(),
      );
    }

    if (search) {
      const q = search.toLowerCase();
      items = items.filter(
        (f) =>
          f.name.toLowerCase().includes(q) ||
          (f.shortDescription &&
            f.shortDescription.toLowerCase().includes(q)) ||
          (f.address && f.address.toLowerCase().includes(q)),
      );
    }

    if (limit) {
      items = items.slice(0, limit);
    }

    return { items };
  },

  async getCategories(): Promise<MapCategoryListResponse> {
    if (IS_API_CONNECTED) {
      try {
        const { data } = await apiClient.get<ApiSuccessBody<MapCategoryDto[]>>(
          "/public/maps/categories",
        );
        return { items: data?.data || [] };
      } catch (err) {
        console.error("Gagal memuat kategori peta dari API:", err);
      }
    }

    return { items: MOCK_MAP_CATEGORIES };
  },
};
