"use client";

import Link from "next/link";
import { Icon } from "@/shared/ui/icon";
import { FallbackImage } from "@/shared/ui/fallback-image";
import type { VillageProfileDto } from "@/entities/desa/model/types";
import { useVillageProfile } from "@/features/village-profile/model/use-village-profile";

interface WelcomeSectionProps {
  profile: VillageProfileDto | null;
}

export function WelcomeSection({ profile: initialProfile }: WelcomeSectionProps) {
  const profile = useVillageProfile(initialProfile);
  if (!profile) {
    // Empty state — VillageProfile hasn't been filled in by an admin yet.
    return (
      <section className="max-w-container-max px-gutter py-section-padding mx-auto text-center">
        <p className="text-on-surface-variant font-body-base">
          Profil desa belum tersedia.
        </p>
      </section>
    );
  }

  return (
    <section className="max-w-container-max gap-gutter py-section-padding px-gutter mx-auto grid grid-cols-1 items-center md:grid-cols-12">
      <div className="scroll-reveal group relative md:col-span-5">
        <div className="bg-primary/10 absolute -top-4 -left-4 -z-10 h-24 w-24 rounded-full transition-transform group-hover:scale-110" />
        <div className="border-outline-variant/20 overflow-hidden rounded-2xl border shadow-2xl">
          <FallbackImage
            src={profile.headPhoto}
            alt={profile.headName ?? "Kepala Desa"}
            className="aspect-[4/5] w-full object-cover"
            fallbackIcon="person"
          />
        </div>
        {profile.headName && (
          <div className="bg-surface border-outline-variant/10 absolute -right-6 bottom-6 rounded-xl border p-6 shadow-xl">
            <p className="font-headline-md text-headline-md text-primary m-0">
              {profile.headName}
            </p>
            <p className="font-label-sm text-label-sm text-on-surface-variant">
              {profile.headPosition ?? "Kepala Desa"}
            </p>
          </div>
        )}
      </div>

      <div className="stack-md scroll-reveal space-y-stack-md md:col-span-7">
        <span className="bg-primary/10 text-primary font-badge-xs text-badge-xs rounded-full px-4 py-1.5 tracking-widest uppercase">
          Sambutan Kepala Desa
        </span>
        <h2 className="font-headline-lg text-headline-lg text-primary">
          Membangun Pringgodani Menuju Kemandirian Digital
        </h2>
        <p className="font-body-base text-body-base text-on-surface-variant leading-relaxed">
          &ldquo;{profile.headGreeting}&rdquo;
        </p>
        <div className="border-outline-variant/30 mt-stack-md pt-stack-md border-t">
          <h3 className="font-headline-md text-headline-md mb-2">
            Sekilas Sejarah
          </h3>
          <p className="font-body-base text-body-base text-on-surface-variant mb-6 italic">
            {profile.historyExcerpt}
          </p>
          <Link
            href="/profil/sejarah"
            className="text-primary font-label-sm group flex items-center gap-2 font-bold transition-all hover:gap-4"
          >
            Baca Selengkapnya
            <Icon name="arrow_forward" className="text-lg" />
          </Link>
        </div>
      </div>
    </section>
  );
}
