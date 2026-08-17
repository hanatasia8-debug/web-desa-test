import axios from "axios";
import { apiClient } from "@/shared/api/axios-instance";
import type { ApiSuccessBody } from "@/shared/api/response";
import type {
  ProductDetailDto,
  ProductItemDto,
  ProductListResponse,
} from "../model/types";

export interface GetProductsParams {
  page?: number;
  limit?: number;
  search?: string;
  categorySlug?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: "price_asc" | "price_desc" | "newest";
}

export const ProdukService = {
  async getLatest({ limit = 3 }: { limit?: number } = {}): Promise<ProductItemDto[]> {
    try {
      const { data } = await apiClient.get<ApiSuccessBody<ProductListResponse>>(
        "/public/products",
        { params: { limit, sort: "newest" } },
      );
      return data?.data?.items || [];
    } catch (err) {
      console.error("Gagal memuat produk terbaru:", err);
      return [];
    }
  },

  async getPaginated(params: GetProductsParams = {}): Promise<ProductListResponse> {
    try {
      const { data } = await apiClient.get<ApiSuccessBody<ProductListResponse>>(
        "/public/products",
        { params },
      );
      if (data?.data) return data.data;
    } catch (err) {
      console.error("Gagal memuat katalog produk:", err);
    }
    return { items: [], total: 0, page: 1, limit: 12, totalPages: 1 };
  },

  async getById(id: string): Promise<ProductDetailDto | null> {
    try {
      const { data } = await apiClient.get<ApiSuccessBody<ProductDetailDto>>(
        `/public/products/${id}`,
      );
      if (data?.data) return data.data;
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 404) return null;
      console.error(`Gagal memuat detail produk '${id}':`, err);
    }
    return null;
  },
};
