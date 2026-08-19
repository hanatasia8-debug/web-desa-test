import type { Metadata } from "next";
import { FasilitasService } from "@/entities/fasilitas/api/fasilitas.service";
import { PetaPage } from "@/views/peta/peta-page";

export const metadata: Metadata = {
  title: "Peta Interaktif UMKM & Potensi Desa Pringgodani — Navigasi Lokasi Usaha",
  description:
    "Peta digital interaktif persebaran lokasi UMKM, gerai produk olahan pangan, sentra kerajinan, dan titik fasilitas umum di Desa Pringgodani, Kecamatan Bantur, Kabupaten Malang.",
  keywords: [
    "peta desa pringgodani",
    "lokasi umkm pringgodani",
    "peta interaktif pringgodani",
    "desa pringgodani bantur malang",
    "alamat umkm pringgodani",
    "rute desa pringgodani",
  ],
  alternates: {
    canonical: "/peta",
  },
  openGraph: {
    title: "Peta Interaktif UMKM & Potensi Desa Pringgodani",
    description:
      "Jelajahi peta persebaran UMKM, sentra kerajinan, dan produk olahan warga Desa Pringgodani secara visual dan akurat.",
    url: "/peta",
  },
};

export default async function PetaRoutePage() {
  const [locationsRes, categoriesRes] = await Promise.all([
    FasilitasService.getFacilities(),
    FasilitasService.getCategories(),
  ]);

  return (
    <PetaPage
      initialLocations={locationsRes.items}
      categories={categoriesRes.items}
    />
  );
}
