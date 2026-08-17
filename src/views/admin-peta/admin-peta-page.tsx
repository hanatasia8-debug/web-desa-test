"use client";

import { useEffect, useState, useMemo } from "react";
import { Icon } from "@/shared/ui/icon";
import { AdminMapsService } from "@/entities/admin/api/admin-maps.service";
import type {
  AdminMapLocation,
  AdminMapCategory,
} from "@/entities/admin/model/admin.types";
import { extractCoordinatesFromUrl } from "@/shared/utils/google-maps";
import { GoogleMapCanvas } from "@/views/peta/sections/google-map-canvas";
import type { MapLocationDto } from "@/entities/fasilitas/model/types";
import { FallbackImage } from "@/shared/ui/fallback-image";

export function AdminPetaPage() {
  const [locations, setLocations] = useState<AdminMapLocation[]>([]);
  const [categories, setCategories] = useState<AdminMapCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCatFilter, setSelectedCatFilter] = useState("ALL");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Form Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState("");
  const [editingCategoryName, setEditingCategoryName] = useState("");
  const [address, setAddress] = useState("");
  const [googleMapsUrl, setGoogleMapsUrl] = useState("");
  const [latitude, setLatitude] = useState(-8.2811);
  const [longitude, setLongitude] = useState(112.5664);
  const [isSaving, setIsSaving] = useState(false);
  const [selectedLocation, setSelectedLocation] =
    useState<MapLocationDto | null>(null);

  const loadData = () => {
    setIsLoading(true);
    Promise.all([
      AdminMapsService.getLocations(),
      AdminMapsService.getCategories(),
    ])
      .then(([locs, cats]) => {
        setLocations(locs);
        setCategories(cats);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    let ignore = false;
    Promise.all([
      AdminMapsService.getLocations(),
      AdminMapsService.getCategories(),
    ])
      .then(([locs, cats]) => {
        if (!ignore) {
          setLocations(locs);
          setCategories(cats);
        }
      })
      .finally(() => {
        if (!ignore) setIsLoading(false);
      });
    return () => {
      ignore = true;
    };
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const openEditModal = (loc: AdminMapLocation) => {
    setEditingId(loc.id);
    setEditingName(loc.name);
    setEditingCategoryName(loc.categoryName || "UMKM");
    setAddress(loc.address || "");
    setGoogleMapsUrl(loc.googleMapsUrl || loc.mapsUrl || "");
    setLatitude(loc.latitude || -8.2811);
    setLongitude(loc.longitude || 112.5664);
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingId || isSaving) return;
    setIsSaving(true);

    try {
      const payload = {
        name: editingName,
        address,
        latitude,
        longitude,
        googleMapsUrl,
        mapsUrl: googleMapsUrl,
      };

      await AdminMapsService.updateLocation(editingId, payload);
      showToast(`Titik koordinat UMKM "${editingName}" berhasil diperbarui.`);
      setIsModalOpen(false);
      loadData();
    } catch (err) {
      console.error("Gagal memperbarui koordinat UMKM:", err);
      showToast("Gagal memperbarui koordinat. Silakan coba lagi.");
    } finally {
      setIsSaving(false);
    }
  };

  // Filter locations
  const filteredLocations = useMemo(() => {
    return locations.filter((loc) => {
      const matchSearch =
        !searchQuery.trim() ||
        loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (loc.address &&
          loc.address.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchCat =
        selectedCatFilter === "ALL" || loc.categoryId === selectedCatFilter;

      return matchSearch && matchCat;
    });
  }, [locations, searchQuery, selectedCatFilter]);

  return (
    <div className="space-y-8">
      {toastMessage && (
        <div className="bg-primary text-on-primary animate-fade-in fixed right-6 bottom-6 z-50 flex items-center gap-3 rounded-2xl px-6 py-4 text-sm font-semibold shadow-2xl">
          <Icon name="check_circle" className="text-xl" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Halaman */}
      <div className="flex flex-col gap-4 border-b pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="text-on-surface-variant font-label-sm text-xs font-bold tracking-wider uppercase">
            Sistem Geospasial UMKM Desa
          </span>
          <h2 className="font-headline-lg text-primary mt-1 text-3xl font-bold">
            Kelola Titik Geospasial UMKM
          </h2>
          <p className="text-on-surface-variant mt-1 text-sm">
            Pantau sebaran toko UMKM di peta dan sesuaikan titik koordinat GPS (latitude & longitude) atau link Google Maps agar posisi pin di peta publik selalu presisi.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-primary/10 text-primary flex items-center gap-2 rounded-2xl px-4 py-3 text-xs font-bold">
            <Icon name="storefront" className="text-lg" />
            <span>{locations.length} UMKM Terdaftar</span>
          </div>
        </div>
      </div>

      {/* Peta Interaktif Sebaran UMKM Desa */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-headline-md text-primary flex items-center gap-2 text-base font-bold">
            <Icon name="map" className="text-lg" /> Pratinjau Peta Interaktif UMKM
          </h3>
          <span className="text-on-surface-variant text-xs font-medium">
            Klik pin untuk melihat detail UMKM
          </span>
        </div>

        <div className="border-outline-variant/30 relative h-96 w-full overflow-hidden rounded-3xl border shadow-sm">
          <GoogleMapCanvas
            locations={locations.map((loc) => ({
              id: loc.id,
              name: loc.name,
              mapCategoryId: loc.categoryId,
              categoryName: loc.categoryName,
              shortDescription: loc.shortDescription || null,
              address: loc.address || null,
              latitude: loc.latitude,
              longitude: loc.longitude,
              googleMapsUrl: loc.googleMapsUrl || null,
              imageUrl: loc.imageUrl || null,
              category: {
                id: loc.categoryId,
                name: loc.categoryName,
                slug: loc.categoryName.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
                icon: "store",
                color: "#16a34a",
              },
            }))}
            selectedLocation={selectedLocation}
            onSelectLocation={(loc) => setSelectedLocation(loc)}
          />
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <Icon
            name="search"
            className="text-on-surface-variant absolute top-1/2 left-4 -translate-y-1/2 text-lg"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari nama UMKM atau alamat..."
            className="bg-surface-container-lowest border-outline-variant/40 text-on-surface focus:border-primary w-full rounded-2xl border py-3 pr-4 pl-11 text-sm outline-none shadow-sm"
          />
        </div>

        {categories.length > 0 && (
          <div className="flex items-center gap-2">
            <select
              value={selectedCatFilter}
              onChange={(e) => setSelectedCatFilter(e.target.value)}
              className="bg-surface-container-lowest border-outline-variant/40 text-on-surface focus:border-primary rounded-2xl border px-4 py-3 text-xs font-semibold outline-none shadow-sm"
            >
              <option value="ALL">Semua Kategori ({locations.length})</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name} ({cat.count || 0})
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Tabel Titik Peta UMKM */}
      <div className="border-outline-variant/30 bg-surface-container-lowest overflow-hidden rounded-3xl border shadow-sm">
        {isLoading ? (
          <div className="text-on-surface-variant py-12 text-center text-sm font-medium">
            <Icon name="sync" className="animate-spin text-2xl mx-auto mb-2 text-primary" />
            Memuat data geospasial UMKM...
          </div>
        ) : filteredLocations.length === 0 ? (
          <div className="text-on-surface-variant space-y-2 py-12 text-center text-sm font-medium">
            <Icon name="storefront" className="text-primary/40 mx-auto text-4xl" />
            <p>Tidak ada data UMKM yang cocok dengan pencarian.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface-container-highest text-on-surface-variant border-b text-xs font-bold uppercase">
                <tr>
                  <th className="px-6 py-4">Nama UMKM & Alamat</th>
                  <th className="px-6 py-4">Kategori</th>
                  <th className="px-6 py-4">Koordinat GPS</th>
                  <th className="px-6 py-4">Tautan Google Maps</th>
                  <th className="px-6 py-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-outline-variant/20 divide-y">
                {filteredLocations.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-surface-container-low transition"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="border-outline-variant bg-surface-container h-10 w-10 shrink-0 overflow-hidden rounded-xl border">
                          <FallbackImage
                            src={item.imageUrl || "/images/placeholder-umkm.jpg"}
                            alt={item.name}
                            className="h-full w-full object-cover"
                            fallbackIcon="store"
                          />
                        </div>
                        <div>
                          <p className="text-primary text-base font-bold">
                            {item.name}
                          </p>
                          <p className="text-on-surface-variant mt-0.5 text-xs">
                            {item.address || "Desa Pringgodani"}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="bg-secondary-container text-on-secondary-container rounded-full px-3 py-1 text-xs font-bold">
                        {item.categoryName || "UMKM"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-mono text-xs">
                      {item.latitude && item.longitude ? (
                        <span className="text-primary font-bold">
                          {item.latitude.toFixed(5)}, {item.longitude.toFixed(5)}
                        </span>
                      ) : (
                        <span className="text-error font-semibold">
                          Belum ditentukan
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.googleMapsUrl ? (
                        <a
                          href={item.googleMapsUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary inline-flex items-center gap-1 text-xs font-semibold hover:underline"
                        >
                          <Icon name="open_in_new" className="text-sm" /> Buka
                          Google Maps
                        </a>
                      ) : (
                        <span className="text-on-surface-variant/50 text-xs italic">
                          -
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap">
                      <button
                        onClick={() => openEditModal(item)}
                        className="bg-surface border-outline-variant text-on-surface hover:text-primary hover:border-primary inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-bold shadow-sm transition"
                      >
                        <Icon name="edit_location_alt" className="text-sm" />
                        <span>Sunting Koordinat</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal Form Edit Titik Koordinat UMKM */}
      {isModalOpen && (
        <div className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
          <div className="border-outline-variant/30 bg-surface-container-lowest text-on-surface w-full max-w-xl space-y-6 rounded-[2.5rem] border p-8 shadow-2xl">
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <span className="text-on-surface-variant text-[11px] font-bold uppercase">
                  {editingCategoryName}
                </span>
                <h3 className="font-headline-md text-primary text-xl font-bold">
                  Sunting Koordinat: {editingName}
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-on-surface-variant hover:text-on-surface"
              >
                <Icon name="close" className="text-xl" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="font-label-sm text-on-surface-variant mb-1 block text-xs font-bold uppercase">
                  Link / Tautan Google Maps
                </label>
                <input
                  type="url"
                  value={googleMapsUrl}
                  onChange={(e) => {
                    const url = e.target.value;
                    setGoogleMapsUrl(url);
                    const { lat, lng } = extractCoordinatesFromUrl(url);
                    if (lat !== 0 && lng !== 0) {
                      setLatitude(lat);
                      setLongitude(lng);
                    }
                  }}
                  className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-2xl border p-3.5 text-xs outline-none"
                  placeholder="Tempelkan link share Google Maps (cth: https://maps.app.goo.gl/...)"
                />
                <p className="text-on-surface-variant mt-1.5 flex items-center gap-1 text-[11px]">
                  <Icon name="info" className="text-primary text-sm shrink-0" />
                  <span>
                    Koordinat otomatis terdeteksi saat link Google Maps ditempelkan, atau Anda dapat mengeklik posisi di peta bawah.
                  </span>
                </p>
              </div>

              <div>
                <label className="font-label-sm text-on-surface-variant mb-1 block text-xs font-bold uppercase">
                  Pin Point Lokasi di Peta
                </label>
                <div className="border-outline-variant/30 mb-2 h-48 w-full overflow-hidden rounded-2xl border">
                  <GoogleMapCanvas
                    locations={[
                      {
                        id: "temp-pin",
                        mapCategoryId: "cat-umkm",
                        name: editingName || "Lokasi UMKM",
                        shortDescription: address || "Desa Pringgodani",
                        latitude,
                        longitude,
                        address: address || null,
                        imageUrl: null,
                        category: {
                          id: "cat-umkm",
                          name: editingCategoryName || "UMKM",
                          slug: "umkm",
                          icon: "store",
                          color: "#16a34a",
                        },
                      },
                    ]}
                    selectedLocation={null}
                    onSelectLocation={() => {}}
                    onMapClick={(lat: number, lng: number) => {
                      setLatitude(lat);
                      setLongitude(lng);
                    }}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-on-surface-variant text-[11px] font-bold">
                      Latitude
                    </span>
                    <input
                      type="number"
                      step="any"
                      required
                      value={latitude}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        setLatitude(val);
                      }}
                      className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-xl border p-2 font-mono text-xs outline-none"
                    />
                  </div>
                  <div>
                    <span className="text-on-surface-variant text-[11px] font-bold">
                      Longitude
                    </span>
                    <input
                      type="number"
                      step="any"
                      required
                      value={longitude}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        setLongitude(val);
                      }}
                      className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-xl border p-2 font-mono text-xs outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="font-label-sm text-on-surface-variant mb-1 block text-xs font-bold uppercase">
                  Alamat Lengkap Toko / Usaha
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-2xl border p-3.5 text-sm outline-none"
                  placeholder="Jl. Raya Desa Pringgodani..."
                />
              </div>

              <div className="flex justify-end gap-3 border-t pt-4">
                <button
                  type="button"
                  disabled={isSaving}
                  onClick={() => setIsModalOpen(false)}
                  className="bg-surface border-outline-variant text-on-surface rounded-2xl border px-5 py-3 text-xs font-bold disabled:opacity-50"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="bg-primary text-on-primary hover:bg-primary/90 flex items-center gap-2 rounded-2xl px-6 py-3 text-xs font-bold shadow-md transition disabled:opacity-50"
                >
                  {isSaving ? (
                    <>
                      <Icon name="sync" className="animate-spin text-base" />
                      <span>Menyimpan...</span>
                    </>
                  ) : (
                    <span>Simpan Koordinat</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
