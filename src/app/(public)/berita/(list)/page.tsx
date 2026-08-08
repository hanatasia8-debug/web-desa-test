import type { Metadata } from "next";
import { BeritaListPage } from "@/views/berita-list/berita-list-page";

export const metadata: Metadata = {
  title: "Kabar & Berita",
  description:
    "Baca warta terkini, pengumuman resmi, kegiatan warga, dan kabar pembangunan dari Pemerintah Desa Pringgodani.",
};

export default function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  return <BeritaListPage searchParams={searchParams} />;
}
