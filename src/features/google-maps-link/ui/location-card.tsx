import { Icon } from "@/shared/ui/icon";
import { buildDirectionsUrl, buildMapPlaceUrl } from "../model/maps-url";

interface LocationCardProps {
  latitude?: number | null;
  longitude?: number | null;
  placeName: string;
  addressUrl?: string | null;
}

export function LocationCard({
  latitude,
  longitude,
  placeName,
  addressUrl,
}: LocationCardProps) {
  const directionsTargetUrl =
    addressUrl ||
    (latitude && longitude
      ? buildDirectionsUrl(latitude, longitude)
      : `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(placeName)}`);

  return (
    <div className="bg-surface-container-high border-outline-variant/20 rounded-2xl border p-6 shadow-sm">
      <h2 className="font-label-sm text-label-sm text-primary mb-4 font-bold tracking-widest uppercase">
        Lokasi Usaha
      </h2>

      <a
        href={directionsTargetUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary text-on-primary hover:bg-primary/90 flex w-full items-center justify-center gap-2.5 rounded-xl py-3 text-xs font-bold transition-all shadow-md active:scale-95"
      >
        <Icon name="directions" className="text-base" />
        Petunjuk Arah (GPS)
      </a>
    </div>
  );
}
