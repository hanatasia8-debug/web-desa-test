import { Icon } from "@/shared/ui/icon";
import { FallbackImage } from "@/shared/ui/fallback-image";
import type {
  VillageProfileDto,
  VillageStatsDto,
} from "@/entities/desa/model/types";

const LATEST_EVENTS = [
  {
    title: "Musyawarah Rencana Pembangunan",
    date: "12 Agustus 2026",
    summary:
      "Warga dan perangkat desa menyusun prioritas pembangunan dan agenda pemberdayaan.",
    icon: "groups",
  },
  {
    title: "Festival Produk Lokal",
    date: "19 Agustus 2026",
    summary:
      "UMKM menampilkan kerajinan tangan, makanan khas, dan produk olahan desa.",
    icon: "local_mall",
  },
  {
    title: "Pelatihan Literasi Digital",
    date: "26 Agustus 2026",
    summary:
      "Edukasi publik untuk akses layanan digital desa dan keamanan informasi.",
    icon: "desktop_windows",
  },
];

const TIMELINE_ITEMS = [
  {
    label: "Apr",
    title: "Pembukaan Posyandu",
    note: "Layanan kesehatan ibu dan balita resmi dibuka di Balai Desa.",
  },
  {
    label: "Mei",
    title: "Panen Bersama",
    note: "Panen hasil tani organik oleh kelompok tani Desa Pringgodani.",
  },
  {
    label: "Jun",
    title: "Tour Wisata Edukatif",
    note: "Siswa sekolah berkunjung ke potensi wisata dan sentra UMKM desa.",
  },
  {
    label: "Jul",
    title: "Workshop Ekonomi Kreatif",
    note: "Pelatihan pemasaran digital dan kemasan produk untuk pelaku UMKM.",
  },
];

interface ProfilPageProps {
  profile: VillageProfileDto | null;
  stats: VillageStatsDto;
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

export function ProfilPage({ profile, stats }: ProfilPageProps) {
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
                <div className="bg-primary-container text-on-primary-container rounded-3xl p-6 shadow-sm">
                  <p className="font-label-sm text-on-primary-container/80 tracking-[0.18em] uppercase">
                    Sektor Ekonomi Dominan
                  </p>
                  <ul className="font-body-base text-on-primary-container mt-6 space-y-4">
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-white/90" />{" "}
                      Pertanian Holtikultura
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-white/90" /> UMKM
                      Kerajinan & Olahan
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-white/90" />{" "}
                      Wisata dan Budaya Lokal
                    </li>
                  </ul>
                </div>
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
                <div className="border-outline-variant/20 mt-8 border-t pt-6">
                  <p className="text-on-surface font-semibold">
                    Jejak Budaya dan Ekonomi
                  </p>
                  <p className="text-on-surface-variant mt-3 text-sm">
                    Dari tradisi tani hingga digitalisasi layanan publik, desa
                    ini terus menjaga keseimbangan antara pelestarian lokal dan
                    inovasi.
                  </p>
                </div>
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
                  {profile?.missions.map((mission) => (
                    <div key={mission} className="bg-surface rounded-3xl p-5">
                      <p>{mission}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-primary-container text-on-primary-container rounded-[2rem] p-8 shadow-sm">
              <p className="font-label-sm text-on-primary-container/80 tracking-[0.18em] uppercase">
                Sektor Utama
              </p>
              <h2 className="font-headline-md text-headline-md mt-4">
                Ekonomi, Pariwisata, dan Budaya
              </h2>
              <p className="font-body-base text-body-base text-on-primary-container/80 mt-4 leading-relaxed">
                Desa Pringgodani menggabungkan potensi agraris, UMKM kreatif,
                dan destinasi wisata alam untuk membangun ekonomi yang inklusif.
              </p>
            </div>

            <div className="border-outline-variant/20 bg-surface-container-lowest rounded-[2rem] border p-8 shadow-sm">
              <p className="font-label-sm text-on-surface-variant tracking-[0.18em] uppercase">
                Wawasan Desa
              </p>
              <ul className="text-body-base text-on-surface-variant mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <Icon name="check_circle" className="text-primary mt-1" />
                  Infrastruktur desa terus ditingkatkan untuk layanan publik dan
                  akses digital.
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="check_circle" className="text-primary mt-1" />
                  Kegiatan komunitas intensif mendukung gotong royong dan
                  produktivitas.
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="check_circle" className="text-primary mt-1" />
                  Pelestarian budaya berjalan paralel dengan pengembangan
                  ekonomi lokal.
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
                  {profile?.headName ?? "Ki Suryo Pringgo"}
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
        </div>
      </section>
    </div>
  );
}
