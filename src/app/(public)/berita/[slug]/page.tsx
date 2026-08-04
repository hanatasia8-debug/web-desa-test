import { BeritaDetailPage } from "@/views/berita-detail/berita-detail-page";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <BeritaDetailPage slug={slug} />;
}
