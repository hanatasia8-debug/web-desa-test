import { getPotensiCategoryMeta } from "@/entities/potensi/model/category-meta";
import type { PotensiDetailDto } from "@/entities/potensi/model/types";
import { FallbackImage } from "@/shared/ui/fallback-image";
import { Icon } from "@/shared/ui/icon";

interface PotensiDetailPageProps {
  item: PotensiDetailDto;
}

export function PotensiDetailPage({ item }: PotensiDetailPageProps) {
  const categoryMeta = getPotensiCategoryMeta(item.category);

  return (
    <div className="pb-section-padding pt-24">
      <div className="max-w-container-max px-gutter mx-auto space-y-10">
        <header className="space-y-6">
          <div className="bg-secondary-fixed text-secondary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
            <Icon name={categoryMeta.icon} className="text-base" />
            {categoryMeta.label}
          </div>
          <div className="space-y-4">
            <h1 className="font-headline-lg text-headline-lg text-primary">
              {item.title}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
              {item.overview}
            </p>
          </div>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1.45fr_0.95fr]">
          <div className="space-y-8">
            <div className="border-outline-variant/20 bg-surface-container-lowest overflow-hidden rounded-[2rem] border shadow-sm">
              <FallbackImage
                src={item.coverImage}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>

            <section className="border-outline-variant/20 bg-surface-container-lowest space-y-4 rounded-[2rem] border p-8 shadow-sm">
              <h2 className="font-headline-md text-headline-md text-primary">
                Mengapa Potensi Ini Penting
              </h2>
              <p className="font-body-base text-body-base text-on-surface-variant leading-relaxed">
                {item.title} merupakan bagian dari kekayaan Desa Pringgodani
                yang mendukung pemulihan ekonomi lokal dan memperkuat identitas
                budaya.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="bg-surface rounded-3xl p-5">
                  <h3 className="text-on-surface font-semibold">
                    Dukungan UMKM
                  </h3>
                  <p className="text-body-base text-on-surface-variant mt-2">
                    Potensi ini memberi ruang bagi usaha lokal untuk tumbuh dan
                    berkolaborasi dalam ekosistem desa.
                  </p>
                </div>
                <div className="bg-surface rounded-3xl p-5">
                  <h3 className="text-on-surface font-semibold">
                    Kunjungan Wisata
                  </h3>
                  <p className="text-body-base text-on-surface-variant mt-2">
                    Menarik wisatawan yang ingin mengenal tradisi, alam, dan
                    produk khas Pringgodani.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="border-outline-variant/20 bg-surface-container-lowest rounded-[2rem] border p-6 shadow-sm">
              <p className="font-label-sm text-on-surface-variant tracking-[0.18em] uppercase">
                Sekilas Potensi
              </p>
              <div className="text-body-base text-on-surface-variant mt-6 space-y-4">
                <div>
                  <p className="text-on-surface font-semibold">Kategori</p>
                  <p>{categoryMeta.label}</p>
                </div>
                <div>
                  <p className="text-on-surface font-semibold">Lokasi</p>
                  <p>Desa Pringgodani</p>
                </div>
                <div>
                  <p className="text-on-surface font-semibold">Fokus</p>
                  <p>{categoryMeta.label} dan pemberdayaan masyarakat</p>
                </div>
              </div>
            </div>

            <div className="border-outline-variant/20 bg-surface-container-lowest rounded-[2rem] border p-6 shadow-sm">
              <p className="font-label-sm text-on-surface-variant tracking-[0.18em] uppercase">
                Info Cepat
              </p>
              <ul className="text-body-base text-on-surface-variant mt-6 space-y-3">
                <li className="flex items-center gap-3">
                  <Icon name="check_circle" className="text-primary" />
                  Berpotensi mengembangkan ekonomi lokal
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="check_circle" className="text-primary" />
                  Cocok untuk kunjungan edukasi dan wisata
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="check_circle" className="text-primary" />
                  Mendukung pelestarian budaya desa
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
