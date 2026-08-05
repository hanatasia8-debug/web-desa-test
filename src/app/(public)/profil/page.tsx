import type { Metadata } from "next";
import { DesaService } from "@/entities/desa/api/desa.service";
import { ProfilPage } from "@/views/profil/profil-page";

export const metadata: Metadata = {
  title: "Profil Desa Pringgodani",
  description:
    "Informasi profil Desa Pringgodani, statistik desa, kegiatan terbaru, dan timeline pembangunan.",
};

export default async function Page() {
  const { profile, stats } = await DesaService.getProfileWithStats();

  return <ProfilPage profile={profile} stats={stats} />;
}
