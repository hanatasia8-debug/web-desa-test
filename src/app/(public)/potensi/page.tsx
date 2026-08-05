import type { Metadata } from "next";
import { PotensiService } from "@/entities/potensi/api/potensi.service";
import { PotensiPage } from "@/views/potensi/potensi-page";

export const metadata: Metadata = {
  title: "Potensi Desa Pringgodani",
  description:
    "Direktori potensi unggulan Desa Pringgodani untuk pariwisata, pertanian, dan kerajinan.",
};

export default async function Page() {
  const result = await PotensiService.getList();
  return <PotensiPage items={result.items} />;
}
