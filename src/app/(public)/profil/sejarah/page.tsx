import type { Metadata } from "next";
import Link from "next/link";
import { DesaService } from "@/entities/desa/api/desa.service";
import { FallbackImage } from "@/shared/ui/fallback-image";
import { Icon } from "@/shared/ui/icon";

export const metadata: Metadata = {
  title: "Sejarah Desa Pringgodani",
  description: "Sejarah lengkap Desa Pringgodani.",
};

/**
 * Rebuilt from scratch — the previous version of this page:
 *  1. Used raw hex color classes (`bg-[#064e3b]`, etc.) instead of the
 *     design tokens every other page uses (`bg-primary-container`, etc.).
 *  2. Rendered fabricated historical claims (specific colonial-era dates,
 *     an invented Dutch-administration narrative, an unattributed "wisdom"
 *     quote) that have no backing in `VillageProfileDto` — only
 *     `historyText` exists as real content here.
 *  3. Had its own hardcoded duplicate `<footer>` with dead `href="#"` links
 *     and a DIFFERENT address than the real one in `mock-settings.ts` —
 *     this rendered underneath the real `<Footer />` already injected by
 *     `app/(public)/layout.tsx`, producing two stacked footers.
 *  4. Used a raw `<img>` with a hardcoded external googleusercontent.com
 *     URL instead of `FallbackImage`.
 *
 * `historyText` itself was too short (one sentence) to fill a dedicated
 * article page, so it was expanded in `mock-profil.ts` (the actual data
 * source) rather than padded with invented content here.
 */
export default async function SejarahPage() {
  const { profile } = await DesaService.getProfileWithStats();
  const paragraphs = (profile?.historyText ?? "Sejarah desa belum tersedia.")
    .split(/\n\s*\n/)
    .filter(Boolean);

  return (
    <main className="bg-background">
      <section className="bg-primary-container text-on-primary-container relative overflow-hidden py-24 md:py-32">
        <div className="max-w-container-max px-gutter relative mx-auto text-center">
          <div className="text-label-sm mb-6 flex flex-wrap items-center justify-center gap-2 opacity-80">
            <Link href="/profil" className="hover:underline">
              Profil Desa
            </Link>
            <Icon name="chevron_right" className="text-[16px]" />
            <span className="font-bold">Sejarah</span>
          </div>
          <h1 className="font-display-hero text-display-hero mb-6">
            Sejarah Desa Pringgodani
          </h1>
          <p className="font-body-lg text-body-lg mx-auto max-w-2xl opacity-90">
            Menelusuri asal-usul dan perjalanan Desa Pringgodani dari masa ke
            masa.
          </p>
        </div>
      </section>

      <article className="py-section-padding">
        <div className="max-w-container-max px-gutter mx-auto max-w-3xl">
          <div className="border-outline-variant/20 bg-surface-container-lowest mb-12 aspect-[21/9] overflow-hidden rounded-3xl border">
            <FallbackImage
              src={profile?.headPhoto}
              alt="Desa Pringgodani"
              className="h-full w-full object-cover"
              fallbackIcon="history_edu"
            />
          </div>

          <div className="space-y-6">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="font-body-base text-body-base text-on-surface-variant leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="border-outline-variant/30 mt-12 border-t pt-8">
            <Link
              href="/profil"
              className="text-primary font-label-sm inline-flex items-center gap-2 font-bold hover:underline"
            >
              <Icon name="arrow_back" className="text-lg" />
              Kembali ke Profil Desa
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
