"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/shared/ui/icon";
import { AdminMapsService } from "@/entities/admin/api/admin-maps.service";
import type {
  AdminMapLocation,
  AdminMapCategory,
} from "@/entities/admin/model/admin.types";

function extractCoordinatesFromUrl(url: string): { lat: number; lng: number } {
  if (!url) return { lat: -7.981, lng: 112.631 };

  const match = url.match(
    /@(-?\d+\.\d+),(-?\d+\.\d+)|q=(-?\d+\.\d+),(-?\d+\.\d+)|ll=(-?\d+\.\d+),(-?\d+\.\d+)|(-?\d+\.\d+),\s*(-?\d+\.\d+)/,
  );

  if (match) {
    const latStr = match[1] || match[3] || match[5] || match[7];
    const lngStr = match[2] || match[4] || match[6] || match[8];
    if (latStr && lngStr) {
      return { lat: parseFloat(latStr), lng: parseFloat(lngStr) };
    }
  }

  return { lat: -7.981, lng: 112.631 };
}

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
      latitude: lat,
      longitude: lng,
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
                  onChange={(e) => setGoogleMapsUrl(e.target.value)}
                  className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-2xl border p-3.5 text-xs outline-none"
                  placeholder="Tempelkan link lokasi dari Google Maps (cth: https://maps.app.goo.gl/...)"
                />
                <p className="text-on-surface-variant mt-1.5 flex items-center gap-1 text-[11px]">
                  <Icon name="info" className="text-primary text-sm" />
                  Koordinat lokasi akan otomatis dideteksi dari link Google Maps
                  yang Anda tempelkan.
                </p>
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
