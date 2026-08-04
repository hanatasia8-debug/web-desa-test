import { Hero } from "@/widgets/hero/hero";
import { WelcomeSection } from "./sections/welcome-section";
import { StatsSection } from "./sections/stats-section";
import { UmkmSection } from "./sections/umkm-section";
import { NewsSection } from "./sections/news-section";
import { MapPreviewSection } from "./sections/map-preview-section";
import { CommunityCtaSection } from "./sections/community-cta-section";

import { DesaService } from "@/entities/desa/api/desa.service";
import { UmkmService } from "@/entities/umkm/api/umkm.service";
import { BeritaService } from "@/entities/berita/api/berita.service";
import { FasilitasService } from "@/entities/fasilitas/api/fasilitas.service";
import type { VillageStatsDto } from "@/entities/desa/model/types";

const DEFAULT_STATS: VillageStatsDto = {
  umkmCount: 0,
  productCount: 0,
  newsCount: 0,
  dusunCount: 0,
};

/**
 * `pages/home` — the actual Home view, composed here and rendered thinly
 * from `app/(public)/page.tsx`. Fetches every section's data in parallel;
 * each call goes through its entity Service → Route Handler → Prisma,
 * never touching the database directly from this component.
 */
export async function HomePage() {
  const [profileResult, umkmResult, beritaResult, kantorDesaResult] =
    await Promise.allSettled([
      DesaService.getProfileWithStats(),
      UmkmService.getLatestPublished({ limit: 3 }),
      BeritaService.getLatestPublished({ limit: 3 }),
      FasilitasService.getFacilities({ category: "KANTOR_DESA", limit: 1 }),
    ]);

  const profile =
    profileResult.status === "fulfilled" ? profileResult.value.profile : null;
  const stats =
    profileResult.status === "fulfilled"
      ? profileResult.value.stats
      : DEFAULT_STATS;
  const umkmItems =
    umkmResult.status === "fulfilled" ? umkmResult.value.items : [];
  const newsItems =
    beritaResult.status === "fulfilled" ? beritaResult.value.items : [];
  const kantorDesa =
    kantorDesaResult.status === "fulfilled"
      ? (kantorDesaResult.value.items[0] ?? null)
      : null;

  return (
    <>
      <Hero />
      <WelcomeSection profile={profile} />
      <StatsSection stats={stats} />
      <UmkmSection items={umkmItems} />
      <NewsSection items={newsItems} />
      <MapPreviewSection kantorDesa={kantorDesa} />
      <CommunityCtaSection />
    </>
  );
}
