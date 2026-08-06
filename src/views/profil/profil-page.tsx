import Link from "next/link";
import { Icon } from "@/shared/ui/icon";
import { FallbackImage } from "@/shared/ui/fallback-image";
import type {
  VillageProfileDto,
  VillageStatsDto,
} from "@/entities/desa/model/types";
import type { UmkmCategoryDto } from "@/entities/umkm/model/types";

interface ProfilPageProps {
  profile: VillageProfileDto | null;
  stats: VillageStatsDto;
  /** Top 3 UMKM categories by count, for "Sektor Ekonomi Dominan" — real
   * data, not the hardcoded list this section used to show. */
  topUmkmCategories: UmkmCategoryDto[];
}

function StatCard({
  value,
  label,
  icon,
}: {
  value: number;
  label: string;
  icon: string;
}) {
  return (
    <div className="border-outline-variant/20 bg-surface-container-lowest rounded-3xl border p-6 text-center shadow-sm">
      <div className="text-primary mb-3 flex items-center justify-center">
        <Icon name={icon} className="text-3xl" />
      </div>
      <div className="font-display-hero text-on-surface text-3xl">{value}</div>
      <div className="text-on-surface-variant mt-2 text-sm font-semibold tracking-[0.18em] uppercase">
        {label}
      </div>
    </div>
  );
}

function OfficialCard({
  name,
  position,
  photo,
}: {
  name: string;
  position: string;
  photo: string;
}) {
  return (
    <div className="group border-outline-variant/20 bg-surface-container-lowest overflow-hidden rounded-3xl border shadow-sm transition hover:shadow-xl">
      <div className="aspect-[3/4] overflow-hidden grayscale transition duration-500 group-hover:grayscale-0">
        <FallbackImage
          src={photo}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <span className="bg-secondary-fixed text-on-secondary-fixed rounded-full px-3 py-1 text-xs font-semibold tracking-[0.18em] uppercase">
          {position}
        </span>
        <h3 className="font-headline-md text-headline-md text-primary mt-4">
          {name}
        </h3>
      </div>
    </div>
  );
}

export function ProfilPage({
  profile,
  stats,
  topUmkmCategories,
}: ProfilPageProps) {
  const heroPhoto = profile?.headPhoto ?? null;
  const officials = profile?.officials ?? [];
  const missions = profile?.missions ?? [];

  return (
    <div className="pb-section-padding pt-24">
      <section className="bg-primary text-on-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,53,39,0.88),rgba(0,53,39,0.76))]" />
        <div className="max-w-container-max px-gutter relative mx-auto py-28">
          <div className="text-label-sm text-primary-fixed mb-6 flex flex-wrap items-center gap-2 font-semibold">
            <span>Beranda</span>
            <Icon name="chevron_right" className="text-[16px]" />
            <span className="font-bold">Profil Desa</span>
          </div>
          <h1 className="font-display-hero text-display-hero max-w-3xl leading-tight">
            Mengenal Desa Pringgodani
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary/80 mt-6 max-w-2xl">
            {profile?.headGreeting ??
              "Selamat datang di website resmi Desa Pringgodani. Temukan informasi, agenda, dan prestasi desa kami dalam satu tampilan modern dan mudah diakses."}
          </p>
        </div>
      </section>

      <section className="py-section-padding">
        <div className="max-w-container-max px-gutter mx-auto grid gap-8 lg:grid-cols-[2.2fr_1fr]">
          <div className="space-y-8">
            <div className="border-outline-variant/20 bg-surface-container-lowest rounded-[2rem] border p-10 shadow-xl">
              <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
                <div>
                  <span className="bg-secondary-fixed text-secondary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
                    <Icon name="insights" className="text-base" /> Statistik
                    Utama
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-primary mt-6">
                    Kekuatan Desa dalam Angka
                  </h2>
                  <p className="font-body-base text-body-base text-on-surface-variant mt-4 max-w-2xl leading-relaxed">
                    Statistik ini menggambarkan kemampuan desa dalam mendukung
                    ekonomi lokal, pelayanan publik, dan kehidupan warga.
                  </p>
                </div>

                {/* "Sektor Ekonomi Dominan" — real top-3 UMKM categories by
                    count, not a hardcoded list. Hidden entirely if there's no
                    UMKM data yet, rather than showing a fabricated list. */}
                {topUmkmCategories.length > 0 && (
                  <div className="bg-primary-container text-on-primary-container rounded-3xl p-6 shadow-sm">
                    <p className="font-label-sm text-on-primary-container/80 tracking-[0.18em] uppercase">
                      Sektor Ekonomi Dominan
                    </p>
                    <ul className="font-body-base text-on-primary-container mt-6 space-y-4">
                      {topUmkmCategories.map((category) => (
                        <li
                          key={category.value}
                          className="flex items-center justify-between gap-3"
                        >
                          <span className="flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-white/90" />
                            {category.label}
                          </span>
                          <span className="text-on-primary-container/70 text-sm">
                            {category.umkmCount} UMKM
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <StatCard
                  value={stats.umkmCount}
                  label="UMKM Terdaftar"
                  icon="storefront"
                />
                <StatCard
                  value={stats.productCount}
                  label="Produk Unggulan"
                  icon="inventory_2"
                />
                <StatCard
                  value={stats.newsCount}
                  label="Berita Desa"
                  icon="newspaper"
                />
                <StatCard
                  value={stats.dusunCount}
                  label="Dusun"
                  icon="location_city"
                />
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="border-outline-variant/20 bg-surface-container-lowest overflow-hidden rounded-[2rem] border shadow-sm">
                <div className="relative aspect-[4/3]">
                  <FallbackImage
                    src={heroPhoto}
                    alt={profile?.villageName ?? "Desa Pringgodani"}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="border-outline-variant/20 bg-surface-container-lowest rounded-[2rem] border p-10 shadow-sm">
                <span className="font-label-sm text-on-surface-variant tracking-[0.18em] uppercase">
                  Sejarah Desa
                </span>
                <h2 className="font-headline-md text-headline-md text-primary mt-4">
                  Jejak Perjalanan Pringgodani
                </h2>
                <p className="font-body-base text-body-base text-on-surface-variant mt-4 leading-relaxed">
                  {profile?.historyText ??
                    "Desa Pringgodani berdiri sejak masa kolonial dan berkembang menjadi desa agraris yang dikenal dengan hasil pertanian dan kerajinan warganya."}
                </p>
                <Link
                  href="/profil/sejarah"
                  className="text-primary font-label-sm mt-6 inline-flex items-center gap-2 font-bold hover:underline"
                >
                  Baca Sejarah Lengkap
                  <Icon name="arrow_forward" className="text-lg" />
                </Link>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="border-outline-variant/20 bg-surface-container-lowest rounded-[2rem] border p-8 shadow-sm">
                <p className="font-label-sm text-on-surface-variant tracking-[0.18em] uppercase">
                  Visi Desa
                </p>
                <h2 className="font-headline-md text-headline-md text-primary mt-4">
                  Mewujudkan Desa Mandiri dan Sejahtera
                </h2>
                <p className="font-body-base text-body-base text-on-surface-variant mt-4 leading-relaxed">
                  {profile?.vision ??
                    "Mewujudkan Desa Pringgodani yang mandiri, maju, dan sejahtera."}
                </p>
              </div>

              <div className="border-outline-variant/20 bg-surface-container-lowest rounded-[2rem] border p-8 shadow-sm">
                <p className="font-label-sm text-on-surface-variant tracking-[0.18em] uppercase">
                  Misi Desa
                </p>
                <div className="text-body-base text-on-surface-variant mt-6 space-y-4">
                  {missions.length === 0 ? (
                    <p className="text-on-surface-variant/70 text-sm italic">
                      Misi desa belum tersedia.
                    </p>
                  ) : (
                    missions.map((mission) => (
                      <div key={mission} className="bg-surface rounded-3xl p-5">
                        <p>{mission}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            {/* Real CTA linking to Potensi, replacing a fabricated
                "Sektor Utama" description box. */}
            <div className="bg-primary-container text-on-primary-container rounded-[2rem] p-8 shadow-sm">
              <p className="font-label-sm text-on-primary-container/80 tracking-[0.18em] uppercase">
                Jelajahi Lebih Lanjut
              </p>
              <h2 className="font-headline-md text-headline-md mt-4">
                Potensi Unggulan Desa
              </h2>
              <p className="font-body-base text-body-base text-on-primary-container/80 mt-4 leading-relaxed">
                Lihat pertanian, pariwisata, kerajinan, dan sektor lain yang
                menjadi kekuatan ekonomi Desa Pringgodani.
              </p>
              <Link
                href="/potensi"
                className="bg-on-primary-container text-primary-container font-label-sm mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-bold"
              >
                Lihat Potensi Desa
                <Icon name="arrow_forward" className="text-base" />
              </Link>
            </div>

            <div className="border-outline-variant/20 bg-surface-container-lowest rounded-[2rem] border p-8 shadow-sm">
              <p className="font-label-sm text-on-surface-variant tracking-[0.18em] uppercase">
                Statistik Desa
              </p>
              <ul className="text-body-base text-on-surface-variant mt-6 space-y-4">
                <li className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2">
                    <Icon name="storefront" className="text-primary" />
                    UMKM Terdaftar
                  </span>
                  <span className="font-bold">{stats.umkmCount}</span>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2">
                    <Icon name="newspaper" className="text-primary" />
                    Berita Desa
                  </span>
                  <span className="font-bold">{stats.newsCount}</span>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2">
                    <Icon name="location_city" className="text-primary" />
                    Dusun
                  </span>
                  <span className="font-bold">{stats.dusunCount}</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-admin-surface py-section-padding border-outline-variant/10 border-y">
        <div className="max-w-container-max px-gutter mx-auto">
          <div className="mb-16 text-center">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-2">
              Struktur Pemerintahan
            </h2>
            <p className="text-on-surface-variant font-label-sm text-label-sm">
              Sinergi kepemimpinan untuk kemajuan Desa Pringgodani.
            </p>
          </div>

          <div className="relative overflow-x-auto pb-8">
            <div className="flex min-w-[800px] flex-col items-center gap-12">
              <div className="bg-primary text-on-primary relative rounded-[2rem] px-10 py-6 shadow-lg">
                <p className="text-label-sm mb-2 uppercase opacity-70">
                  Kepala Desa
                </p>
                <h3 className="font-headline-md">
                  {profile?.headName ?? "Belum diisi"}
                </h3>
                <div className="bg-outline-variant absolute -bottom-12 left-1/2 h-12 w-px -translate-x-1/2" />
              </div>

              <div className="relative flex w-3/4 justify-between">
                <div className="bg-outline-variant absolute inset-x-0 top-1/2 h-0.5" />
                <div className="bg-outline-variant h-12 w-0.5" />
              </div>

              <div className="flex flex-col gap-8 md:flex-row md:justify-center md:gap-12">
                {officials.slice(1).map((official) => (
                  <div
                    key={official.name}
                    className="bg-surface border-primary w-64 rounded-[1.5rem] border px-8 py-6 text-center shadow-sm"
                  >
                    <p className="text-label-sm text-primary mb-3 tracking-[0.18em] uppercase">
                      {official.position}
                    </p>
                    <h4 className="text-on-surface font-bold">
                      {official.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-padding">
        <div className="max-w-container-max px-gutter mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-headline-lg text-headline-lg">
              Direktori Perangkat Desa
            </h2>
            <p className="text-on-surface-variant font-body-base mt-3">
              Tampilkan para pemimpin dan perangkat yang mendukung pelayanan
              warga.
            </p>
          </div>
          {officials.length === 0 ? (
            <p className="text-on-surface-variant font-body-base py-12 text-center">
              Data perangkat desa belum tersedia.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {officials.map((official) => (
                <OfficialCard
                  key={official.name}
                  name={official.name}
                  position={official.position}
                  photo={official.photo}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
