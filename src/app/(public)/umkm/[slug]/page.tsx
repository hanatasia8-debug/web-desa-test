import { UmkmDetailPage } from "@/views/umkm-detail/umkm-detail-page";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <UmkmDetailPage slug={slug} />;
}
