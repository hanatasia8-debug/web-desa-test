/**
 * Google Maps deep links.
 *
 * `prd_2.txt §4.7` asks for a "Petunjuk Arah" action on UMKM/facility
 * locations. Both links go to Google Maps: universal on Android/iOS/desktop and
 * no API key required (see `location-card.tsx` for why the card does not embed
 * a map instead).
 */
export function buildDirectionsUrl(
  latitude: number,
  longitude: number,
  googleMapsUrl?: string | null,
): string {
  if (googleMapsUrl && googleMapsUrl.trim().length > 0) {
    return googleMapsUrl;
  }
  return `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
}

export function buildMapPlaceUrl(latitude: number, longitude: number): string {
  return `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
}
