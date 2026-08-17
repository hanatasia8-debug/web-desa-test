import type { Metadata } from "next";
import { ProdukListPage } from "@/views/produk-list/produk-list-page";

export const metadata: Metadata = {
  title: "Katalog Produk UMKM — Desa Pringgodani",
  description:
    "Jelajahi produk-produk unggulan karya pelaku UMKM Desa Pringgodani. Pesan langsung dengan penjual melalui WhatsApp.",
};

export const dynamic = "force-dynamic";

export default function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  return <ProdukListPage searchParams={searchParams} />;
}
