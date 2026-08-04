import Link from "next/link";
import { Icon } from "@/shared/ui/icon";
import { FallbackImage } from "@/shared/ui/fallback-image";
import { BannerService } from "@/entities/banner/api/banner.service";

/**
 * The prototype's hero (`beranda_desa_pringgodani_1/code.html`) uses a
 * single hardcoded background image — a static mockup can't demonstrate a
 * dynamic banner. Since the brief added a `Banner` model, this wires the
 * hero to the first active banner (by `order`) instead, falling back to a
 * neutral primary-colored background if none are configured yet. Layout,
 * copy, and both CTA buttons are unchanged from the prototype.
 */
export async function Hero() {
  let bannerImage: string | null = null;

  try {
    const { items } = await BannerService.getActive();
    bannerImage = items[0]?.imageUrl ?? null;
  } catch {
    // Banner service unavailable — fall back to the plain background below.
  }

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="bg-primary/40 absolute inset-0 z-10" />
        {bannerImage ? (
          <FallbackImage
            src={bannerImage}
            alt="Desa Pringgodani"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="bg-primary-container h-full w-full" />
        )}
      </div>
      <div className="text-on-primary px-gutter relative z-20 max-w-4xl text-center">
        <h1 className="font-display-hero text-display-hero mb-4 leading-tight">
          Selamat Datang di Desa Pringgodani
        </h1>
        <p className="font-body-lg text-body-lg tracking-wide opacity-90">
          Kecamatan Pringgodani, Kabupaten Pringgodani
        </p>
        <div className="mt-stack-lg flex justify-center gap-4">
          <Link
            href="/potensi"
            className="bg-on-primary text-primary font-label-sm rounded-full px-8 py-3 font-bold shadow-lg transition-transform hover:scale-105"
          >
            Eksplorasi Desa
          </Link>
          <Link
            href="/profil"
            className="border-on-primary text-on-primary font-label-sm rounded-full border-2 bg-transparent px-8 py-3 font-bold backdrop-blur-sm transition-all hover:bg-white/10"
          >
            Layanan Publik
          </Link>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-70">
        <Icon name="keyboard_arrow_down" className="text-on-primary text-4xl" />
      </div>
    </section>
  );
}
