"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Icon } from "@/shared/ui/icon";
import { FallbackImage } from "@/shared/ui/fallback-image";
import { AdminUmkmService } from "@/entities/admin/api/admin-umkm.service";
import type { UmkmStatus } from "@/entities/admin/model/admin.types";
import type { ApiSuccessBody } from "@/shared/api/response";
import { apiClient } from "@/shared/api/axios-instance";

interface ProductInput {
  name: string;
  price: number;
  description: string;
}

export function AdminUmkmEditor({
  isNew = true,
  umkmId,
}: {
  isNew?: boolean;
  umkmId?: string;
}) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [categoryName, setCategoryName] = useState("Kuliner");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [addressUrl, setAddressUrl] = useState("");
  const [description, setDescription] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [status, setStatus] = useState<UmkmStatus>("APPROVED");
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [latitude, setLatitude] = useState(-8.2811);
  const [longitude, setLongitude] = useState(112.5664);

  const [products, setProducts] = useState<ProductInput[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const uploadSingleFile = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);

    // See admin-berita-editor.tsx for why this goes through apiClient's
    // relative "/api" path (routed by next.config.ts rewrites) instead of
    // manually building a `${hostname}:3000` URL.
    const { data } = await apiClient.post<ApiSuccessBody<{ url: string }>>(
      "/uploads",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    if (!data?.data?.url) {
      throw new Error("Gagal mengunggah gambar");
    }
    return data.data.url;
  };

  const DRAFT_KEY = "admin_umkm_draft_v1";

  const clearDraft = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(DRAFT_KEY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && isNew) {
      try {
        const saved = localStorage.getItem(DRAFT_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          setTimeout(() => {
            if (parsed.name) setName(parsed.name);
            if (parsed.ownerName) setOwnerName(parsed.ownerName);
            if (parsed.categoryName) setCategoryName(parsed.categoryName);
            if (parsed.phone) setPhone(parsed.phone);
            if (parsed.address) setAddress(parsed.address);
            if (parsed.description) setDescription(parsed.description);
            if (parsed.coverUrl) setCoverUrl(parsed.coverUrl);
            if (parsed.status) setStatus(parsed.status);
            if (parsed.products) setProducts(parsed.products);
          }, 0);
        }
      } catch (e) {
        console.error("Gagal memulihkan draf UMKM admin:", e);
      }
    }
  }, [isNew]);

  useEffect(() => {
    if (umkmId && !isNew) {
      AdminUmkmService.getUmkmById(umkmId)
        .then((data) => {
          if (data) {
            setTimeout(() => {
              setName(data.name || "");
              setOwnerName(data.ownerName || "");
              setCategoryName(data.categoryName || "Kuliner");
              setPhone(data.phone || "");
              setAddress(data.address || "");
              setDescription(
                ((data as unknown as Record<string, unknown>)
                  .description as string) || "",
              );
              setCoverUrl(data.coverUrl || "");
              setStatus(data.status || "APPROVED");
              setLatitude(
                Number((data as unknown as Record<string, unknown>).latitude) ||
                  -8.2811,
              );
              setLongitude(
                Number(
                  (data as unknown as Record<string, unknown>).longitude,
                ) || 112.5664,
              );
              if ((data as unknown as Record<string, unknown>).products) {
                setProducts(
                  (data as unknown as Record<string, unknown>)
                    .products as ProductInput[],
                );
              }
            }, 0);
          }
        })
        .catch((err) => {
          console.error(`Gagal memuat data UMKM ${umkmId}:`, err);
        });
    }
  }, [umkmId, isNew]);

  useEffect(() => {
    if (typeof window !== "undefined" && isNew) {
      try {
        const draft = {
          name,
          ownerName,
          categoryName,
          phone,
          address,
          description,
          coverUrl,
          status,
          products,
        };
        localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
      } catch (e) {
        console.error("Gagal menyimpan draf UMKM admin:", e);
      }
    }
  }, [
    name,
    ownerName,
    categoryName,
    phone,
    address,
    description,
    coverUrl,
    status,
    products,
    isNew,
  ]);

  const addProduct = () => {
    setProducts([...products, { name: "", price: 0, description: "" }]);
  };

  const updateProduct = (
    index: number,
    key: keyof ProductInput,
    value: string | number,
  ) => {
    const next = [...products];
    next[index] = { ...next[index], [key]: value };
    setProducts(next);
  };

  const removeProduct = (index: number) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  const clearError = (field: string) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  // Zero Trust Validation — mirrors the pattern used on the public
  // pendaftaran form (`registerUmkmSchema` / SubmitUmkmForm's error
  // banner). Previously this editor had no validation at all: the "Simpan"
  // button in the header is wired directly via `onClick`, outside the
  // <form>, so the `required` attributes on the inputs below never
  // actually triggered browser validation — an incomplete save just went
  // straight to the API call with no feedback (UAT #242).
  const validateForm = (): boolean => {
    const fieldErrors: Record<string, string> = {};
    if (!name.trim()) fieldErrors.name = "Nama usaha wajib diisi";
    if (!ownerName.trim()) fieldErrors.ownerName = "Nama pemilik wajib diisi";
    if (!phone.trim()) fieldErrors.phone = "Nomor telepon/WhatsApp wajib diisi";
    if (!address.trim()) fieldErrors.address = "Alamat usaha wajib diisi";
    if (!description.trim())
      fieldErrors.description = "Deskripsi usaha wajib diisi";
    if (!coverUrl.trim())
      fieldErrors.coverUrl = "Foto sampul/logo usaha wajib diunggah";

    setErrors(fieldErrors);

    const firstErrorField = Object.keys(fieldErrors)[0];
    if (firstErrorField) {
      setTimeout(() => {
        const el = document.getElementById(`field-${firstErrorField}`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          if (typeof el.focus === "function") el.focus();
        }
      }, 80);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      let finalCoverUrl = coverUrl;
      if (coverFile) {
        finalCoverUrl = await uploadSingleFile(coverFile);
        if (coverUrl.startsWith("blob:")) {
          URL.revokeObjectURL(coverUrl);
        }
      }

      const payload = {
        name,
        ownerName,
        categoryName,
        phone,
        address,
        addressUrl,
        coverUrl: finalCoverUrl,
        status,
        products,
        description,
        latitude,
        longitude,
      };

      if (isNew) {
        await AdminUmkmService.createUmkm(
          payload as unknown as Parameters<
            typeof AdminUmkmService.createUmkm
          >[0],
        );
      } else if (umkmId) {
        const { success } = await AdminUmkmService.updateUmkm(
          umkmId,
          payload as unknown as Parameters<
            typeof AdminUmkmService.updateUmkm
          >[1],
        );
        if (!success) {
          throw new Error("Gagal menyimpan perubahan UMKM ke server.");
        }
      }
      clearDraft();
      router.push("/admin/umkm");
    } catch (err) {
      console.error("Gagal menyimpan UMKM:", err);
      alert(
        "Gagal menyimpan profil UMKM ke server. Periksa koneksi internet Anda, atau pastikan foto yang diunggah berformat gambar dan berukuran di bawah 10MB, lalu coba lagi.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header & Breadcrumb */}
      <div className="flex flex-col gap-4 border-b pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link
            href="/admin/umkm"
            onClick={clearDraft}
            className="text-primary font-label-sm mb-2 inline-flex items-center gap-1.5 text-xs font-bold hover:underline"
          >
            <Icon name="arrow_back" className="text-base" /> Kembali ke Daftar
            UMKM
          </Link>
          <h2 className="font-headline-lg text-primary text-3xl font-bold">
            {isNew
              ? "Tambah & Edit UMKM Baru (Live Split-View)"
              : "Sunting Profil UMKM"}
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/umkm"
            onClick={clearDraft}
            className="bg-surface border-outline-variant text-on-surface hover:bg-surface-container-high rounded-2xl border px-5 py-3 text-xs font-bold transition"
          >
            Batal
          </Link>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="bg-primary text-on-primary hover:bg-primary/90 flex items-center gap-2 rounded-2xl px-6 py-3 text-xs font-bold shadow-md transition"
          >
            {isSubmitting ? (
              <>
                <Icon name="sync" className="animate-spin text-base" />
                Menyimpan...
              </>
            ) : (
              <>
                <Icon name="save" className="text-base" />
                Simpan Profil UMKM
              </>
            )}
          </button>
        </div>
      </div>

      {/* Grid Split-View 2 Kolom (Kiri: Form Input, Kanan: Real-Time Preview) */}
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
        {/* Kolom Kiri: Formulir Penyuntingan */}
        <form
          onSubmit={handleSubmit}
          className="border-outline-variant/30 bg-surface-container-lowest space-y-6 rounded-3xl border p-8 shadow-sm"
        >
          <div className="border-b pb-4">
            <h3 className="font-headline-md text-primary flex items-center gap-2 text-lg font-bold">
              <Icon name="edit" className="text-xl" /> Informasi Profil UMKM
            </h3>
            <p className="text-on-surface-variant mt-1 text-xs">
              Setiap perubahan pada input ini langsung memperbarui pratinjau
              profil di sebelah kanan.
            </p>
          </div>

          {/* ERROR SUMMARY BANNER (UAT #242) */}
          {Object.keys(errors).length > 0 && (
            <div className="animate-in fade-in slide-in-from-top-2 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-900 shadow-sm">
              <Icon
                name="error"
                className="mt-0.5 shrink-0 text-xl text-red-600"
              />
              <div className="flex-1">
                <h4 className="text-sm font-bold text-red-800">
                  Beberapa Kolom Wajib Belum Diisi dengan Benar:
                </h4>
                <ul className="mt-2 list-inside list-disc space-y-1 text-xs text-red-700">
                  {Object.entries(errors).map(([field, msg]) => (
                    <li key={field}>
                      <button
                        type="button"
                        onClick={() => {
                          const el = document.getElementById(`field-${field}`);
                          el?.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                          });
                          el?.focus();
                        }}
                        className="text-left font-bold text-red-800 hover:underline"
                      >
                        {msg} ↗
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div>
            <label className="font-label-sm text-on-surface-variant mb-2 block text-xs font-bold uppercase">
              Nama Usaha / Brand UMKM (Wajib)
            </label>
            <input
              id="field-name"
              type="text"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                clearError("name");
              }}
              className={`bg-surface w-full rounded-2xl border p-3.5 text-sm font-bold outline-none ${errors.name ? "border-error focus:border-error" : "border-outline-variant text-on-surface focus:border-primary"}`}
              placeholder="Masukkan nama UMKM..."
            />
            {errors.name && (
              <p className="text-error mt-1.5 text-xs font-semibold">
                {errors.name}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-label-sm text-on-surface-variant mb-2 block text-xs font-bold uppercase">
                Nama Pemilik Usaha
              </label>
              <input
                id="field-ownerName"
                type="text"
                required
                value={ownerName}
                onChange={(e) => {
                  setOwnerName(e.target.value);
                  clearError("ownerName");
                }}
                className={`bg-surface w-full rounded-2xl border p-3.5 text-sm font-semibold outline-none ${errors.ownerName ? "border-error focus:border-error" : "border-outline-variant text-on-surface focus:border-primary"}`}
                placeholder="Nama pemilik..."
              />
              {errors.ownerName && (
                <p className="text-error mt-1.5 text-xs font-semibold">
                  {errors.ownerName}
                </p>
              )}
            </div>

            <div>
              <label className="font-label-sm text-on-surface-variant mb-2 block text-xs font-bold uppercase">
                Kategori Usaha
              </label>
              <select
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-2xl border p-3.5 text-sm font-semibold outline-none"
              >
                <option value="Kuliner">Kuliner</option>
                <option value="Kerajinan & Souvenir">
                  Kerajinan & Souvenir
                </option>
                <option value="Pertanian & Peternakan">
                  Pertanian & Peternakan
                </option>
                <option value="Jasa & Perdagangan">Jasa & Perdagangan</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-label-sm text-on-surface-variant mb-2 block text-xs font-bold uppercase">
                No. Telepon / WhatsApp
              </label>
              <input
                id="field-phone"
                type="text"
                required
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  clearError("phone");
                }}
                className={`bg-surface w-full rounded-2xl border p-3.5 font-mono text-sm outline-none ${errors.phone ? "border-error focus:border-error" : "border-outline-variant text-on-surface focus:border-primary"}`}
                placeholder="081234567890"
              />
              {errors.phone && (
                <p className="text-error mt-1.5 text-xs font-semibold">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label className="font-label-sm text-on-surface-variant mb-2 block text-xs font-bold uppercase">
                Status Verifikasi
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as UmkmStatus)}
                className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-2xl border p-3.5 text-sm font-semibold outline-none"
              >
                <option value="APPROVED">APPROVED (Setujui Usaha)</option>
                <option value="PENDING">PENDING (Tinjau Warga)</option>
                <option value="REJECTED">REJECTED (Tolak Usaha)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="font-label-sm text-on-surface-variant mb-2 block text-xs font-bold uppercase">
              Foto Sampul / Logo Usaha
            </label>
            <div className="flex items-center gap-2">
              <input
                id="field-coverUrl"
                type="url"
                value={coverUrl}
                onChange={(e) => {
                  setCoverUrl(e.target.value);
                  clearError("coverUrl");
                }}
                className={`bg-surface flex-1 rounded-2xl border p-3.5 text-xs outline-none ${errors.coverUrl ? "border-error focus:border-error" : "border-outline-variant text-on-surface focus:border-primary"}`}
                placeholder="https://..."
              />
              <label className="bg-primary text-on-primary hover:bg-primary/90 flex h-12 cursor-pointer items-center justify-center gap-1.5 rounded-2xl px-4 text-xs font-bold whitespace-nowrap shadow-sm transition">
                <Icon name="image" className="text-base" />
                Pilih Foto
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setCoverFile(file);
                      const localUrl = URL.createObjectURL(file);
                      setCoverUrl(localUrl);
                      clearError("coverUrl");
                    }
                  }}
                />
              </label>
            </div>
            {errors.coverUrl && (
              <p className="text-error mt-1.5 text-xs font-semibold">
                {errors.coverUrl}
              </p>
            )}
          </div>

          <div>
            <label className="font-label-sm text-on-surface-variant mb-2 block text-xs font-bold uppercase">
              Alamat Lengkap Usaha
            </label>
            <input
              id="field-address"
              type="text"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
                clearError("address");
              }}
              className={`bg-surface w-full rounded-2xl border p-3.5 text-sm outline-none ${errors.address ? "border-error focus:border-error" : "border-outline-variant text-on-surface focus:border-primary"}`}
              placeholder="Alamat dusun / RT / RW..."
            />
            {errors.address && (
              <p className="text-error mt-1.5 text-xs font-semibold">
                {errors.address}
              </p>
            )}
          </div>

          <div>
            <label className="font-label-sm text-on-surface-variant mb-2 block text-xs font-bold uppercase">
              Link Google Maps Lokasi Usaha (Opsional)
            </label>
            <div className="relative">
              <input
                type="url"
                value={addressUrl}
                onChange={(e) => setAddressUrl(e.target.value)}
                className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-2xl border p-3.5 pl-10 text-sm outline-none"
                placeholder="https://maps.app.goo.gl/..."
              />
              <Icon
                name="link"
                className="text-on-surface-variant absolute top-3.5 left-3 text-lg"
              />
            </div>
            <p className="text-on-surface-variant/70 mt-1.5 text-[11px] italic">
              Salin link lokasi dari Google Maps untuk memudahkan calon pembeli
              bernavigasi langsung via GPS HP.
            </p>
          </div>

          <div>
            <label className="font-label-sm text-on-surface-variant mb-2 block text-xs font-bold uppercase">
              Deskripsi Produk / Profil Singkat Usaha
            </label>
            <textarea
              id="field-description"
              rows={3}
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                clearError("description");
              }}
              className={`bg-surface w-full rounded-2xl border p-3.5 text-sm leading-relaxed outline-none ${errors.description ? "border-error focus:border-error" : "border-outline-variant text-on-surface focus:border-primary"}`}
              placeholder="Jelaskan produk unggulan & keunikan usaha..."
            />
            {errors.description && (
              <p className="text-error mt-1.5 text-xs font-semibold">
                {errors.description}
              </p>
            )}
          </div>

          {/* Dinamis Produk List */}
          <div className="space-y-4 border-t pt-6">
            <div className="flex items-center justify-between">
              <h4 className="text-primary text-sm font-bold tracking-wider uppercase">
                Katalog Produk Unggulan
              </h4>
              <button
                type="button"
                onClick={addProduct}
                className="bg-primary/10 text-primary hover:bg-primary hover:text-on-primary flex items-center gap-1 rounded-xl px-3 py-1.5 text-xs font-bold transition"
              >
                <Icon name="add" className="text-sm" /> Tambah Produk
              </button>
            </div>

            {products.map((p, idx) => (
              <div
                key={idx}
                className="bg-surface border-outline-variant/30 relative space-y-3 rounded-2xl border p-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-primary text-xs font-bold">
                    Produk #{idx + 1}
                  </span>
                  {products.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeProduct(idx)}
                      className="text-error text-xs font-bold hover:underline"
                    >
                      Hapus
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={p.name}
                    onChange={(e) => updateProduct(idx, "name", e.target.value)}
                    placeholder="Nama produk..."
                    className="bg-surface-container-lowest border-outline-variant text-on-surface w-full rounded-xl border p-2.5 text-xs font-bold outline-none"
                  />
                  <input
                    type="number"
                    value={p.price}
                    onChange={(e) =>
                      updateProduct(idx, "price", Number(e.target.value))
                    }
                    placeholder="Harga (Rp)..."
                    className="bg-surface-container-lowest border-outline-variant text-on-surface w-full rounded-xl border p-2.5 font-mono text-xs font-bold outline-none"
                  />
                </div>

                <input
                  type="text"
                  value={p.description}
                  onChange={(e) =>
                    updateProduct(idx, "description", e.target.value)
                  }
                  placeholder="Keterangan singkat produk..."
                  className="bg-surface-container-lowest border-outline-variant text-on-surface w-full rounded-xl border p-2.5 text-xs outline-none"
                />
              </div>
            ))}
          </div>
        </form>

        {/* Kolom Kanan: Live Real-Time Public UMKM Profile Preview */}
        <div className="sticky top-24 space-y-4">
          <div className="bg-surface-container-lowest border-outline-variant/30 space-y-6 rounded-3xl border p-8 shadow-xl">
            <div className="flex items-center justify-between border-b pb-4">
              <span className="bg-primary/10 text-primary font-label-sm inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold">
                <Icon name="visibility" className="text-sm" /> Live Pratinjau
                Tampilan Publik
              </span>
              <span className="text-on-surface-variant text-xs font-medium">
                Real-time Layout
              </span>
            </div>

            {/* Layout Pratinjau UMKM */}
            <div className="space-y-6">
              <div className="bg-surface-container relative aspect-[16/9] overflow-hidden rounded-2xl">
                <FallbackImage
                  src={coverUrl}
                  alt={name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <span className="bg-secondary-container text-on-secondary-container rounded-full px-3 py-1 text-xs font-bold">
                  {categoryName}
                </span>
                <h1 className="font-headline-lg text-primary mt-3 text-2xl leading-tight font-bold">
                  {name || "Nama UMKM Belum Diisi"}
                </h1>
                <p className="text-on-surface-variant mt-2 text-xs">
                  Pemilik:{" "}
                  <span className="text-primary font-semibold">
                    {ownerName || "Pemilik"}
                  </span>{" "}
                  • {address}
                </p>
              </div>

              <div className="bg-primary-container/30 border-primary/20 flex items-center justify-between rounded-2xl border p-4">
                <div>
                  <p className="text-on-surface-variant text-xs font-bold">
                    Pesan via WhatsApp
                  </p>
                  <p className="text-primary font-mono text-sm font-bold">
                    {phone}
                  </p>
                </div>
                <span className="bg-primary text-on-primary flex items-center gap-1 rounded-xl px-4 py-2 text-xs font-bold">
                  <Icon name="chat" className="text-sm" /> Hubungi
                </span>
              </div>

              {addressUrl && (
                <div className="bg-surface-container border-outline-variant/30 flex items-center justify-between rounded-2xl border p-4">
                  <div className="overflow-hidden pr-2">
                    <p className="text-on-surface-variant text-xs font-bold">
                      Lokasi Google Maps
                    </p>
                    <p className="text-primary max-w-[200px] truncate font-mono text-xs font-semibold">
                      {addressUrl}
                    </p>
                  </div>
                  <a
                    href={addressUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-on-primary hover:bg-primary/90 flex shrink-0 items-center gap-1 rounded-xl px-3 py-2 text-xs font-bold shadow-sm transition"
                  >
                    <Icon name="open_in_new" className="text-sm" /> Buka Maps
                  </a>
                </div>
              )}

              <div className="text-on-surface-variant border-t pt-4 text-sm leading-relaxed">
                {description || "Deskripsi usaha belum diisi..."}
              </div>

              {products.length > 0 && (
                <div className="space-y-3 border-t pt-4">
                  <h4 className="text-primary text-sm font-bold">
                    Katalog Produk Unggulan:
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {products.map((p, idx) => (
                      <div
                        key={idx}
                        className="bg-surface flex items-center justify-between rounded-xl border p-3"
                      >
                        <div>
                          <p className="text-xs font-bold">
                            {p.name || "Nama Produk"}
                          </p>
                          <p className="text-on-surface-variant text-xs">
                            {p.description}
                          </p>
                        </div>
                        <span className="text-primary font-mono text-xs font-bold">
                          Rp {(p.price || 0).toLocaleString("id-ID")}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
