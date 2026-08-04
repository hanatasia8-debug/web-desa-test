import type {
  VillageProfileDto,
  VillageStatsDto,
} from "@/entities/desa/model/types";

export const MOCK_PROFILE: VillageProfileDto = {
  villageName: "Pringgodani",
  headGreeting:
    "Selamat datang di website resmi Desa Pringgodani. Semoga informasi yang kami sajikan bermanfaat bagi warga dan pengunjung.",
  headPhoto: "profile/kepala_desa_pringgodani.webp",
  headName: "Ki Suryo Pringgo",
  headPosition: "Kepala Desa",
  historyText:
    "Desa Pringgodani berdiri sejak masa kolonial dan berkembang menjadi desa agraris yang dikenal dengan hasil pertanian dan kerajinan warganya.",
  historyExcerpt:
    "Desa Pringgodani berdiri sejak masa kolonial dan berkembang menjadi desa agraris yang dikenal dengan hasil pertanian dan kerajinan warganya.",
  vision: "Mewujudkan Desa Pringgodani yang mandiri, maju, dan sejahtera.",
  missions: [
    "Meningkatkan kualitas pelayanan publik berbasis digital",
    "Mendorong pertumbuhan UMKM dan potensi desa",
    "Menjaga kelestarian lingkungan dan budaya lokal",
  ],
  officials: [
    {
      name: "Ki Suryo Pringgo",
      position: "Kepala Desa",
      photo: "profile/officials/kepala_desa.webp",
    },
    {
      name: "Siti Handayani",
      position: "Sekretaris Desa",
      photo: "profile/officials/sekretaris.webp",
    },
    {
      name: "Bagas Wirawan",
      position: "Kaur Keuangan",
      photo: "profile/officials/kaur_keuangan.webp",
    },
  ],
};

export const MOCK_STATS: VillageStatsDto = {
  umkmCount: 4,
  productCount: 5,
  newsCount: 15,
  dusunCount: 8,
};
