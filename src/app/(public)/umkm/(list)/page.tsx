import type { Metadata } from "next";
import { UmkmListPage } from "@/views/umkm-list/umkm-list-page";

export const metadata: Metadata = {
  title: "Katalog UMKM & Produk Desa",
  description:
    "Temukan produk lokal unggulan, kerajinan kreatif, dan aneka kuliner khas buatan warga Desa Pringgodani. Dukung ekonomi warga!",
};

export default function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  return <UmkmListPage searchParams={searchParams} />;
}
