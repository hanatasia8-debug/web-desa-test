export interface PotensiListItemDto {
  id: string;
  title: string;
  slug: string;
  category: string;
  overview: string;
  coverImage: string;
}

export const MOCK_POTENSI: PotensiListItemDto[] = [
  {
    id: "pot-1",
    title: "Pertanian Padi Organik",
    slug: "pertanian-padi-organik",
    category: "PERTANIAN",
    overview:
      "Sentra padi organik dengan sistem irigasi tradisional yang terjaga.",
    coverImage: "potentials/covers/potential_seed_pertanian-padi-organik.webp",
  },
  {
    id: "pot-2",
    title: "Wisata Bukit Pringgo",
    slug: "wisata-bukit-pringgo",
    category: "PARIWISATA",
    overview:
      "Destinasi wisata alam dengan panorama perbukitan dan udara sejuk.",
    coverImage: "potentials/covers/potential_seed_wisata-bukit-pringgo.webp",
  },
  {
    id: "pot-3",
    title: "Kerajinan Anyaman Bambu",
    slug: "kerajinan-anyaman-bambu",
    category: "KERAJINAN",
    overview: "Kerajinan anyaman bambu turun-temurun khas Dusun Krajan.",
    coverImage: "potentials/covers/potential_seed_kerajinan-anyaman-bambu.webp",
  },
];
