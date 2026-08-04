import { BeritaListPage } from "@/views/berita-list/berita-list-page";

export default function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  return <BeritaListPage searchParams={searchParams} />;
}
