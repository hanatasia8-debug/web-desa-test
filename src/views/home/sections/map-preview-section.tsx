"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/shared/ui/icon";
import type { MapLocationDto } from "@/entities/fasilitas/model/types";
import { GoogleMapCanvas } from "@/views/peta/sections/google-map-canvas";

interface MapPreviewSectionProps {
  locations: MapLocationDto[];
}

export function MapPreviewSection({ locations }: MapPreviewSectionProps) {
  const [selectedLocation, setSelectedLocation] =
    useState<MapLocationDto | null>(null);

  return (
    <section className="py-section-padding">
      <div className="max-w-container-max px-gutter mx-auto">
        <div className="mb-stack-lg scroll-reveal flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Peta Fasilitas Desa
            </h2>
            <p className="font-body-base text-body-base text-on-surface-variant mt-1">
              Temukan lokasi kantor desa, sekolah, puskesmas, dan fasilitas
              publik lainnya.
            </p>
          </div>
          <Link
            href="/peta"
            className="bg-primary/10 text-primary hover:bg-primary hover:text-on-primary inline-flex items-center gap-2 rounded-xl px-5 py-2.5 font-bold transition-all"
          >
            <Icon name="open_in_new" /> Lihat Peta Penuh
          </Link>
        </div>
        <div className="border-outline-variant/30 scroll-reveal relative h-[500px] w-full overflow-hidden rounded-3xl border shadow-xl">
          <GoogleMapCanvas
            locations={locations}
            selectedLocation={selectedLocation}
            onSelectLocation={setSelectedLocation}
          />
          <Link
            href="/peta"
            className="bg-primary text-on-primary absolute right-6 bottom-6 z-20 flex items-center gap-2 rounded-full px-6 py-3 font-bold shadow-2xl transition-all hover:scale-105"
          >
            <Icon name="map" /> Buka Peta Interaktif Lengkap
          </Link>
        </div>
      </div>
    </section>
  );
}
