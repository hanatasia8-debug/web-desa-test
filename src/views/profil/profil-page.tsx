"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Icon } from "@/shared/ui/icon";
import { FallbackImage } from "@/shared/ui/fallback-image";
import type {
  VillageProfileDto,
  VillageStatsDto,
} from "@/entities/desa/model/types";
import type { UmkmCategoryDto } from "@/entities/umkm/model/types";

import { useVillageProfile } from "@/features/village-profile/model/use-village-profile";

interface ProfilPageProps {
  profile: VillageProfileDto | null;
  stats: VillageStatsDto;
  topUmkmCategories: UmkmCategoryDto[];
}

function StatCard({
  value,
  label,
  icon,
}: {
  value: number | string;
  label: string;
  icon: string;
}) {
  return (
    <div className="border-outline-variant/20 bg-surface-container-lowest rounded-3xl border p-5 text-center shadow-sm transition hover:shadow-md">
      <div className="bg-primary/10 text-primary mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl">
        <Icon name={icon} className="text-2xl" />
      </div>
      <div className="font-display-hero text-on-surface text-3xl font-extrabold">
        {value}
      </div>
      <div className="text-on-surface-variant mt-1 text-xs font-semibold tracking-wider uppercase">
        {label}
      </div>
    </div>
  );
}

function OfficialCard({
  name,
  position,
  photo,
  greeting,
  email,
}: {
  name: string;
  position: string;
  photo: string;
  greeting?: string;
  email?: string;
}) {
  return (
    <div className="group border-outline-variant/20 bg-surface-container-lowest flex w-[280px] shrink-0 snap-center flex-col overflow-hidden rounded-[2rem] border shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-auto">
      <div className="bg-surface-container relative aspect-[3/4] w-full overflow-hidden">
        <FallbackImage
          src={photo}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
        <div className="absolute right-4 bottom-4 left-4">
          <span className="bg-primary text-on-primary inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold tracking-wider uppercase shadow-md">
            <Icon name="assignment_ind" className="text-xs" />
            {position}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h3 className="font-headline-md text-primary text-lg font-bold">
            {name}
          </h3>

          {greeting && (
            <div className="bg-primary/[0.04] border-primary/20 text-on-surface-variant mt-3 rounded-2xl border p-3 text-xs leading-relaxed italic">
              &ldquo;{greeting}&rdquo;
            </div>
          )}
        </div>

        {email && (
          <div className="border-outline-variant/20 mt-4 border-t pt-3">
            <a
              href={`mailto:${email}`}
              className="text-on-surface-variant hover:text-primary inline-flex items-center gap-2 font-mono text-xs transition"
            >
              <Icon name="email" className="text-primary text-sm" />
              {email}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export function ProfilPage({
  profile: initialProfile,
  stats,
  topUmkmCategories,
}: ProfilPageProps) {
  const profile = useVillageProfile(initialProfile);
  const [isStructureModalOpen, setIsStructureModalOpen] = useState(false);

  const heroPhoto = profile?.headPhoto ?? null;
  const missions = profile?.missions ?? [];

  // Always sort Kepala Desa at index 0 (top/front)
  const sortedOfficials = useMemo(() => {
    const list = [...(profile?.officials ?? [])];
    return list.sort((a, b) => {
      const isAKades =
        a.position.toLowerCase().includes("kepala desa") ||
        a.position.toLowerCase().includes("kades");
      const isBKades =
        b.position.toLowerCase().includes("kepala desa") ||
        b.position.toLowerCase().includes("kades");
      if (isAKades && !isBKades) return -1;
      if (!isAKades && isBKades) return 1;
      return 0;
    });
  }, [profile?.officials]);

  return (
    <div className="pb-section-padding pt-16">
      {/* ── 1. Hero Header Banner (Pringgodani Emerald Theme) ── */}
      <section className="bg-primary text-on-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,53,39,0.92),rgba(0,53,39,0.85))]" />

        <div className="max-w-container-max px-gutter relative mx-auto py-20 lg:py-24">
          <div className="text-primary-fixed mb-4 flex items-center gap-2 text-xs font-bold tracking-wider uppercase">
            <span>Beranda</span>
            <Icon name="chevron_right" className="text-sm" />
            <span className="text-white">Profil Desa</span>
          </div>

          <h1 className="font-display-hero text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Mengenal Desa Pringgodani
          </h1>
          <p className="font-body-lg text-on-primary/85 mt-4 max-w-2xl text-sm leading-relaxed sm:text-base">
            Portal resmi selayang pandang, visi misi, bagan struktur organisasi,
            serta jajaran perangkat desa resmi Pemerintah Desa Pringgodani.
          </p>

          {/* Quick Counter Bar */}
          <div className="mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur-md">
              <div className="text-2xl font-bold text-white">4.850</div>
              <div className="mt-0.5 text-[11px] font-medium tracking-wider text-white/80 uppercase">
                Penduduk (Jiwa)
              </div>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur-md">
              <div className="text-2xl font-bold text-white">1.420</div>
              <div className="mt-0.5 text-[11px] font-medium tracking-wider text-white/80 uppercase">
                Kepala Keluarga
              </div>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur-md">
              <div className="text-2xl font-bold text-white">
                {stats.umkmCount}
              </div>
              <div className="mt-0.5 text-[11px] font-medium tracking-wider text-white/80 uppercase">
                UMKM Terdaftar
              </div>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur-md">
              <div className="text-2xl font-bold text-white">
                {stats.dusunCount}
              </div>
              <div className="mt-0.5 text-[11px] font-medium tracking-wider text-white/80 uppercase">
                Wilayah Dusun
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Sambutan Kepala Desa & Sejarah ── */}
      <section id="sambutan-sejarah" className="scroll-mt-28 py-16">
        <div className="max-w-container-max px-gutter mx-auto grid gap-8 lg:grid-cols-[1fr_1.8fr]">
          {/* Card Kades */}
          <div className="border-outline-variant/20 bg-surface-container-lowest overflow-hidden rounded-[2.5rem] border p-6 shadow-md">
            <div className="bg-surface-container relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
              <FallbackImage
                src={heroPhoto}
                alt={profile?.headName ?? "Kepala Desa Pringgodani"}
                className="h-full w-full object-cover"
              />
              <div className="absolute right-4 bottom-4 left-4">
                <span className="bg-secondary-fixed text-on-secondary-fixed inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-extrabold uppercase shadow-lg">
                  <Icon name="user" className="text-sm" />
                  {profile?.headPosition || "Kepala Desa Pringgodani"}
                </span>
              </div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-headline-md text-primary text-xl font-bold">
                {profile?.headName || "Ki Suryo Pringgo"}
              </h3>
            </div>
          </div>

          {/* Teks Sambutan & Sejarah */}
          <div className="space-y-6">
            {/* Quote Card Sambutan */}
            <div className="border-primary/20 bg-primary/[0.03] relative overflow-hidden rounded-[2rem] border-l-4 p-8 shadow-sm">
              <span className="bg-primary/10 text-primary mb-4 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase">
                <Icon name="info" className="text-sm" />
                Sambutan Kepala Desa
              </span>
              <blockquote className="font-body-lg text-on-surface text-base leading-relaxed italic sm:text-lg">
                &ldquo;
                {profile?.headGreeting ??
                  "Selamat datang di website resmi Desa Pringgodani. Temukan informasi, agenda, dan pelayanan desa dalam satu tampilan modern."}
                &rdquo;
              </blockquote>
            </div>

            {/* Sejarah Desa */}
            <div className="border-outline-variant/20 bg-surface-container-lowest rounded-[2rem] border p-8 shadow-sm">
              <span className="text-on-surface-variant font-label-sm text-xs font-bold tracking-wider uppercase">
                Sejarah Singkat Desa
              </span>
              <h2 className="font-headline-md text-primary mt-2 text-2xl font-bold">
                Jejak Perjalanan Pringgodani
              </h2>
              <p className="text-on-surface-variant mt-4 text-sm leading-relaxed">
                {profile?.historyText ??
                  "Desa Pringgodani berdiri sejak masa kolonial dan berkembang menjadi desa agraris yang dikenal dengan hasil pertanian, keindahan alam, serta kerajinan warga lokal."}
              </p>
              <Link
                href="/profil/sejarah"
                className="text-primary mt-6 inline-flex items-center gap-2 text-xs font-bold hover:underline"
              >
                Baca Sejarah Lengkap Desa
                <Icon name="arrow_forward" className="text-sm" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Visi & Misi Desa (Mobile Carousel + Desktop Grid) ── */}
      <section
        id="visi-misi"
        className="bg-surface-container-low/50 border-outline-variant/10 scroll-mt-28 border-y py-16"
      >
        <div className="max-w-container-max px-gutter mx-auto space-y-10">
          <div className="text-center">
            <span className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase">
              <Icon name="target" className="text-sm" /> Landasan Pembangunan
            </span>
            <h2 className="font-headline-lg text-primary mt-3 text-3xl font-bold">
              Visi & Misi Desa Pringgodani
            </h2>
          </div>

          {/* Visi Hero Card */}
          <div className="border-primary/30 bg-surface-container-lowest relative overflow-hidden rounded-[2.5rem] border-l-4 p-8 shadow-md lg:p-10">
            <div className="text-primary/10 pointer-events-none absolute -top-4 -right-4">
              <Icon name="target" className="text-[120px]" />
            </div>
            <span className="text-primary font-label-sm text-xs font-bold tracking-wider uppercase">
              Visi Utama Desa
            </span>
            <blockquote className="font-headline-lg text-on-surface mt-3 text-xl leading-snug font-bold sm:text-2xl lg:max-w-[90%]">
              &ldquo;
              {profile?.vision ||
                "Mewujudkan Desa Pringgodani yang mandiri, maju, dan sejahtera."}
              &rdquo;
            </blockquote>
          </div>

          {/* Misi Cards (Mobile Snap Carousel + Desktop Grid) */}
          <div>
            <h3 className="font-headline-md text-primary mb-6 text-xl font-bold">
              Misi Strategis Desa
            </h3>
            {missions.length === 0 ? (
              <p className="text-on-surface-variant text-sm italic">
                Misi desa belum dikonfigurasi.
              </p>
            ) : (
              <div className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0">
                {missions.map((mission, idx) => (
                  <div
                    key={idx}
                    className="border-outline-variant/20 bg-surface-container-lowest flex w-[280px] shrink-0 snap-center items-start gap-4 rounded-2xl border p-5 shadow-sm transition hover:shadow-md sm:w-auto"
                  >
                    <span className="bg-primary text-on-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-bold">
                      {idx + 1}
                    </span>
                    <p className="text-on-surface text-sm leading-relaxed font-medium">
                      {mission}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── 4. Bagan Struktur Organisasi (With Lightbox Zoom Modal) ── */}
      <section id="struktur-organisasi" className="scroll-mt-28 py-16">
        <div className="max-w-container-max px-gutter mx-auto">
          <div className="mb-10 text-center">
            <span className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase">
              <Icon name="schema" className="text-sm" /> Tata Kelola Resmi
            </span>
            <h2 className="font-headline-lg text-primary mt-3 text-3xl font-bold">
              Bagan Struktur Organisasi
            </h2>
            <p className="text-on-surface-variant mt-2 text-xs sm:text-sm">
              Bagan alur struktur tata kelola Pemerintah Desa Pringgodani.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            {profile?.structureImageUrl ? (
              <div className="border-outline-variant/30 bg-surface-container-lowest rounded-[2.5rem] border p-4 text-center shadow-lg">
                <div className="bg-surface-container relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
                  <FallbackImage
                    src={profile.structureImageUrl}
                    alt="Struktur Organisasi Desa Pringgodani"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="mt-4 pb-2">
                  <button
                    onClick={() => setIsStructureModalOpen(true)}
                    className="bg-primary text-on-primary hover:bg-primary/90 inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-xs font-bold shadow-md transition"
                  >
                    <Icon name="visibility" className="text-base" />
                    Perbesar Bagan Struktur Organisasi
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-on-surface-variant py-12 text-center text-sm italic">
                Bagan struktur organisasi belum diunggah oleh administrator.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox Modal Structure Diagram */}
      {isStructureModalOpen && profile?.structureImageUrl && (
        <div className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md">
          <div className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-white p-4 shadow-2xl">
            <div className="mb-3 flex items-center justify-between border-b pb-3">
              <h3 className="font-headline-md text-primary text-base font-bold">
                Bagan Struktur Organisasi Desa Pringgodani
              </h3>
              <button
                onClick={() => setIsStructureModalOpen(false)}
                className="bg-surface-container text-on-surface hover:bg-error hover:text-on-error rounded-xl p-2 transition"
              >
                <Icon name="close" className="text-lg" />
              </button>
            </div>
            <div className="max-h-[78vh] overflow-auto">
              <FallbackImage
                src={profile.structureImageUrl}
                alt="Struktur Organisasi Desa Pringgodani"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* ── 5. Direktori Perangkat Desa Bernyawa (Mobile Snap Carousel + Desktop Grid) ── */}
      <section
        id="direktori-perangkat"
        className="bg-surface-container-low/40 border-outline-variant/10 scroll-mt-28 border-t py-16"
      >
        <div className="max-w-container-max px-gutter mx-auto">
          <div className="mb-12 text-center">
            <span className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase">
              <Icon name="groups" className="text-sm" /> Pelayan Masyarakat
            </span>
            <h2 className="font-headline-lg text-primary mt-3 text-3xl font-bold">
              Direktori Perangkat Desa
            </h2>
            <p className="text-on-surface-variant mx-auto mt-2 max-w-xl text-xs sm:text-sm">
              Jajaran pengabdi balai desa yang siap memberikan pelayanan publik
              terbaik untuk warga Pringgodani.
            </p>
          </div>

          {sortedOfficials.length === 0 ? (
            <p className="text-on-surface-variant py-12 text-center text-sm italic">
              Data perangkat desa belum dikonfigurasi.
            </p>
          ) : (
            <div className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:pb-0 lg:grid-cols-4">
              {sortedOfficials.map((official, idx) => (
                <OfficialCard
                  key={idx}
                  name={official.name}
                  position={official.position}
                  photo={official.photo}
                  greeting={official.greeting}
                  email={official.email}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
