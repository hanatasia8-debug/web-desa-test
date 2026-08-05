"use client";

import { useState, useMemo, useCallback } from "react";
import type {
  MapCategoryDto,
  MapLocationDto,
} from "@/entities/fasilitas/model/types";
import { GoogleMapCanvas } from "./sections/google-map-canvas";
import { CategoryFilterPanel } from "./sections/category-filter-panel";
import { MapLegend } from "./sections/map-legend";
import { MapControls } from "./sections/map-controls";
import { Icon } from "@/shared/ui/icon";

interface PetaPageProps {
  initialLocations: MapLocationDto[];
  categories: MapCategoryDto[];
}

export function PetaPage({ initialLocations, categories }: PetaPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<Set<string>>(
    () => new Set(categories.map((c) => c.id)),
  );
  const [selectedLocation, setSelectedLocation] =
    useState<MapLocationDto | null>(null);
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);

  // Toggle single category
  const handleToggleCategory = (catId: string) => {
    setSelectedCategoryIds((prev) => {
      const next = new Set(prev);
      if (next.has(catId)) {
        next.delete(catId);
      } else {
        next.add(catId);
      }
      return next;
    });
  };

  // Toggle all categories
  const handleToggleAll = (enableAll: boolean) => {
    if (enableAll) {
      setSelectedCategoryIds(new Set(categories.map((c) => c.id)));
    } else {
      setSelectedCategoryIds(new Set());
    }
  };

  // Filter locations based on category checklist & search query
  const filteredLocations = useMemo(() => {
    return initialLocations.filter((loc) => {
      const matchesCategory =
        selectedCategoryIds.has(loc.mapCategoryId) ||
        selectedCategoryIds.has(loc.category?.id);

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      return (
        loc.name.toLowerCase().includes(q) ||
        (loc.shortDescription &&
          loc.shortDescription.toLowerCase().includes(q)) ||
        (loc.address && loc.address.toLowerCase().includes(q))
      );
    });
  }, [initialLocations, selectedCategoryIds, searchQuery]);

  // Zoom controls
  const handleZoomIn = () => {
    if (mapInstance) {
      mapInstance.setZoom((mapInstance.getZoom() || 15) + 1);
    }
  };

  const handleZoomOut = () => {
    if (mapInstance) {
      mapInstance.setZoom((mapInstance.getZoom() || 15) - 1);
    }
  };

  // Geolocation control
  const handleMyLocation = () => {
    if (!mapInstance) return;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          mapInstance.panTo(pos);
          mapInstance.setZoom(17);
        },
        () => {
          alert(
            "Gagal mengakses lokasi Anda. Pastikan izin lokasi (GPS) diaktifkan di browser.",
          );
        },
      );
    } else {
      alert("Browser Anda tidak mendukung fitur lokasi Geolocation.");
    }
  };

  const handleMapLoaded = useCallback((map: google.maps.Map) => {
    setMapInstance(map);
  }, []);

  return (
    <div className="bg-surface-container-low relative h-[calc(100vh-64px)] w-full overflow-hidden pt-16">
      {/* Top Search Overlay */}
      <div className="absolute top-4 right-6 z-20 hidden md:block">
        <div className="glass-panel border-outline-variant/30 focus-within:ring-primary/20 flex w-72 items-center gap-2 rounded-full border px-4 py-2 shadow-lg transition-all focus-within:ring-2">
          <Icon name="search" className="text-on-surface-variant text-lg" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari fasilitas desa..."
            className="text-on-surface w-full border-none bg-transparent text-sm focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-on-surface-variant hover:text-on-surface text-xs font-bold"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Filter Panel (Top Left) */}
      <CategoryFilterPanel
        categories={categories}
        selectedCategoryIds={selectedCategoryIds}
        onToggleCategory={handleToggleCategory}
        onToggleAll={handleToggleAll}
      />

      {/* Map Canvas */}
      <GoogleMapCanvas
        locations={filteredLocations}
        selectedLocation={selectedLocation}
        onSelectLocation={setSelectedLocation}
        onMapLoaded={handleMapLoaded}
      />

      {/* Map Zoom / Geolocation Controls (Bottom Left) */}
      <MapControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onMyLocation={handleMyLocation}
      />

      {/* Floating Legend (Bottom Center) */}
      <MapLegend
        categories={categories}
        selectedCategoryIds={selectedCategoryIds}
      />
    </div>
  );
}
