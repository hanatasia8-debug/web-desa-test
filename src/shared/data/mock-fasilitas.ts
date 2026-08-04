import type { FacilityDto } from "@/entities/fasilitas/model/types";

export const MOCK_FACILITIES: FacilityDto[] = [
  {
    id: "fac-1",
    name: "Kantor Desa Pringgodani",
    category: "KANTOR_DESA",
    address: "Desa Pringgodani",
    latitude: -7.2512,
    longitude: 110.1534,
    image: "facilities/facility_seed_kantor-desa-pringgodani.webp",
  },
  {
    id: "fac-2",
    name: "SD Negeri Pringgodani 1",
    category: "SEKOLAH",
    address: "Desa Pringgodani",
    latitude: -7.2485,
    longitude: 110.1567,
    image: "facilities/facility_seed_sd-negeri-pringgodani-1.webp",
  },
  {
    id: "fac-3",
    name: "Masjid Al-Ikhlas Pringgodani",
    category: "TEMPAT_IBADAH",
    address: "Desa Pringgodani",
    latitude: -7.2498,
    longitude: 110.1589,
    image: "facilities/facility_seed_masjid-al-ikhlas-pringgodani.webp",
  },
  {
    id: "fac-4",
    name: "Puskesmas Pembantu Pringgodani",
    category: "FASILITAS_KESEHATAN",
    address: "Desa Pringgodani",
    latitude: -7.2521,
    longitude: 110.1612,
    image: "facilities/facility_seed_puskesmas-pembantu-pringgodani.webp",
  },
  {
    id: "fac-5",
    name: "Bukit Pringgo View Point",
    category: "DESTINASI_WISATA",
    address: "Desa Pringgodani",
    latitude: -7.2456,
    longitude: 110.1645,
    image: "facilities/facility_seed_bukit-pringgo-view-point.webp",
  },
];
