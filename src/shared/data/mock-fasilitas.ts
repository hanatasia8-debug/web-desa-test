import type {
  MapCategoryDto,
  MapLocationDto,
} from "@/entities/fasilitas/model/types";

export const MOCK_MAP_CATEGORIES: MapCategoryDto[] = [
  {
    id: "cat-1",
    name: "Kantor Desa",
    slug: "kantor-desa",
    icon: "account_balance",
    color: "#3B82F6",
  },
  {
    id: "cat-2",
    name: "Pendidikan",
    slug: "pendidikan",
    icon: "school",
    color: "#F59E0B",
  },
  {
    id: "cat-3",
    name: "Ibadah",
    slug: "ibadah",
    icon: "mosque",
    color: "#8B5CF6",
  },
  {
    id: "cat-4",
    name: "Kesehatan",
    slug: "kesehatan",
    icon: "medical_services",
    color: "#10B981",
  },
  {
    id: "cat-5",
    name: "Wisata & Potensi",
    slug: "wisata-alam",
    icon: "park",
    color: "#EC4899",
  },
];

export const MOCK_FACILITIES: MapLocationDto[] = [
  {
    id: "fac-1",
    mapCategoryId: "cat-1",
    name: "Kantor Balai Desa Pringgodani",
    shortDescription:
      "Pusat balai desa dan pelayanan administrasi warga Pringgodani",
    imageUrl:
      "https://pringgondaniblog.wordpress.com/wp-content/uploads/2017/07/dsc_0607.jpg",
    address: "Jl. Raya Desa Pringgodani No. 1, Dusun Krajan",
    latitude: -8.2811,
    longitude: 112.5664,
    googleMapsUrl: "https://maps.google.com/?q=-8.2811,112.5664",
    category: MOCK_MAP_CATEGORIES[0],
  },
  {
    id: "fac-2",
    mapCategoryId: "cat-2",
    name: "SD Negeri 01 Pringgodani",
    shortDescription: "Sekolah dasar negeri utama Pringgodani di Dusun Krajan",
    imageUrl:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80",
    address: "Dusun Krajan RT 05 RW 01, Desa Pringgodani",
    latitude: -8.2785,
    longitude: 112.5642,
    googleMapsUrl: "https://maps.google.com/?q=-8.2785,112.5642",
    category: MOCK_MAP_CATEGORIES[1],
  },
  {
    id: "fac-3",
    mapCategoryId: "cat-2",
    name: "SD Negeri 02 Pringgodani",
    shortDescription: "Lembaga sekolah dasar negeri di wilayah Dusun Sengon",
    imageUrl:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
    address: "Dusun Sengon RT 12 RW 02, Desa Pringgodani",
    latitude: -8.2845,
    longitude: 112.562,
    googleMapsUrl: "https://maps.google.com/?q=-8.2845,112.5620",
    category: MOCK_MAP_CATEGORIES[1],
  },
  {
    id: "fac-4",
    mapCategoryId: "cat-2",
    name: "MI & MTs Pringgodani",
    shortDescription:
      "Madrasah Ibtidaiyah dan Tsanawiyah terpadu Desa Pringgodani",
    imageUrl:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80",
    address: "Dusun Sumberbendo RT 18, Desa Pringgodani",
    latitude: -8.2825,
    longitude: 112.569,
    googleMapsUrl: "https://maps.google.com/?q=-8.2825,112.5690",
    category: MOCK_MAP_CATEGORIES[1],
  },
  {
    id: "fac-5",
    mapCategoryId: "cat-4",
    name: "Puskesmas Pembantu (Pustu) Pringgodani",
    shortDescription: "Pusat pelayanan kesehatan dasar dan posyandu warga desa",
    imageUrl:
      "https://pringgondaniblog.wordpress.com/wp-content/uploads/2017/08/img-20170809-wa0009.jpg",
    address: "Dusun Krajan RT 02 RW 01, Desa Pringgodani",
    latitude: -8.2802,
    longitude: 112.568,
    googleMapsUrl: "https://maps.google.com/?q=-8.2802,112.5680",
    category: MOCK_MAP_CATEGORIES[3],
  },
  {
    id: "fac-6",
    mapCategoryId: "cat-3",
    name: "Masjid Jami' Pringgodani",
    shortDescription:
      "Masjid utama tempat ibadah sholat Jumat dan pengajian warga",
    imageUrl:
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1000&q=80",
    address: "Dusun Sumberbendo RT 20, Desa Pringgodani",
    latitude: -8.2835,
    longitude: 112.568,
    googleMapsUrl: "https://maps.google.com/?q=-8.2835,112.5680",
    category: MOCK_MAP_CATEGORIES[2],
  },
  {
    id: "fac-7",
    mapCategoryId: "cat-5",
    name: "Perkebunan Tebu Desa Pringgodani",
    shortDescription:
      "Hamparan komoditas pertanian utama dan industri tebu warga",
    imageUrl:
      "https://pringgondaniblog.wordpress.com/wp-content/uploads/2017/07/dsc_0607.jpg",
    address: "Dusun Sumber Walo, Desa Pringgodani",
    latitude: -8.2755,
    longitude: 112.5605,
    googleMapsUrl: "https://maps.google.com/?q=-8.2755,112.5605",
    category: MOCK_MAP_CATEGORIES[4],
  },
  {
    id: "fac-8",
    mapCategoryId: "cat-5",
    name: "Posko KKN & Pusat UMKM Pringgodani",
    shortDescription: "Pusat pembinaan UMKM dan galeri produk warga desa",
    imageUrl:
      "https://pringgondaniblog.wordpress.com/wp-content/uploads/2017/07/dsc_0626.jpg",
    address: "Dusun Krajan, Desa Pringgodani",
    latitude: -8.284,
    longitude: 112.567,
    googleMapsUrl: "https://maps.google.com/?q=-8.2840,112.5670",
    category: MOCK_MAP_CATEGORIES[4],
  },
];
