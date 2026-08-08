import type { Metadata } from "next";
import { UmkmService } from "@/entities/umkm/api/umkm.service";
import { UmkmDetailPage } from "@/views/umkm-detail/umkm-detail-page";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const umkm = await UmkmService.getBySlug(slug);

  if (!umkm) {
    return {
      title: "UMKM Tidak Ditemukan",
    };
  }

  return {
    title: `${umkm.name} — UMKM`,
    description: umkm.description
      ? umkm.description.substring(0, 160)
      : "Profil usaha, lokasi, kontak WhatsApp, dan katalog produk UMKM kreatif di Desa Pringgodani.",
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <UmkmDetailPage slug={slug} />;
}
