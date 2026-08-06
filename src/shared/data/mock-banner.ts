import type { BannerListResponse } from "@/entities/banner/model/types";

export const MOCK_BANNERS: BannerListResponse = {
  items: [
    {
      id: "banner-1",
      title: "Selamat Datang di Desa Pringgodani",
      imageUrl:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80",
      linkUrl: null,
      order: 0,
    },
    {
      id: "banner-2",
      title: "Ayo Daftarkan UMKM Anda",
      imageUrl:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80",
      linkUrl: "/umkm/daftar",
      order: 1,
    },
  ],
};
