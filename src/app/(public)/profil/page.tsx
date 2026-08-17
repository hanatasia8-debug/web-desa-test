import type { Metadata } from "next";
import { DesaService } from "@/entities/desa/api/desa.service";
import { UmkmService } from "@/entities/umkm/api/umkm.service";
import { ProfilPage } from "@/views/profil/profil-page";

export const metadata: Metadata = {
  title: "Profil Desa Pringgodani",
  description:
    "Informasi profil Desa Pringgodani: sambutan kepala desa, statistik, sejarah, visi misi, dan struktur pemerintahan.",
};

export const revalidate = 300;

export default async function Page() {
  const [{ profile, stats }, categoriesResult] = await Promise.all([
    DesaService.getProfileWithStats(),
    UmkmService.getCategories().catch((err) => {
      // "Sektor Ekonomi Dominan" must not take the whole profile page down.
      console.error("Gagal memuat kategori UMKM untuk halaman profil:", err);
      return { items: [] };
    }),
  ]);

  const topUmkmCategories = [...categoriesResult.items]
    .sort((a, b) => b.umkmCount - a.umkmCount)
    .slice(0, 3);

  return (
    <ProfilPage
      profile={profile}
      stats={stats}
    />
  );
}
