import type { Metadata } from "next";
import { FasilitasService } from "@/entities/fasilitas/api/fasilitas.service";
import { PetaPage } from "@/views/peta/peta-page";

export const metadata: Metadata = {
  title: "Peta Interaktif UMKM — Desa Pringgodani",
  description:
    "Peta interaktif persebaran lokasi UMKM, gerai produk olahan, dan sentra kerajinan Desa Pringgodani.",
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
