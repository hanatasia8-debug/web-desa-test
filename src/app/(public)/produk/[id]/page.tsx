import type { Metadata } from "next";
import { ProdukDetailPage } from "@/views/produk-detail/produk-detail-page";
import { ProdukService } from "@/entities/produk/api/produk.service";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = await ProdukService.getById(id);

  if (!product) {
    return {
      title: "Produk Tidak Ditemukan",
    };
  }

  return {
    title: `${product.name} — Lokal Pringgodani`,
    description: product.description || `Produk unggulan dari ${product.umkm?.name || "Desa Pringgodani"}`,
  };
}

export const dynamic = "force-dynamic";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ProdukDetailPage id={id} />;
}
