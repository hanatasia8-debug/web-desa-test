"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useRef, useState, useCallback } from "react";
import type { MapLocationDto } from "@/entities/fasilitas/model/types";
import { buildDirectionsUrl } from "@/features/google-maps-link/model/maps-url";
import { loadGoogleMapsSDK } from "@/features/google-maps-link/model/google-maps-loader";
import { Icon } from "@/shared/ui/icon";

interface GoogleMapCanvasProps {
  locations: MapLocationDto[];
  selectedLocation: MapLocationDto | null;
  onSelectLocation: (location: MapLocationDto | null) => void;
  onMapLoaded?: (mapInstance: google.maps.Map) => void;
}

// Center point of Desa Pringgodani, Kecamatan Bantur, Kabupaten Malang
const DEFAULT_CENTER = { lat: -8.2811, lng: 112.5664 };
const DEFAULT_ZOOM = 15;

/** Map category slug to Material Symbols icon ligature name */
function getCategoryIcon(slug?: string, fallbackIcon?: string | null): string {
  if (!slug) return fallbackIcon || "location_on";
  const iconMap: Record<string, string> = {
    "kantor-desa": "account_balance",
    pendidikan: "school",
    ibadah: "mosque",
    kesehatan: "medical_services",
    "wisata-alam": "park",
  };
  return iconMap[slug] || fallbackIcon || "location_on";
}

/** Create dynamic custom DOM element for AdvancedMarkerElement */
function createCustomMarkerDOM(
  loc: MapLocationDto,
  isSelected: boolean,
  onClick: () => void,
): HTMLElement {
  const container = document.createElement("div");
  container.className = "custom-map-marker-wrapper";
  container.style.cursor = "pointer";
  container.style.userSelect = "none";

  const color = loc.category?.color || "#006399";
  const iconName = getCategoryIcon(loc.category?.slug, loc.category?.icon);

  container.innerHTML = `
    <div style="
      display: flex;
      flex-direction: column;
      align-items: center;
      filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.45));
      transform: ${isSelected ? "scale(1.25) translateY(-6px)" : "scale(1)"};
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      z-index: ${isSelected ? "100" : "1"};
    ">
      <!-- Title Label Badge -->
      <div style="
        background: rgba(15, 23, 42, 0.92);
        backdrop-filter: blur(8px);
        color: #ffffff;
        padding: 4px 10px;
        border-radius: 9999px;
        font-size: 11px;
        font-weight: 700;
        font-family: Inter, system-ui, -apple-system, sans-serif;
        white-space: nowrap;
        margin-bottom: 6px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        border: 1px solid rgba(255, 255, 255, 0.3);
        max-width: 160px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: flex;
        align-items: center;
        gap: 6px;
        letter-spacing: 0.01em;
      ">
        <span style="
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: ${color};
          display: inline-block;
          flex-shrink: 0;
          box-shadow: 0 0 8px ${color};
        "></span>
        <span style="overflow: hidden; text-overflow: ellipsis;">${loc.name}</span>
      </div>

      <!-- Main Marker Badge -->
      <div style="
        position: relative;
        width: 48px;
        height: 48px;
        background: radial-gradient(circle at 30% 30%, #ffffff 0%, ${color} 75%);
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid #ffffff;
        box-shadow: 0 6px 20px ${color}99;
        ${isSelected ? `outline: 3px solid ${color}; outline-offset: 3px; ring: 4px white;` : ""}
      ">
        <!-- Inner White Circle Icon Emblem -->
        <div style="
          width: 32px;
          height: 32px;
          background: #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: rotate(45deg);
          color: ${color};
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.18);
        ">
          <span class="material-symbols-outlined" style="font-size: 20px; font-weight: 700; line-height: 1;">${iconName}</span>
        </div>
      </div>

      <!-- Base Shadow Dot -->
      <div style="
        width: 14px;
        height: 5px;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 50%;
        margin-top: 3px;
        filter: blur(1px);
      "></div>
    </div>
  `;

  container.addEventListener("click", (e) => {
    e.stopPropagation();
    onClick();
  });

  return container;
}

export function GoogleMapCanvas({
  locations,
  selectedLocation,
  onSelectLocation,
  onMapLoaded,
}: GoogleMapCanvasProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);
  const markersRef = useRef<Map<string, any>>(new Map());
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

  const [isVisible, setIsVisible] = useState(
    () => typeof window !== "undefined" && Boolean(window.google?.maps),
  );
  const [isLoaded, setIsLoaded] = useState(
    () => typeof window !== "undefined" && Boolean(window.google?.maps),
  );
  const [loadError, setLoadError] = useState<string | null>(null);

  // 1. Intersection Observer: Only activate map loading when container enters viewport
  useEffect(() => {
    if (typeof window === "undefined" || !mapRef.current) return;

    // If Google Maps is already initialized globally, do not set up observer
    if (window.google?.maps) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "150px" },
    );

    observer.observe(mapRef.current);
    return () => observer.disconnect();
  }, []);

  // 2. Load Google Maps Script asynchronously via Singleton Loader when visible
  useEffect(() => {
    if (!isVisible || isLoaded) return;

    let isMounted = true;

    loadGoogleMapsSDK()
      .then(() => {
        if (isMounted) setIsLoaded(true);
      })
      .catch((err) => {
        if (isMounted)
          setLoadError(err.message || "Gagal memuat SDK Google Maps.");
      });

    return () => {
      isMounted = false;
    };
  }, [isVisible, isLoaded]);

  // Helper to create HTML string for InfoWindow popup
  const createInfoWindowContent = useCallback((loc: MapLocationDto) => {
    const color = loc.category?.color || "#006399";
    const categoryName = loc.category?.name || "Fasilitas Publik";
    const directionsUrl = buildDirectionsUrl(
      loc.latitude,
      loc.longitude,
      loc.googleMapsUrl,
    );
    const imageUrl = loc.imageUrl
      ? loc.imageUrl.startsWith("http")
        ? loc.imageUrl
        : `https://lh3.googleusercontent.com/aida-public/AB6AXuCPuD79rMJV73ZCZ6t8RfNJ7l1bhJYtnHgeAz36bDbzhCKhbjnYRILlGxSOrahOv1uTWWM8_ePRH91-R9dAVsERMmmTpk7YuvkrPOd7OJ_74KuG1yfG_0Kb9sCOuY1sxvzUokltuuGKMiF09eYW39VU4FHzdVpLmONvzN_847AqRkwWAxNdnMLOyDwAKPL6LR7bsU3NBfCm6K6iNMNOTaPywEwG_FEcMKARBaEujtsakdP_q0u8vng`
      : null;

    return `
      <div style="font-family: Inter, system-ui, sans-serif; max-width: 280px; padding: 4px;">
        ${
          imageUrl
            ? `<div style="height: 125px; width: 100%; border-radius: 12px; background-image: url('${imageUrl}'); background-size: cover; background-position: center; margin-bottom: 12px; position: relative;">
                <span style="position: absolute; bottom: 8px; left: 8px; background-color: ${color}; color: white; padding: 3px 10px; border-radius: 6px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; box-shadow: 0 2px 6px rgba(0,0,0,0.3);">${categoryName}</span>
              </div>`
            : `<div style="display: inline-block; background-color: ${color}; color: white; padding: 3px 10px; border-radius: 6px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">${categoryName}</div>`
        }
        <h4 style="font-size: 16px; font-weight: 700; color: #0f172a; margin: 0 0 4px 0;">${loc.name}</h4>
        <p style="font-size: 13px; color: #475569; margin: 0 0 12px 0; line-height: 1.4;">${loc.shortDescription || loc.address || "Fasilitas Desa Pringgodani"}</p>
        
        ${
          loc.address
            ? `<div style="display: flex; align-items: center; gap: 6px; font-size: 12px; color: #334155; margin-bottom: 12px;">
                <span>📍 ${loc.address}</span>
              </div>`
            : ""
        }

        <div style="display: flex; gap: 8px; margin-top: 12px;">
          <a href="${directionsUrl}" target="_blank" rel="noopener noreferrer" style="flex: 1; text-align: center; background-color: ${color}; color: white; padding: 9px 14px; border-radius: 10px; font-size: 12px; font-weight: 700; text-decoration: none; display: inline-block; box-shadow: 0 4px 10px ${color}40;">
            Petunjuk Arah ↗
          </a>
        </div>
      </div>
    `;
  }, []);

  // 3. Initialize Google Map with lightweight settings
  useEffect(() => {
    if (!isLoaded || !mapRef.current || mapInstanceRef.current) return;

    let isMounted = true;

    async function initMap() {
      if (!window.google?.maps) return;

      const mapOptions: google.maps.MapOptions = {
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM,
        mapId: "DEMO_MAP_ID",
        mapTypeId: "hybrid",
        gestureHandling: "cooperative",
        clickableIcons: false,
        disableDefaultUI: false,
        fullscreenControl: false,
        zoomControl: false,
        mapTypeControl: true,
        mapTypeControlOptions: {
          position: google.maps?.ControlPosition?.TOP_RIGHT ?? 3,
        },
        streetViewControl: true,
        streetViewControlOptions: {
          position: google.maps?.ControlPosition?.RIGHT_BOTTOM ?? 9,
        },
      };

      if (!window.google?.maps?.Map) {
        throw new Error("Pustaka google.maps.Map belum siap.");
      }

      if (window.google.maps.importLibrary) {
        try {
          await window.google.maps.importLibrary("marker");
        } catch (e) {
          console.warn("importLibrary marker warning:", e);
        }
      }

      if (!isMounted || !mapRef.current || mapInstanceRef.current) return;

      const map = new window.google.maps.Map(mapRef.current, mapOptions);

      mapInstanceRef.current = map;
      setMapInstance(map);
      infoWindowRef.current = new window.google.maps.InfoWindow();

      if (onMapLoaded) {
        onMapLoaded(map);
      }
    }

    initMap().catch((err) => {
      console.error("Gagal menginisialisasi Google Maps:", err);
      setLoadError("Gagal menginisialisasi peta Google Maps.");
    });

    return () => {
      isMounted = false;
    };
  }, [isLoaded, onMapLoaded]);

  // 4. Sync Markers with locations prop
  useEffect(() => {
    if (!isLoaded || !mapInstance) return;

    let isMounted = true;

    async function syncMarkers() {
      if (!mapInstance) return;

      const map = mapInstance;
      const currentMarkers = markersRef.current;
      const activeLocationIds = new Set(locations.map((l) => l.id));

      // Remove markers that are no longer in locations
      currentMarkers.forEach((marker, id) => {
        if (!activeLocationIds.has(id)) {
          if (marker.map) marker.map = null;
          else if (marker.setMap) marker.setMap(null);
          currentMarkers.delete(id);
        }
      });

      let AdvancedMarker: any = (google.maps as any)?.marker
        ?.AdvancedMarkerElement;
      if (!AdvancedMarker && window.google?.maps?.importLibrary) {
        try {
          const markerLib = (await google.maps.importLibrary("marker")) as any;
          AdvancedMarker = markerLib?.AdvancedMarkerElement;
        } catch {
          // ignore
        }
      }

      if (!isMounted) return;

      // Add or update markers
      locations.forEach((loc) => {
        const lat = Number(loc.latitude);
        const lng = Number(loc.longitude);
        if (isNaN(lat) || isNaN(lng)) return;

        const isSelected = selectedLocation?.id === loc.id;
        const handleSelect = () => {
          onSelectLocation(loc);
          if (infoWindowRef.current) {
            infoWindowRef.current.setContent(createInfoWindowContent(loc));
            const existingMarker = currentMarkers.get(loc.id);
            if (existingMarker) {
              infoWindowRef.current.open({
                map,
                anchor: existingMarker,
              });
            }
          }
        };

        const color = loc.category?.color || "#006399";
        const iconSvgUrl = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="54" viewBox="0 0 48 54">
            <g filter="drop-shadow(0px 4px 6px rgba(0,0,0,0.4))">
              <path d="M24 2 C13.5 2 5 10.5 5 21 C5 33 24 50 24 50 C24 50 43 33 43 21 C43 10.5 34.5 2 24 2 Z" fill="${color}" stroke="#FFFFFF" stroke-width="2.5"/>
              <circle cx="24" cy="21" r="11" fill="#FFFFFF"/>
              <circle cx="24" cy="21" r="6" fill="${color}"/>
            </g>
          </svg>
        `)}`;

        if (currentMarkers.has(loc.id)) {
          const marker = currentMarkers.get(loc.id);

          if (AdvancedMarker && marker instanceof AdvancedMarker) {
            marker.position = { lat, lng };
            marker.content = createCustomMarkerDOM(
              loc,
              isSelected,
              handleSelect,
            );
            marker.zIndex = isSelected ? 1000 : 1;
          } else if (marker.setPosition) {
            marker.setPosition({ lat, lng });
            if (marker.setIcon) {
              marker.setIcon({
                url: iconSvgUrl,
                scaledSize: new google.maps.Size(48, 54),
                anchor: new google.maps.Point(24, 54),
              });
            }
          }
        } else {
          let markerCreated = false;
          if (AdvancedMarker) {
            try {
              const marker = new AdvancedMarker({
                position: { lat, lng },
                map,
                title: loc.name,
                content: createCustomMarkerDOM(loc, isSelected, handleSelect),
                zIndex: isSelected ? 1000 : 1,
              });

              currentMarkers.set(loc.id, marker);
              markerCreated = true;
            } catch {
              // Fallback to legacy marker if AdvancedMarker fails
            }
          }

          if (!markerCreated && typeof google?.maps?.Marker === "function") {
            const marker = new google.maps.Marker({
              position: { lat, lng },
              map,
              title: loc.name,
              icon: {
                url: iconSvgUrl,
                scaledSize: new google.maps.Size(48, 54),
                anchor: new google.maps.Point(24, 54),
              },
            });

            marker.addListener("click", handleSelect);
            currentMarkers.set(loc.id, marker);
          }
        }
      });
    }

    syncMarkers().catch((err) =>
      console.error("Gagal sinkronisasi marker:", err),
    );

    return () => {
      isMounted = false;
    };
  }, [
    isLoaded,
    mapInstance,
    locations,
    selectedLocation,
    createInfoWindowContent,
    onSelectLocation,
  ]);

  // 5. Pan to selectedLocation change
  useEffect(() => {
    if (!isLoaded || !mapInstance || !selectedLocation) return;

    const marker = markersRef.current.get(selectedLocation.id);
    if (marker && infoWindowRef.current) {
      mapInstance.panTo({
        lat: selectedLocation.latitude,
        lng: selectedLocation.longitude,
      });
      infoWindowRef.current.setContent(
        createInfoWindowContent(selectedLocation),
      );
      infoWindowRef.current.open({
        map: mapInstance,
        anchor: marker,
      });
    }
  }, [selectedLocation, isLoaded, mapInstance, createInfoWindowContent]);

  if (loadError) {
    return (
      <div className="bg-surface-container flex h-full w-full flex-col items-center justify-center p-6 text-center">
        <div className="bg-error/10 text-error mb-4 flex h-16 w-16 items-center justify-center rounded-full">
          <Icon name="error" className="text-3xl" />
        </div>
        <h3 className="font-headline-md text-headline-md text-primary font-bold">
          Peta Tidak Dapat Dimuat
        </h3>
        <p className="text-on-surface-variant mt-2 max-w-md text-sm">
          {loadError}
        </p>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      {!isLoaded && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-3 bg-slate-900/90 backdrop-blur-md">
          {/* Skeleton Animated Pulse Grid Background */}
          <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
          <div className="bg-primary/20 text-primary relative z-10 flex h-14 w-14 animate-pulse items-center justify-center rounded-full shadow-xl">
            <Icon name="map" className="animate-bounce text-3xl" />
          </div>
          <span className="font-label-sm text-label-sm relative z-10 font-bold tracking-wide text-slate-200">
            Memuat Peta Desa Pringgodani...
          </span>
        </div>
      )}
      <div ref={mapRef} className="h-full w-full" />
    </div>
  );
}
