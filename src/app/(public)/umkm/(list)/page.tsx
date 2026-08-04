import { UmkmListPage } from "@/views/umkm-list/umkm-list-page";

export default function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  return <UmkmListPage searchParams={searchParams} />;
}
