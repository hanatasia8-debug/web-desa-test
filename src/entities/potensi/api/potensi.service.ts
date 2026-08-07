import axios from "axios";

import { apiClient, IS_API_CONNECTED } from "@/shared/api/axios-instance";
import type { ApiSuccessBody } from "@/shared/api/response";
import {
  MOCK_POTENSI,
  getMockPotensiDetailRecord,
} from "@/shared/data/mock-potensi";
import { getMockUmkmByPotentialId } from "@/shared/data/mock-umkm";
import { BeritaService } from "@/entities/berita/api/berita.service";
import { getPotensiCategoryMeta } from "../model/category-meta";
import type {
  PotensiDetailDto,
  PotensiFeaturedProductDto,
  PotensiListItemDto,
  PotensiListResponse,
  PotensiRelatedNewsDto,
  PotensiRelatedUmkmDto,
} from "../model/types";

function sortedMockPotensi(): PotensiListItemDto[] {
  return [...MOCK_POTENSI].sort((a, b) => a.title.localeCompare(b.title));
}

const STOPWORDS = new Set([
  "yang",
  "dari",
  "dengan",
  "desa",
  "khas",
  "hasil",
  "warga",
  "untuk",
  "sejak",
  "menjadi",
  "salah",
  "satu",
  "para",
  "kelompok",
  "lokal",
  "sistem",
  "tetap",
  "juga",
  "turun-temurun",
]);

function extractKeywords(...phrases: string[]): string[] {
  const words = phrases
    .join(" ")
    .toLowerCase()
    .split(/\s+/)
    .map((w) => w.replace(/[^a-z-]/g, ""))
    .filter((w) => w.length >= 4 && !STOPWORDS.has(w));
  return Array.from(new Set(words));
}

async function findRelatedNews(
  title: string,
  categoryLabel: string,
): Promise<PotensiRelatedNewsDto[]> {
  const keywords = extractKeywords(title, categoryLabel);
  const seen = new Map<string, PotensiRelatedNewsDto>();

  for (const keyword of keywords) {
    if (seen.size >= 3) break;
    try {
      const { items } = await BeritaService.getPaginated({
        search: keyword,
        limit: 3,
      });
      for (const item of items) {
        if (seen.size >= 3) break;
        if (!seen.has(item.id)) {
          seen.set(item.id, {
            id: item.id,
            title: item.title,
            slug: item.slug,
            coverImage: item.coverImage,
            categoryName: item.categoryName,
            publishedAt: item.publishedAt,
          });
        }
      }
    } catch (err) {
      console.error(`Gagal mencari berita terkait untuk "${keyword}":`, err);
    }
  }

  return Array.from(seen.values());
}

function toRelatedUmkm(
  records: ReturnType<typeof getMockUmkmByPotentialId>,
): PotensiRelatedUmkmDto[] {
  return records.map((u) => ({
    id: u.id,
    name: u.name,
    slug: u.slug,
    category: u.category,
    description: u.description,
    logo: u.logo,
    whatsappNumber: u.whatsappNumber,
    address: u.address,
    ownerName: u.ownerName,
    publishedAt: u.publishedAt,
  }));
}

function toFeaturedProducts(
  records: ReturnType<typeof getMockUmkmByPotentialId>,
  limit = 6,
): PotensiFeaturedProductDto[] {
  const products: PotensiFeaturedProductDto[] = [];
  for (const umkm of records) {
    for (const product of umkm.products) {
      if (products.length >= limit) return products;
      products.push({
        id: product.id,
        productName: product.productName,
        price: product.price,
        productPhoto: product.productPhoto,
        umkmName: umkm.name,
        umkmSlug: umkm.slug,
      });
    }
  }
  return products;
}

export const PotensiService = {
  async getList(): Promise<PotensiListResponse> {
    if (IS_API_CONNECTED) {
      try {
        const { data } =
          await apiClient.get<ApiSuccessBody<PotensiListResponse>>(
            "/public/potentials",
          );
        if (data?.data) return data.data;
      } catch (err) {
        console.error("Gagal memuat potensi desa dari API:", err);
      }
    }

    const items = sortedMockPotensi();
    return { items, total: items.length };
  },

  /** `null` (not a thrown error) when the slug does not exist. */
  async getBySlug(slug: string): Promise<PotensiDetailDto | null> {
    if (IS_API_CONNECTED) {
      try {
        const { data } = await apiClient.get<ApiSuccessBody<PotensiDetailDto>>(
          `/public/potentials/${encodeURIComponent(slug)}`,
        );
        if (data?.data) return data.data;
      } catch (err) {
        if (axios.isAxiosError(err) && err.response?.status === 404) {
          return null;
        }
        console.error(`Gagal memuat detail potensi '${slug}' dari API:`, err);
      }
    }

    const listItem = sortedMockPotensi().find((item) => item.slug === slug);
    const detailRecord = getMockPotensiDetailRecord(slug);
    if (!listItem || !detailRecord) return null;

    const relatedUmkmRecords = getMockUmkmByPotentialId(listItem.id);

    const relatedNews = await findRelatedNews(
      listItem.title,
      getPotensiCategoryMeta(listItem.category).label,
    ).catch((err) => {
      console.error("Gagal memuat berita terkait potensi:", err);
      return [];
    });

    return {
      ...listItem,
      description: detailRecord.description,
      gallery: detailRecord.gallery,
      latitude: detailRecord.latitude,
      longitude: detailRecord.longitude,
      relatedUmkm: toRelatedUmkm(relatedUmkmRecords),
      featuredProducts: toFeaturedProducts(relatedUmkmRecords),
      relatedNews,
    };
  },
};
