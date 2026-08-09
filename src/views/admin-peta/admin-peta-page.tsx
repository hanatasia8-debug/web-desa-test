"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/shared/ui/icon";
import { AdminMapsService } from "@/entities/admin/api/admin-maps.service";
import type {
  AdminMapLocation,
  AdminMapCategory,
} from "@/entities/admin/model/admin.types";
import { extractCoordinatesFromUrl } from "@/shared/utils/google-maps";
import { GoogleMapCanvas } from "@/views/peta/sections/google-map-canvas";
import type { MapLocationDto } from "@/entities/fasilitas/model/types";

export function AdminPetaPage() {
  const [locations, setLocations] = useState<AdminMapLocation[]>([]);
  const [categories, setCategories] = useState<AdminMapCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Form Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [address, setAddress] = useState("");
  const [googleMapsUrl, setGoogleMapsUrl] = useState("");
  const [latitude, setLatitude] = useState(-8.2811);
  const [longitude, setLongitude] = useState(112.5664);
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
        if (cats.length > 0 && !categoryId) {
          setCategoryId(cats[0].id);
        }
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
          if (cats.length > 0) {
            setCategoryId((prev) => prev || cats[0].id);
          }
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

  const openAddModal = () => {
    setEditingId(null);
    setName("");
    setShortDescription("");
    setAddress("Desa Pringgodani");
    setGoogleMapsUrl("https://maps.app.goo.gl/pringgodani");
    setLatitude(-8.2811);
    setLongitude(112.5664);
    setIsModalOpen(true);
  };

  const openEditModal = (loc: AdminMapLocation) => {
    setEditingId(loc.id);
    setName(loc.name);
    setCategoryId(loc.categoryId);
    setShortDescription(loc.shortDescription || "");
    setAddress(loc.address || "");
    setGoogleMapsUrl(
      loc.googleMapsUrl ||
        `https://www.google.com/maps?q=${loc.latitude},${loc.longitude}`,
    );
    setLatitude(loc.latitude);
    setLongitude(loc.longitude);
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const selectedCat = categories.find((c) => c.id === categoryId);

    // Otomatis ekstrak koordinat dari link Google Maps tanpa perlu input lat/lng manual
    const { lat, lng } = extractCoordinatesFromUrl(googleMapsUrl);

    const payload = {
      name,
      categoryId,
      categoryName: selectedCat ? selectedCat.name : "Fasilitas Umum",
      shortDescription,
      address,
      latitude,
      longitude,
      googleMapsUrl,
    };

    if (editingId) {
      await AdminMapsService.updateLocation(editingId, payload);
      showToast(`Titik peta "${name}" berhasil diperbarui.`);
    } else {
      await AdminMapsService.createLocation(payload);
      showToast(`Titik peta baru "${name}" berhasil ditambahkan.`);
    }

    setIsModalOpen(false);
    loadData();
  };

  const handleDelete = async (id: string, locName: string) => {
    if (confirm(`Apakah Anda yakin ingin menghapus titik peta "${locName}"?`)) {
      await AdminMapsService.deleteLocation(id);
      showToast(`Titik peta "${locName}" telah dihapus.`);
      loadData();
    }
  };

  return (
    <div className="space-y-8">
      {toastMessage && (
        <div className="bg-primary text-on-primary animate-fade-in fixed right-6 bottom-6 z-50 flex items-center gap-3 rounded-2xl px-6 py-4 text-sm font-semibold shadow-2xl">
          <Icon name="check_circle" className="text-xl" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Halaman */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="text-on-surface-variant font-label-sm text-xs font-bold tracking-wider uppercase">
            Sistem Geospasial Desa
          </span>
          <h2 className="font-headline-lg text-primary mt-1 text-3xl font-bold">
            Kelola Titik Peta & Fasilitas Umum
          </h2>
          <p className="text-on-surface-variant mt-1 text-sm">
            Atur pin lokasi balai desa, sekolah, puskesmas, dan fasilitas
            penting di peta interaktif warga cukup dengan menempelkan link
            Google Maps.
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="bg-primary text-on-primary hover:bg-primary/90 inline-flex items-center gap-2 self-start rounded-2xl px-6 py-3.5 text-xs font-bold shadow-md transition sm:self-auto"
        >
          <Icon name="add_location_alt" className="text-xl" /> Tambah Titik Peta
          Baru
        </button>
      </div>

      {/* Peta Interaktif Sebaran Fasilitas Desa */}
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
            imageUrl: null,
            category: {
              id: loc.categoryId,
              name: loc.categoryName,
              slug: loc.categoryName.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
              icon: "place",
              color: "#0284c7",
            },
          }))}
          selectedLocation={selectedLocation}
          onSelectLocation={(loc) => setSelectedLocation(loc)}
        />
      </div>

      {/* Tabel Titik Peta */}
      <div className="border-outline-variant/30 bg-surface-container-lowest overflow-hidden rounded-3xl border shadow-sm">
        {isLoading ? (
          <div className="text-on-surface-variant py-12 text-center text-sm font-medium">
            Memuat titik peta geospasial...
          </div>
        ) : locations.length === 0 ? (
          <div className="text-on-surface-variant space-y-2 py-12 text-center text-sm font-medium">
            <Icon name="map" className="text-primary/40 mx-auto text-4xl" />
            <p>Belum ada titik peta yang ditambahkan.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface-container-highest text-on-surface-variant border-b text-xs font-bold uppercase">
                <tr>
                  <th className="px-6 py-4">Nama Fasilitas & Deskripsi</th>
                  <th className="px-6 py-4">Kategori</th>
                  <th className="px-6 py-4">Tautan Google Maps</th>
                  <th className="px-6 py-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-outline-variant/20 divide-y">
                {locations.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-surface-container-low transition"
                  >
                    <td className="px-6 py-4">
                      <p className="text-primary text-base font-bold">
                        {item.name}
                      </p>
                      <p className="text-on-surface-variant mt-0.5 text-xs">
                        {item.shortDescription || item.address}
                      </p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="bg-secondary-container text-on-secondary-container rounded-full px-3 py-1 text-xs font-bold">
                        {item.categoryName}
                      </span>
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
                        <span className="text-on-surface-variant font-mono text-xs">
                          {item.latitude.toFixed(4)},{" "}
                          {item.longitude.toFixed(4)}
                        </span>
                      )}
                    </td>
                    <td className="space-x-2 px-6 py-4 text-right whitespace-nowrap">
                      <button
                        onClick={() => openEditModal(item)}
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-on-primary rounded-xl px-3 py-1.5 text-xs font-bold transition"
                      >
                        Sunting
                      </button>
                      <button
                        onClick={() => handleDelete(item.id, item.name)}
                        className="bg-error/10 text-error hover:bg-error hover:text-on-error rounded-xl px-3 py-1.5 text-xs font-bold transition"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal Form Tambah/Edit Titik Peta (Tanpa input Lat/Lng Manual!) */}
      {isModalOpen && (
        <div className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
          <div className="border-outline-variant/30 bg-surface-container-lowest text-on-surface w-full max-w-xl space-y-6 rounded-[2.5rem] border p-8 shadow-2xl">
            <div className="flex items-center justify-between border-b pb-4">
              <h3 className="font-headline-md text-primary text-xl font-bold">
                {editingId ? "Sunting Titik Peta" : "Tambah Titik Peta Baru"}
              </h3>
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
                  Nama Fasilitas / Landmark (Wajib)
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-2xl border p-3.5 text-sm font-bold outline-none"
                  placeholder="Contoh: Balai Desa Pringgodani"
                />
              </div>

              <div>
                <label className="font-label-sm text-on-surface-variant mb-1 block text-xs font-bold uppercase">
                  Link / Tautan Google Maps (Wajib)
                </label>
                <input
                  type="url"
                  required
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
                  placeholder="Tempelkan link lokasi dari Google Maps (cth: https://maps.app.goo.gl/...)"
                />
                <p className="text-on-surface-variant mt-1.5 flex items-center gap-1 text-[11px]">
                  <Icon name="info" className="text-primary text-sm" />
                  Koordinat lokasi akan otomatis dideteksi dari link Google Maps
                  yang Anda tempelkan, atau Anda dapat mengeklik peta di bawah.
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
                        mapCategoryId: categoryId || "cat-1",
                        name: name || "Lokasi Baru",
                        shortDescription:
                          shortDescription || address || "Desa Pringgodani",
                        latitude,
                        longitude,
                        address: address || null,
                        imageUrl: null,
                        category: {
                          id: categoryId || "cat-1",
                          name: "Fasilitas",
                          slug: "facility",
                          icon: "place",
                          color: "#0284c7",
                        },
                      },
                    ]}
                    selectedLocation={null}
                    onSelectLocation={() => {}}
                    onMapClick={(lat: number, lng: number) => {
                      setLatitude(lat);
                      setLongitude(lng);
                      setGoogleMapsUrl(
                        `https://www.google.com/maps?q=${lat},${lng}`,
                      );
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
                      value={latitude}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        setLatitude(val);
                        setGoogleMapsUrl(
                          `https://www.google.com/maps?q=${val},${longitude}`,
                        );
                      }}
                      className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-xl border p-2 text-xs outline-none"
                    />
                  </div>
                  <div>
                    <span className="text-on-surface-variant text-[11px] font-bold">
                      Longitude
                    </span>
                    <input
                      type="number"
                      step="any"
                      value={longitude}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        setLongitude(val);
                        setGoogleMapsUrl(
                          `https://www.google.com/maps?q=${latitude},${val}`,
                        );
                      }}
                      className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-xl border p-2 text-xs outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="font-label-sm text-on-surface-variant mb-1 block text-xs font-bold uppercase">
                  Kategori Peta
                </label>
                <select
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                  className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-2xl border p-3.5 text-sm font-semibold outline-none"
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-label-sm text-on-surface-variant mb-1 block text-xs font-bold uppercase">
                  Deskripsi Singkat
                </label>
                <input
                  type="text"
                  value={shortDescription}
                  onChange={(e) => setShortDescription(e.target.value)}
                  className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-2xl border p-3.5 text-sm outline-none"
                  placeholder="Kantor pusat pelayanan publik kependudukan desa..."
                />
              </div>

              <div>
                <label className="font-label-sm text-on-surface-variant mb-1 block text-xs font-bold uppercase">
                  Alamat Lengkap
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-2xl border p-3.5 text-sm outline-none"
                  placeholder="Jl. Raya Desa Pringgodani No. 1..."
                />
              </div>

              <div className="flex justify-end gap-3 border-t pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-surface border-outline-variant text-on-surface rounded-2xl border px-5 py-3 text-xs font-bold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="bg-primary text-on-primary hover:bg-primary/90 rounded-2xl px-6 py-3 text-xs font-bold shadow-md transition"
                >
                  Simpan Titik Peta
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
