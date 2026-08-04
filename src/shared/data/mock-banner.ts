import type { BannerListResponse } from "@/entities/banner/model/types";

export const MOCK_BANNERS: BannerListResponse = {
  items: [
    {
      id: "banner-1",
      title: "Selamat Datang di Desa Pringgodani",
      imageUrl: "banners/banner_seed_welcome.webp",
      linkUrl: null,
      order: 0,
    },
    {
      id: "banner-2",
      title: "Ayo Daftarkan UMKM Anda",
      imageUrl: "banners/banner_seed_umkm.webp",
      linkUrl: "/submit/umkm",
      order: 1,
    },
  ],
};
