import type { Metadata } from "next";
import { BeritaService } from "@/entities/berita/api/berita.service";
import { BeritaDetailPage } from "@/views/berita-detail/berita-detail-page";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const news = await BeritaService.getBySlug(slug);

  if (!news) {
    return {
      title: "Berita Tidak Ditemukan",
    };
  }

  return {
    title: news.title,
    description: news.summary
      ? news.summary.substring(0, 160)
      : "Baca selengkapnya warta resmi dari Pemerintah Desa Pringgodani.",
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <BeritaDetailPage slug={slug} />;
}
