import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { PotensiService } from "@/entities/potensi/api/potensi.service";
import { PotensiDetailPage } from "@/views/potensi/potensi-detail-page";

export const revalidate = 300;

interface PotensiDetailRouteProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PotensiDetailRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const item = await PotensiService.getBySlug(slug);
  if (!item) return { title: "Potensi tidak ditemukan" };

  return {
    title: item.title,
    description: item.overview,
  };
}

export default async function Page({ params }: PotensiDetailRouteProps) {
  const { slug } = await params;
  const item = await PotensiService.getBySlug(slug);
  if (!item) notFound();

  return <PotensiDetailPage item={item} />;
}
