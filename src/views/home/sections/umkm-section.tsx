import Link from "next/link";
import { Icon } from "@/shared/ui/icon";
import { UmkmCard } from "@/entities/umkm/ui/umkm-card";
import type { UmkmListItemDto } from "@/entities/umkm/model/types";

interface UmkmSectionProps {
  items: UmkmListItemDto[];
}

export function UmkmSection({ items }: UmkmSectionProps) {
  return (
    <section className="max-w-container-max py-section-padding px-gutter mx-auto">
      <div className="mb-stack-lg scroll-reveal flex flex-col items-end justify-between gap-4 md:flex-row">
        <div className="max-w-2xl">
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Produk Unggulan Desa
          </h2>
          <p className="font-body-base text-body-base text-on-surface-variant">
            Mendukung pertumbuhan ekonomi lokal melalui pemberdayaan pelaku
            usaha kreatif Pringgodani.
          </p>
        </div>
        <Link
          href="/umkm"
          className="text-secondary font-label-sm flex items-center gap-1 font-bold hover:underline"
        >
          Lihat Semua UMKM <Icon name="chevron_right" />
        </Link>
      </div>

      {items.length === 0 ? (
        <p className="text-on-surface-variant font-body-base py-12 text-center">
          Belum ada UMKM yang terdaftar.
        </p>
      ) : (
        <div className="scrollbar-hide flex snap-x snap-mandatory gap-8 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {items.map((umkm) => (
            <div
              key={umkm.id}
              className="w-[85vw] flex-shrink-0 snap-center md:w-auto"
            >
              <UmkmCard umkm={umkm} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
