import { notFound } from "next/navigation";

import { UmkmService } from "@/entities/umkm/api/umkm.service";
import { UmkmBreadcrumb } from "./sections/umkm-breadcrumb";
import { UmkmHero } from "./sections/umkm-hero";
import { UmkmProductsSection } from "./sections/umkm-products-section";
import { UmkmInfoSidebar } from "./sections/umkm-info-sidebar";
import { UmkmGallerySection } from "./sections/umkm-gallery-section";
import { RelatedPotentialCard } from "./sections/related-potential-card";
import { SimilarUmkmSection } from "./sections/similar-umkm-section";

interface UmkmDetailPageProps {
  slug: string;
}

/**
 * `views/umkm-detail` — the /umkm/[slug] view.
 *
 * An unknown slug resolves to `null` from the Service and renders the shared
 * `app/not-found.tsx` through Next's `notFound()` — no bespoke error page.
 * Everything flows Page → Service → (API or mock data source); no data access
 * happens in `app/`.
 */
export async function UmkmDetailPage({ slug }: UmkmDetailPageProps) {
  const umkm = await UmkmService.getBySlug(slug);
  if (!umkm) notFound();

  // "UMKM Serupa" must never take the whole profile down with it.
  const similarResult = await UmkmService.getSimilar({
    category: umkm.category,
    excludeId: umkm.id,
    limit: 3,
  }).catch((err) => {
    console.error("Gagal memuat UMKM serupa:", err);
    return null;
  });

  return (
    <div className="pb-section-padding pt-24">
      <div className="max-w-container-max px-gutter mx-auto">
        <UmkmBreadcrumb name={umkm.name} />

        <div className="bg-surface-container-lowest border-outline-variant/20 overflow-hidden rounded-xl border shadow-sm">
          <UmkmHero umkm={umkm} />

          <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-3">
            <div className="space-y-8 md:col-span-2">
              <section>
                <h2 className="font-headline-md text-headline-md text-primary border-outline-variant/30 mb-4 border-b pb-3">
                  Tentang Usaha
                </h2>
                <p className="font-body-base text-on-surface-variant leading-relaxed">
                  {umkm.description}
                </p>
              </section>

              <UmkmProductsSection
                products={umkm.products}
                umkmName={umkm.name}
                phone={umkm.whatsappNumber || umkm.phone || ""}
              />
            </div>

            <UmkmInfoSidebar umkm={umkm} />
          </div>
        </div>

        <UmkmGallerySection images={umkm.gallery} umkmName={umkm.name} />

        {umkm.potential && <RelatedPotentialCard potential={umkm.potential} />}

        <SimilarUmkmSection
          items={similarResult?.items ?? []}
          category={umkm.category}
        />
      </div>
    </div>
  );
}
