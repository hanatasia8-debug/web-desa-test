import type { UmkmListItemDto } from "@/entities/umkm/model/types";

function daysAgo(days: number): string {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
}

export const MOCK_UMKM: UmkmListItemDto[] = [
  {
    id: "umkm-1",
    name: "Keripik Singkong Bu Marni",
    slug: "keripik-singkong-bu-marni",
    category: "KULINER",
    description:
      "Keripik Singkong Bu Marni adalah salah satu UMKM binaan Desa Pringgodani yang telah berjalan turun-temurun.",
    logo: "umkm/logos/umkm_seed_keripik-singkong-bu-marni.webp",
    whatsappNumber: "6281234500000",
    publishedAt: daysAgo(10),
  },
  {
    id: "umkm-2",
    name: "Anyaman Bambu Pak Slamet",
    slug: "anyaman-bambu-pak-slamet",
    category: "KERAJINAN_SOUVENIR",
    description:
      "Anyaman Bambu Pak Slamet adalah salah satu UMKM binaan Desa Pringgodani yang telah berjalan turun-temurun.",
    logo: "umkm/logos/umkm_seed_anyaman-bambu-pak-slamet.webp",
    whatsappNumber: "6281234500000",
    publishedAt: daysAgo(15),
  },
  {
    id: "umkm-3",
    name: "Warung Kopi Bukit Pringgo",
    slug: "warung-kopi-bukit-pringgo",
    category: "KULINER",
    description:
      "Warung Kopi Bukit Pringgo adalah salah satu UMKM binaan Desa Pringgodani yang telah berjalan turun-temurun.",
    logo: "umkm/logos/umkm_seed_warung-kopi-bukit-pringgo.webp",
    whatsappNumber: "6281234500000",
    publishedAt: daysAgo(20),
  },
  {
    id: "umkm-4",
    name: "Konveksi Batik Pringgodani",
    slug: "konveksi-batik-pringgodani",
    category: "FASHION",
    description:
      "Konveksi Batik Pringgodani adalah salah satu UMKM binaan Desa Pringgodani yang telah berjalan turun-temurun.",
    logo: "umkm/logos/umkm_seed_konveksi-batik-pringgodani.webp",
    whatsappNumber: "6281234500000",
    publishedAt: daysAgo(25),
  },
];
