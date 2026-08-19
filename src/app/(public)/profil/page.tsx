import type { Metadata } from "next";
import { DesaService } from "@/entities/desa/api/desa.service";
import { UmkmService } from "@/entities/umkm/api/umkm.service";
import { ProfilPage } from "@/views/profil/profil-page";

export const metadata: Metadata = {
  title: "Profil Desa Pringgodani — Struktur Pemerintahan & Potensi Desa",
  description:
    "Profil lengkap Desa Pringgodani, Kecamatan Bantur, Kabupaten Malang: visi misi, sambutan kepala desa, statistik kependudukan, sejarah, dan potensi ekonomi lokal.",
  keywords: [
    "desa pringgodani",
    "profil desa pringgodani",
    "pringgodani bantur malang",
    "pemerintah desa pringgodani",
    "kepala desa pringgodani",
    "potensi desa pringgodani",
  ],
  alternates: {
    canonical: "/profil",
  },
  openGraph: {
    title: "Profil Desa Pringgodani — Kecamatan Bantur, Kabupaten Malang",
    description:
      "Profil lengkap Desa Pringgodani: visi misi, struktur pemerintahan, dan potensi ekonomi masyarakat.",
    url: "/profil",
  },
};

export const dynamic = "force-dynamic";

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
