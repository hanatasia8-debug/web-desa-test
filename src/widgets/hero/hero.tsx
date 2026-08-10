"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@/shared/ui/icon";
import { FallbackImage } from "@/shared/ui/fallback-image";
import { BannerService } from "@/entities/banner/api/banner.service";

import { getCustomBanner } from "@/shared/utils/custom-banner-storage";

export function Hero() {
  const [bannerImage, setBannerImage] = useState<string | null>(null);

  useEffect(() => {
    // 1. Check if there's a custom banner set by the admin (using IndexedDB to bypass 5MB quota)
    getCustomBanner().then((customUrl) => {
      if (customUrl) {
        setBannerImage(customUrl);
      } else {
        // 2. Fallback to active news banner
        BannerService.getActive()
          .then((res) => {
            if (res && res.items && res.items.length > 0) {
              setBannerImage(res.items[0].imageUrl);
            }
          })
          .catch((err) => {
            console.error("Gagal memuat banner dari API:", err);
          });
      }
    });
  }, []);

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
