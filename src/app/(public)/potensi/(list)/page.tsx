import type { Metadata } from "next";
import { PotensiService } from "@/entities/potensi/api/potensi.service";
import { PotensiPage } from "@/views/potensi/potensi-page";

export const metadata: Metadata = {
  title: "Potensi Desa Pringgodani",
  description:
    "Direktori potensi unggulan Desa Pringgodani untuk pariwisata, pertanian, dan kerajinan.",
};

export const revalidate = 300;

/**
 * Lives inside a `(list)` route group, sibling to `[slug]`, so that
 * `loading.tsx` (see this same folder) only wraps the listing route in a
 * Suspense boundary — not the detail route, whose `notFound()` needs to
 * respond with a real 404 rather than get streamed underneath a loading UI
 * that already committed an HTTP 200. See `berita/(list)/loading.tsx` for
 * the full explanation; this mirrors that fix.
 */
export default async function Page() {
  const result = await PotensiService.getList();
  return <PotensiPage items={result.items} />;
}
