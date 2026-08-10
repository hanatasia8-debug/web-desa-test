import type {
  PendingNewsSubmission,
  PendingUmkmSubmission,
  AdminNewsItem,
  AdminUmkmItem,
  AdminMapLocation,
  AdminMapCategory,
  AdminSettingsPayload,
} from "@/entities/admin/model/admin.types";
import { MOCK_NEWS } from "./mock-berita";
import { MOCK_UMKM } from "./mock-umkm";
import { MOCK_FACILITIES, MOCK_MAP_CATEGORIES } from "./mock-fasilitas";

export const MOCK_PENDING_NEWS: PendingNewsSubmission[] = [
  {
    id: "news-pending-1",
    title: "Pengajuan: Laporan Kegiatan Posyandu Lansia Dusun Krajan",
    slug: "pengajuan-posyandu-lansia-dusun-krajan",
    excerpt:
      "Kader Posyandu Dusun Krajan melaporkan pemeriksaan kesehatan rutin lansia bulan Agustus.",
    categoryName: "Kegiatan Desa",
    submittedAt: "2026-08-05T09:30:00Z",
    authorName: "Ibu Hartini (Kader Posyandu)",
    coverUrl:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80",
    contentBlocks: [
      {
        subHeading: "Pemeriksaan Kesehatan Gratis",
        content:
          "Pemeriksaan meliputi tekanan darah, gula darah, serta pemberian vitamin bagi para lansia desa.",
        imageUrl:
          "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  {
    id: "news-pending-2",
    title: "Pengajuan: Turnamen Bola Voli Antar Dusun Semarak HUT RI",
    slug: "pengajuan-turnamen-bola-voli-hut-ri",
    excerpt:
      "Panitia karang taruna mengajukan liputan pembukaan turnamen bola voli antar dusun di Lapangan Desa Pringgodani.",
    categoryName: "Kegiatan Desa",
    submittedAt: "2026-08-06T08:15:00Z",
    authorName: "Bagus Setiawan (Karang Taruna)",
    coverUrl:
      "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=1200&q=80",
    contentBlocks: [
      {
        subHeading: "Antusiasme Ratusan Penonton",
        content:
          "Pertandingan perdana antara Dusun Krajan dan Dusun Mulyo berlangsung meriah disaksikan warga desa.",
      },
    ],
  },
];

export const MOCK_PENDING_UMKM: PendingUmkmSubmission[] = [
  {
    id: "umkm-pending-1",
    name: "Kripik Singkong Renyah Bu Ani",
    slug: "kripik-singkong-renyah-bu-ani",
    ownerName: "Ibu Ani Suprihatin",
    categoryName: "Kuliner",
    description:
      "Camilan kripik singkong aneka rasa (Balado, Keju, Pedas Manis) buatan olahan rumahan tanpa bahan pengawet.",
    phone: "081234111222",
    address: "Dusun Mulyo RT 01 / RW 03, Desa Pringgodani",
    submittedAt: "2026-08-05T14:20:00Z",
    coverUrl:
      "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=800&q=80",
    products: [
      {
        name: "Kripik Singkong Balado 200g",
        price: 15000,
        description: "Kripik renyah rasa balado pedas manis",
        imageUrl:
          "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
];

// Combine PENDING items into MOCK_ADMIN_NEWS so filtering by status PENDING in /admin/berita matches!
export const MOCK_ADMIN_NEWS: AdminNewsItem[] = [
  ...MOCK_PENDING_NEWS.map((n) => ({
    id: n.id,
    title: n.title,
    slug: n.slug,
    excerpt: n.excerpt,
    categoryName: n.categoryName,
    status: "PENDING" as const,
    publishedAt: n.submittedAt,
    coverUrl: n.coverUrl,
  })),
  ...MOCK_NEWS.map((n) => ({
    id: n.id,
    title: n.title,
    slug: n.slug,
    excerpt: n.summary,
    categoryName: n.categoryName,
    status: "PUBLISHED" as const,
    publishedAt: n.publishedAt,
    coverUrl: n.coverImage,
  })),
];

// Combine PENDING items into MOCK_ADMIN_UMKM so filtering by status PENDING in /admin/umkm matches!
export const MOCK_ADMIN_UMKM: AdminUmkmItem[] = [
  ...MOCK_PENDING_UMKM.map((u) => ({
    id: u.id,
    name: u.name,
    slug: u.slug,
    ownerName: u.ownerName,
    categoryName: u.categoryName,
    status: "PENDING" as const,
    phone: u.phone,
    address: u.address,
    coverUrl: u.coverUrl,
  })),
  ...MOCK_UMKM.map((u) => ({
    id: u.id,
    name: u.name,
    slug: u.slug,
    ownerName: u.ownerName,
    categoryName: u.category,
    status: "APPROVED" as const,
    phone: u.whatsappNumber,
    address: u.address,
    coverUrl: u.logo,
  })),
];

export const MOCK_ADMIN_MAP_LOCATIONS: AdminMapLocation[] = MOCK_FACILITIES.map(
  (f) => ({
    id: f.id,
    name: f.name,
    categoryId: f.category.id,
    categoryName: f.category.name,
    shortDescription: f.shortDescription || undefined,
    address: f.address || undefined,
    latitude: f.latitude,
    longitude: f.longitude,
    googleMapsUrl: f.googleMapsUrl || undefined,
    imageUrl: f.imageUrl || undefined,
  }),
);

export const MOCK_ADMIN_MAP_CATEGORIES: AdminMapCategory[] =
  MOCK_MAP_CATEGORIES.map((c) => ({
    id: c.id,
    name: c.name,
    slug: c.slug,
    icon: c.icon || "location_on",
    color: c.color || "#10B981",
  }));

export const MOCK_ADMIN_SETTINGS: AdminSettingsPayload = {
  website_name: "Desa Pringgodani",
  logo_url: "/images/logo-desa.png",
  favicon_url: "/favicon.ico",
  contact_email: "info@pringgodani.desa.id",
  contact_phone: "081234567890",
  address: "Jl. Raya Desa Pringgodani No. 1, Kec. Bantur, Kabupaten Malang",
  // Empty, not guessed — see settings.service.ts for why. Admin fills
  // these in via /admin/settings once the real accounts exist.
  social_facebook: "",
  social_instagram: "",
  social_youtube: "",
  social_tiktok: "",
  jumlah_dusun: 4,
};
