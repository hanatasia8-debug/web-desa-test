import Link from "next/link";
import { Icon } from "@/shared/ui/icon";
import { FallbackImage } from "@/shared/ui/fallback-image";
import type { FacilityDto } from "@/entities/fasilitas/model/types";

interface MapPreviewSectionProps {
  /** The "Kantor Desa" facility, if one exists, for the pin overlay label. */
  kantorDesa: FacilityDto | null;
}

/**
 * GUARDRAIL: this stays a static preview image with a single label overlay
 * — never a real interactive Leaflet map, and never UMKM markers. The full
 * interactive map (facilities only) lives at `/peta` (built later in this
 * Tahap).
 */
export function MapPreviewSection({ kantorDesa }: MapPreviewSectionProps) {
  return (
    <section className="py-section-padding">
      <div className="max-w-container-max px-gutter mx-auto">
        <div className="mb-stack-lg scroll-reveal">
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Peta Fasilitas Desa
          </h2>
          <p className="font-body-base text-body-base text-on-surface-variant">
            Temukan lokasi kantor desa, sekolah, dan fasilitas publik lainnya.
          </p>
        </div>
        <div className="border-outline-variant/30 scroll-reveal h-[500px] w-full overflow-hidden rounded-3xl border shadow-xl">
          <div className="bg-surface-container relative flex h-full w-full items-center justify-center">
            <FallbackImage
              src={kantorDesa?.imageUrl}
              alt="Peta Desa Pringgodani"
              className="h-full w-full object-cover opacity-80"
              fallbackIcon="map"
            />
            <div className="from-surface/40 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent" />
            {kantorDesa && (
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <div className="bg-surface border-outline-variant/10 flex items-center gap-3 rounded-xl border p-4 shadow-lg">
                  <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full">
                    <Icon name="apartment" />
                  </div>
                  <div>
                    <div className="font-label-sm font-bold">
                      {kantorDesa.name}
                    </div>
                    <div className="text-on-surface-variant text-xs">
                      Pusat Administrasi
                    </div>
                  </div>
                </div>
              </div>
            )}
            <Link
              href="/peta"
              className="bg-primary text-on-primary absolute right-10 bottom-10 flex items-center gap-2 rounded-full px-8 py-3 font-bold shadow-2xl transition-all hover:scale-105"
            >
              <Icon name="map" /> Buka Peta Interaktif
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
