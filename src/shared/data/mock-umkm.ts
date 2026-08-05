import type {
  UmkmCategoryDto,
  UmkmDetailDto,
  UmkmListItemDto,
  UmkmProductDto,
} from "@/entities/umkm/model/types";
import {
  UMKM_CATEGORY_VALUES,
  getUmkmCategoryMeta,
} from "@/entities/umkm/model/category-meta";
import { MOCK_POTENSI } from "@/shared/data/mock-potensi";

function daysAgo(days: number): string {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
}

/**
 * One mock UMKM = list fields + the detail-only fields. `MOCK_UMKM` exposes
 * just the list shape (what `GET /umkm` would return), while
 * `getMockUmkmDetail` composes the full detail DTO — the same split the real
 * API had between `UmkmListItemDto` and `UmkmDetailDto`.
 */
interface MockUmkmRecord extends UmkmListItemDto {
  latitude: number;
  longitude: number;
  gallery: string[];
  products: UmkmProductDto[];
  /** `Umkm.potentialId` — `null` for UMKM outside a potensi ecosystem. */
  potentialId: string | null;
}

const MOCK_UMKM_RECORDS: MockUmkmRecord[] = [
  {
    id: "umkm-1",
    name: "Keripik Singkong Bu Marni",
    slug: "keripik-singkong-bu-marni",
    category: "KULINER",
    description:
      "Keripik singkong renyah dengan bumbu warisan keluarga, diolah dari singkong hasil kebun warga Dusun Krajan dan digoreng tanpa pengawet.",
    logo: "umkm/logos/umkm_seed_keripik-singkong-bu-marni.webp",
    whatsappNumber: "6281234500001",
    address: "Jl. Raya Krajan No. 12, Dusun Krajan, Desa Pringgodani",
    ownerName: "Ibu Marni Suwarni",
    publishedAt: daysAgo(3),
    latitude: -8.0213,
    longitude: 112.7541,
    gallery: [
      "umkm/gallery/umkm_seed_keripik-singkong-bu-marni_1.webp",
      "umkm/gallery/umkm_seed_keripik-singkong-bu-marni_2.webp",
      "umkm/gallery/umkm_seed_keripik-singkong-bu-marni_3.webp",
      "umkm/gallery/umkm_seed_keripik-singkong-bu-marni_4.webp",
    ],
    products: [
      {
        id: "umkm-1-p1",
        productName: "Keripik Singkong Original 250gr",
        price: 15000,
        productPhoto: "umkm/products/umkm_seed_keripik-original.webp",
      },
      {
        id: "umkm-1-p2",
        productName: "Keripik Singkong Balado 250gr",
        price: 18000,
        productPhoto: "umkm/products/umkm_seed_keripik-balado.webp",
      },
      {
        id: "umkm-1-p3",
        productName: "Paket Oleh-Oleh Keripik 1kg",
        price: 60000,
        productPhoto: null,
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
    logo: "umkm/logos/umkm_seed_anyaman-bambu-pak-slamet.webp",
    whatsappNumber: "6281234500002",
    address: "Jl. Bambu Runcing No. 4, Dusun Ngasem, Desa Pringgodani",
    ownerName: "Bapak Slamet Riyadi",
    publishedAt: daysAgo(8),
    latitude: -8.0264,
    longitude: 112.7602,
    gallery: [
      "umkm/gallery/umkm_seed_anyaman-bambu-pak-slamet_1.webp",
      "umkm/gallery/umkm_seed_anyaman-bambu-pak-slamet_2.webp",
      "umkm/gallery/umkm_seed_anyaman-bambu-pak-slamet_3.webp",
    ],
    products: [
      {
        id: "umkm-2-p1",
        productName: "Besek Bambu Ukuran Sedang",
        price: 12000,
        productPhoto: "umkm/products/umkm_seed_besek-bambu.webp",
      },
      {
        id: "umkm-2-p2",
        productName: "Tas Pasar Anyaman Bambu",
        price: 45000,
        productPhoto: "umkm/products/umkm_seed_tas-anyaman.webp",
      },
    ],
    potentialId: "pot-3",
  },
  {
    id: "umkm-3",
    name: "Warung Kopi Bukit Pringgo",
    slug: "warung-kopi-bukit-pringgo",
    category: "KULINER",
    description:
      "Warung kopi dengan panorama lereng Bukit Pringgo, menyajikan kopi robusta lokal yang disangrai sendiri setiap pagi.",
    logo: "umkm/logos/umkm_seed_warung-kopi-bukit-pringgo.webp",
    whatsappNumber: "6281234500003",
    address: "Jalur Wisata Bukit Pringgo Km 2, Dusun Pringapus",
    ownerName: "Bagas Prasetyo",
    publishedAt: daysAgo(12),
    latitude: -8.0311,
    longitude: 112.7688,
    gallery: [
      "umkm/gallery/umkm_seed_warung-kopi-bukit-pringgo_1.webp",
      "umkm/gallery/umkm_seed_warung-kopi-bukit-pringgo_2.webp",
    ],
    products: [
      {
        id: "umkm-3-p1",
        productName: "Kopi Robusta Tubruk",
        price: 8000,
        productPhoto: "umkm/products/umkm_seed_kopi-tubruk.webp",
      },
      {
        id: "umkm-3-p2",
        productName: "Bubuk Kopi Robusta 200gr",
        price: 35000,
        productPhoto: null,
      },
    ],
    potentialId: "pot-2",
  },
  {
    id: "umkm-4",
    name: "Konveksi Batik Pringgodani",
    slug: "konveksi-batik-pringgodani",
    category: "FASHION",
    description:
      "Konveksi batik cap dan tulis dengan motif khas Pringgodani, melayani pesanan seragam desa, sekolah, dan komunitas.",
    logo: "umkm/logos/umkm_seed_konveksi-batik-pringgodani.webp",
    whatsappNumber: "6281234500004",
    address: "Jl. Melati No. 27, Dusun Krajan, Desa Pringgodani",
    ownerName: "Ibu Wulandari",
    publishedAt: daysAgo(17),
    latitude: -8.0198,
    longitude: 112.7519,
    // Deliberately empty: exercises the "galeri belum tersedia" branch.
    gallery: [],
    products: [
      {
        id: "umkm-4-p1",
        productName: "Kain Batik Cap Motif Pringgodani",
        price: 120000,
        productPhoto: "umkm/products/umkm_seed_batik-cap.webp",
      },
    ],
    potentialId: null,
  },
  {
    id: "umkm-5",
    name: "Madu Hutan Al-Barakah",
    slug: "madu-hutan-al-barakah",
    category: "PERTANIAN_PETERNAKAN",
    description:
      "Madu murni dari lebah hutan lereng Pringgodani, dipanen musiman tanpa campuran gula maupun perasa tambahan.",
    logo: "umkm/logos/umkm_seed_madu-hutan-al-barakah.webp",
    whatsappNumber: "6281234500005",
    address: "Dusun Sumberejo RT 03 RW 01, Desa Pringgodani",
    ownerName: "Ibu Halimah",
    publishedAt: daysAgo(21),
    latitude: -8.0155,
    longitude: 112.7473,
    gallery: [
      "umkm/gallery/umkm_seed_madu-hutan-al-barakah_1.webp",
      "umkm/gallery/umkm_seed_madu-hutan-al-barakah_2.webp",
      "umkm/gallery/umkm_seed_madu-hutan-al-barakah_3.webp",
      "umkm/gallery/umkm_seed_madu-hutan-al-barakah_4.webp",
    ],
    products: [
      {
        id: "umkm-5-p1",
        productName: "Madu Hutan Multiflora 500ml",
        price: 95000,
        productPhoto: "umkm/products/umkm_seed_madu-500.webp",
      },
      {
        id: "umkm-5-p2",
        productName: "Madu Hutan Multiflora 250ml",
        price: 55000,
        productPhoto: "umkm/products/umkm_seed_madu-250.webp",
      },
    ],
    potentialId: "pot-1",
  },
  {
    id: "umkm-6",
    name: "Sayur Organik Pringgodani",
    slug: "sayur-organik-pringgodani",
    category: "PERTANIAN_PETERNAKAN",
    description:
      "Sayuran segar hasil tani organik tanpa pestisida kimia, dipanen harian dan diantar langsung ke rumah warga sekitar desa.",
    logo: "umkm/logos/umkm_seed_sayur-organik-pringgodani.webp",
    whatsappNumber: "6281234500006",
    address: "Kelompok Tani Sejahtera, Dusun Sumberejo, Desa Pringgodani",
    ownerName: "Kelompok Tani Sejahtera",
    publishedAt: daysAgo(26),
    latitude: -8.0142,
    longitude: 112.7495,
    gallery: ["umkm/gallery/umkm_seed_sayur-organik-pringgodani_1.webp"],
    products: [
      {
        id: "umkm-6-p1",
        productName: "Paket Sayur Mingguan",
        price: 50000,
        productPhoto: null,
      },
      {
        id: "umkm-6-p2",
        productName: "Beras Merah Organik 5kg",
        price: 85000,
        productPhoto: "umkm/products/umkm_seed_beras-merah.webp",
      },
    ],
    potentialId: "pot-1",
  },
  {
    id: "umkm-7",
    name: "Servis Elektronik Hendra",
    slug: "servis-elektronik-hendra",
    category: "JASA",
    description:
      "Jasa perbaikan televisi, kipas, mesin cuci, dan peralatan rumah tangga lainnya dengan layanan panggilan ke rumah.",
    logo: "umkm/logos/umkm_seed_servis-elektronik-hendra.webp",
    whatsappNumber: "6281234500007",
    address: "Jl. Diponegoro No. 8, Dusun Krajan, Desa Pringgodani",
    ownerName: "Hendra Kusuma",
    publishedAt: daysAgo(30),
    latitude: -8.0225,
    longitude: 112.7556,
    gallery: [],
    // Deliberately empty: exercises the "belum ada produk" branch on detail.
    products: [],
    potentialId: null,
  },
  {
    id: "umkm-8",
    name: "Toko Sembako Mbak Yuni",
    slug: "toko-sembako-mbak-yuni",
    category: "PERDAGANGAN",
    description:
      "Toko kebutuhan pokok warga dengan harga grosir, menyediakan beras, minyak, gula, dan gas rumah tangga.",
    logo: "umkm/logos/umkm_seed_toko-sembako-mbak-yuni.webp",
    whatsappNumber: "6281234500008",
    address: "Pasar Ngasem Blok B No. 5, Dusun Ngasem, Desa Pringgodani",
    ownerName: "Yuniarti",
    publishedAt: daysAgo(34),
    latitude: -8.0271,
    longitude: 112.7615,
    gallery: ["umkm/gallery/umkm_seed_toko-sembako-mbak-yuni_1.webp"],
    products: [
      {
        id: "umkm-8-p1",
        productName: "Beras Premium 5kg",
        price: 68000,
        productPhoto: null,
      },
    ],
    potentialId: null,
  },
  {
    id: "umkm-9",
    name: "Gerabah Souvenir Pringgodani",
    slug: "gerabah-souvenir-pringgodani",
    category: "KERAJINAN_SOUVENIR",
    description:
      "Souvenir gerabah dan celengan tanah liat hasil pembakaran tradisional, cocok untuk cinderamata kunjungan desa.",
    logo: "umkm/logos/umkm_seed_gerabah-souvenir-pringgodani.webp",
    whatsappNumber: "6281234500009",
    address: "Sentra Gerabah Dusun Ngasem RT 05, Desa Pringgodani",
    ownerName: "Bapak Wardi",
    publishedAt: daysAgo(39),
    latitude: -8.0288,
    longitude: 112.7634,
    gallery: [
      "umkm/gallery/umkm_seed_gerabah-souvenir-pringgodani_1.webp",
      "umkm/gallery/umkm_seed_gerabah-souvenir-pringgodani_2.webp",
    ],
    products: [
      {
        id: "umkm-9-p1",
        productName: "Celengan Gerabah Motif Desa",
        price: 25000,
        productPhoto: "umkm/products/umkm_seed_celengan-gerabah.webp",
      },
      {
        id: "umkm-9-p2",
        productName: "Vas Bunga Gerabah Kecil",
        // Price intentionally omitted: `UmkmProduct.price` is nullable.
        price: null,
        productPhoto: null,
      },
    ],
    potentialId: "pot-3",
  },
  {
    id: "umkm-10",
    name: "Tenun Lurik Mbok Darmi",
    slug: "tenun-lurik-mbok-darmi",
    category: "FASHION",
    description:
      "Tenun lurik alat tenun bukan mesin (ATBM) dengan pewarna alami, dikerjakan oleh kelompok perempuan Dusun Pringapus.",
    logo: "umkm/logos/umkm_seed_tenun-lurik-mbok-darmi.webp",
    whatsappNumber: "6281234500010",
    address: "Dusun Pringapus RT 02 RW 04, Desa Pringgodani",
    ownerName: "Mbok Darmi",
    publishedAt: daysAgo(45),
    latitude: -8.0334,
    longitude: 112.7701,
    gallery: [
      "umkm/gallery/umkm_seed_tenun-lurik-mbok-darmi_1.webp",
      "umkm/gallery/umkm_seed_tenun-lurik-mbok-darmi_2.webp",
      "umkm/gallery/umkm_seed_tenun-lurik-mbok-darmi_3.webp",
    ],
    products: [
      {
        id: "umkm-10-p1",
        productName: "Kain Lurik ATBM 2 Meter",
        price: 175000,
        productPhoto: "umkm/products/umkm_seed_kain-lurik.webp",
      },
    ],
    potentialId: null,
  },
  {
    id: "umkm-11",
    name: "Ternak Kambing Etawa Barokah",
    slug: "ternak-kambing-etawa-barokah",
    category: "PERTANIAN_PETERNAKAN",
    description:
      "Peternakan kambing peranakan etawa dengan produk susu segar dan bibit unggul untuk peternak pemula.",
    logo: "umkm/logos/umkm_seed_ternak-kambing-etawa-barokah.webp",
    whatsappNumber: "6281234500011",
    address: "Dusun Sumberejo RT 06 RW 02, Desa Pringgodani",
    ownerName: "Bapak Suranto",
    publishedAt: daysAgo(52),
    latitude: -8.0128,
    longitude: 112.7452,
    gallery: ["umkm/gallery/umkm_seed_ternak-kambing-etawa-barokah_1.webp"],
    products: [
      {
        id: "umkm-11-p1",
        productName: "Susu Kambing Etawa 1 Liter",
        price: 40000,
        productPhoto: null,
      },
    ],
    potentialId: "pot-1",
  },
  {
    id: "umkm-12",
    name: "Homestay Bukit Asri",
    slug: "homestay-bukit-asri",
    category: "JASA",
    description:
      "Homestay keluarga di jalur wisata Bukit Pringgo dengan tiga kamar, dapur bersama, dan paket sarapan masakan desa.",
    logo: "umkm/logos/umkm_seed_homestay-bukit-asri.webp",
    whatsappNumber: "6281234500012",
    address: "Jalur Wisata Bukit Pringgo Km 1,5, Dusun Pringapus",
    ownerName: "Ibu Retno Palupi",
    publishedAt: daysAgo(58),
    latitude: -8.0301,
    longitude: 112.7672,
    gallery: [
      "umkm/gallery/umkm_seed_homestay-bukit-asri_1.webp",
      "umkm/gallery/umkm_seed_homestay-bukit-asri_2.webp",
    ],
    products: [
      {
        id: "umkm-12-p1",
        productName: "Kamar Standard per Malam",
        price: 200000,
        productPhoto: "umkm/products/umkm_seed_kamar-homestay.webp",
      },
      {
        id: "umkm-12-p2",
        productName: "Paket Sarapan Desa",
        price: 25000,
        productPhoto: null,
      },
    ],
    potentialId: "pot-2",
  },
];

function toListItem(record: MockUmkmRecord): UmkmListItemDto {
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
  };
}

/** Newest first, matching the real API's `publishedAt DESC` ordering. */
export const MOCK_UMKM: UmkmListItemDto[] = MOCK_UMKM_RECORDS.map(toListItem);

export function getMockUmkmDetail(slug: string): UmkmDetailDto | null {
  const record = MOCK_UMKM_RECORDS.find((item) => item.slug === slug);
  if (!record) return null;

  const potential = record.potentialId
    ? (MOCK_POTENSI.find((item) => item.id === record.potentialId) ?? null)
    : null;

  return {
    ...toListItem(record),
    latitude: record.latitude,
    longitude: record.longitude,
    gallery: record.gallery,
    products: record.products,
    potential: potential
      ? {
          id: potential.id,
          title: potential.title,
          slug: potential.slug,
          category: potential.category,
        }
      : null,
  };
}

/**
 * Chips for the directory filter — derived from the `UmkmCategory` enum, with
 * the count of published UMKM per category. Categories with zero UMKM are
 * dropped so the bar never offers a filter that can only return an empty grid.
 */
export const MOCK_UMKM_CATEGORIES: UmkmCategoryDto[] = UMKM_CATEGORY_VALUES.map(
  (value) => {
    const meta = getUmkmCategoryMeta(value);
    return {
      value,
      slug: meta.slug,
      label: meta.label,
      umkmCount: MOCK_UMKM.filter((item) => item.category === value).length,
    };
  },
).filter((category) => category.umkmCount > 0);

export function addMockUmkmRecord(record: MockUmkmRecord): void {
  MOCK_UMKM_RECORDS.unshift(record);
  MOCK_UMKM.unshift(toListItem(record));
}
