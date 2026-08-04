import { Icon } from "@/shared/ui/icon";
import { buildDirectionsUrl, buildMapPlaceUrl } from "../model/maps-url";

interface LocationCardProps {
  latitude: number;
  longitude: number;
  placeName: string;
}

/**
 * "Lokasi Usaha" sidebar card from the detail prototype: a square location
 * panel plus a "Petunjuk Arah" action.
 *
 * The panel is deliberately NOT an embedded map: OpenStreetMap's own embed
 * needs WebGL (it renders a "peramban Anda tidak cocok dengan WebGL" notice on
 * devices without it — verified in a headless browser here, and a real risk on
 * the low-end phones this site is built for), and every static-map API needs a
 * key. So the card shows the coordinates and links out to Google Maps, which
 * works on every device with no key at all. When the interactive Leaflet map is
 * introduced at `/peta` (step 5/6), a mini raster-tile map can replace this
 * panel — raster tiles need no WebGL.
 */
export function LocationCard({
  latitude,
  longitude,
  placeName,
}: LocationCardProps) {
  const coordinates = `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;

  return (
    <div className="bg-surface-container-high border-outline-variant/20 rounded-xl border p-6">
      <h2 className="font-label-sm text-label-sm text-primary mb-4 font-bold tracking-widest uppercase">
        Lokasi Usaha
      </h2>

      <a
        href={buildMapPlaceUrl(latitude, longitude)}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-surface-container border-outline-variant/30 hover:border-primary/40 group flex aspect-square flex-col items-center justify-center gap-3 rounded-lg border transition-colors"
        aria-label={`Lihat lokasi ${placeName} di Google Maps`}
      >
        <Icon
          name="location_on"
          filled
          // `!` is required: the Material Symbols stylesheet from Google ships
          // an unlayered `font-size: 24px`, which outranks every layered
          // Tailwind size utility (see README finding).
          className="text-primary text-[64px]! transition-transform group-hover:scale-110"
        />
        <span className="font-label-sm text-label-sm text-on-surface-variant text-center">
          {coordinates}
        </span>
        <span className="font-label-sm text-label-sm text-secondary flex items-center gap-1 font-bold">
          Lihat di Google Maps
          <Icon name="open_in_new" className="text-[16px]" />
        </span>
      </a>

      <a
        href={buildDirectionsUrl(latitude, longitude)}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary font-label-sm text-label-sm border-primary/30 hover:bg-primary/5 mt-4 flex w-full items-center justify-center gap-2 rounded-lg border py-2 transition-colors"
      >
        <Icon name="directions" className="text-[18px]" />
        Petunjuk Arah
      </a>
    </div>
  );
}
