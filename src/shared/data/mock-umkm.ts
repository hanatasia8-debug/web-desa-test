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

function daysAgo(days: number): string {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
}

const MOCK_UMKM_RECORDS: MockUmkmRecord[] = [
  {
    id: "umkm-1",
    name: "Keripik Singkong Bu Marni",
    slug: "keripik-singkong-bu-marni",
    category: "KULINER",
    description:
      "Keripik singkong renyah dengan bumbu warisan keluarga, diolah dari singkong hasil kebun warga Dusun Krajan dan digoreng tanpa pengawet.",
    logo: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=1000&q=80",
    whatsappNumber: "6281234500001",
    address: "Jl. Raya Krajan No. 12, Dusun Krajan, Desa Pringgodani",
    ownerName: "Ibu Marni Suwarni",
    publishedAt: daysAgo(3),
    latitude: -8.2811,
    longitude: 112.5664,
    gallery: [
      "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1621996346565-e3d5d6281290?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1000&q=80",
    ],
    products: [
      {
        id: "umkm-1-p1",
        productName: "Keripik Singkong Original 250gr",
        price: 15000,
        productPhoto:
          "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "umkm-1-p2",
        productName: "Keripik Singkong Balado 250gr",
        price: 18000,
        productPhoto:
          "https://images.unsplash.com/photo-1621996346565-e3d5d6281290?auto=format&fit=crop&w=800&q=80",
      },
    ],
    potentialId: "pot-1",
  },
  {
    id: "umkm-2",
    name: "Anyaman Bambu Pak Slamet",
    slug: "anyaman-bambu-pak-slamet",
    category: "KERAJINAN_SOUVENIR",
    description:
      "Kerajinan anyaman bambu fungsional — besek, tampah, hingga tas pasar — dikerjakan manual oleh perajin Dusun Ngasem sejak tiga generasi.",
    logo: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1000&q=80",
    whatsappNumber: "6281234500002",
    address: "Jl. Bambu Runcing No. 4, Dusun Ngasem, Desa Pringgodani",
    ownerName: "Bapak Slamet Riyadi",
    publishedAt: daysAgo(8),
    latitude: -8.283,
    longitude: 112.569,
    gallery: [
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=1000&q=80",
    ],
    products: [
      {
        id: "umkm-2-p1",
        productName: "Besek Bambu Ukuran Sedang",
        price: 12000,
        productPhoto:
          "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80",
      },
    ],
    potentialId: null,
  },
  {
    id: "umkm-3",
    name: "Kopi Robusta Pringgodani",
    slug: "kopi-robusta-pringgodani",
    category: "KULINER",
    description:
      "Kopi petik merah dari lereng kebun Desa Pringgodani, disangrai medium-dark untuk aroma kacang tanah dan cokelat yang mantap.",
    logo: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=1000&q=80",
    whatsappNumber: "6281234500003",
    address: "Dusun Sumbersari RT 03 / RW 01, Desa Pringgodani",
    ownerName: "Bapak Hartono",
    publishedAt: daysAgo(14),
    latitude: -8.279,
    longitude: 112.564,
    gallery: [
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80",
    ],
    products: [
      {
        id: "umkm-3-p1",
        productName: "Kopi Bubuk Robusta 200gr",
        price: 25000,
        productPhoto:
          "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80",
      },
    ],
    potentialId: "pot-2",
  },
  {
    id: "umkm-4",
    name: "Batik Tulis Pringgo Jaya",
    slug: "batik-tulis-pringgo-jaya",
    category: "FASHION",
    description:
      "Batik khas Pringgodani bermotif dedaunan dan bambu lokal, menggunakan pewarna alam nabati yang ramah lingkungan.",
    logo: "https://images.unsplash.com/photo-1606760227091-3dd858d97240?auto=format&fit=crop&w=1000&q=80",
    whatsappNumber: "6281234500004",
    address: "Dusun Krajan Tengah No. 8, Desa Pringgodani",
    ownerName: "Ibu Rahayu",
    publishedAt: daysAgo(20),
    latitude: -8.2815,
    longitude: 112.567,
    gallery: [
      "https://images.unsplash.com/photo-1606760227091-3dd858d97240?auto=format&fit=crop&w=1000&q=80",
    ],
    products: [
      {
        id: "umkm-4-p1",
        productName: "Kain Batik Tulis Motif Bambu 2m",
        price: 250000,
        productPhoto:
          "https://images.unsplash.com/photo-1606760227091-3dd858d97240?auto=format&fit=crop&w=800&q=80",
      },
    ],
    potentialId: null,
  },
];

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
