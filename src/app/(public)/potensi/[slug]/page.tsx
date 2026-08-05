import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { PotensiService } from "@/entities/potensi/api/potensi.service";
import { PotensiDetailPage } from "@/views/potensi/potensi-detail-page";

interface PotensiDetailRouteParams {
  slug: string;
}

export async function generateMetadata({
  params,
}: {
  params: PotensiDetailRouteParams;
}): Promise<Metadata> {
  const item = await PotensiService.getBySlug(params.slug);
  if (!item) return { title: "Potensi tidak ditemukan" };

  return {
    title: item.title,
    description: item.overview,
  };
}

export default async function Page({
  params,
}: {
  params: PotensiDetailRouteParams;
}) {
  const item = await PotensiService.getBySlug(params.slug);
  if (!item) notFound();

  return <PotensiDetailPage item={item} />;
}
