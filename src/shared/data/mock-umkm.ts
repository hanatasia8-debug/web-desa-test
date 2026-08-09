import type {
  UmkmCategoryDto,
  UmkmDetailDto,
  UmkmListItemDto,
  UmkmProductDto,
  UmkmPotentialSummaryDto,
} from "@/entities/umkm/model/types";
import {
  UMKM_CATEGORY_VALUES,
  getUmkmCategoryMeta,
} from "@/entities/umkm/model/category-meta";
import { MOCK_POTENSI } from "@/shared/data/mock-potensi";

/**
 * One mock UMKM = list fields + the detail-only fields. `MOCK_UMKM` exposes
 * just the list shape (what `GET /umkm` would return), while
 * `getMockUmkmDetail` composes the full detail DTO.
 */
export interface MockUmkmRecord extends UmkmListItemDto {
  latitude: number;
  longitude: number;
  gallery: string[];
  products: UmkmProductDto[];
  potentialId: string | null;
}

const MOCK_UMKM_RECORDS: MockUmkmRecord[] = [];

export const MOCK_UMKM: UmkmListItemDto[] = MOCK_UMKM_RECORDS.map(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ latitude, longitude, gallery, products, potentialId, ...item }) => item,
);

export function getMockUmkmCategories(): UmkmCategoryDto[] {
  return UMKM_CATEGORY_VALUES.map((catKey) => {
    const meta = getUmkmCategoryMeta(catKey);
    const count = MOCK_UMKM.filter((u) => u.category === catKey).length;
    return {
      value: catKey,
      slug: meta.slug,
      label: meta.label,
      umkmCount: count,
    };
  });
}

export const MOCK_UMKM_CATEGORIES: UmkmCategoryDto[] = getMockUmkmCategories();

export function getMockUmkmDetail(slug: string): UmkmDetailDto | null {
  const record = MOCK_UMKM_RECORDS.find((u) => u.slug === slug);
  if (!record) return null;

  const potential = record.potentialId
    ? (MOCK_POTENSI.find((p) => p.id === record.potentialId) ?? null)
    : null;

  const potentialSummary: UmkmPotentialSummaryDto | null = potential
    ? {
        id: potential.id,
        title: potential.title,
        slug: potential.slug,
        category: potential.category,
      }
    : null;

  return {
    id: record.id,
    name: record.name,
    slug: record.slug,
    category: record.category,
    description: record.description,
    logo: record.logo,
    whatsappNumber: record.whatsappNumber,
    address: record.address,
    ownerName: record.ownerName,
    publishedAt: record.publishedAt,
    latitude: record.latitude,
    longitude: record.longitude,
    gallery: record.gallery,
    products: record.products,
    potential: potentialSummary,
  };
}

export function getMockSimilarUmkm(
  category: string,
  excludeId: string,
  limit = 3,
): UmkmListItemDto[] {
  return MOCK_UMKM.filter(
    (u) => u.category === category && u.id !== excludeId,
  ).slice(0, limit);
}

export function addMockUmkmRecord(newRecord: MockUmkmRecord) {
  MOCK_UMKM_RECORDS.unshift(newRecord);
  MOCK_UMKM.unshift({
    id: newRecord.id,
    name: newRecord.name,
    slug: newRecord.slug,
    category: newRecord.category,
    description: newRecord.description,
    logo: newRecord.logo,
    whatsappNumber: newRecord.whatsappNumber,
    address: newRecord.address,
    ownerName: newRecord.ownerName,
    publishedAt: newRecord.publishedAt,
  });
}

export function getMockUmkmByPotentialId(
  potentialId: string,
): MockUmkmRecord[] {
  return MOCK_UMKM_RECORDS.filter(
    (record) => record.potentialId === potentialId,
  ).sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
}
