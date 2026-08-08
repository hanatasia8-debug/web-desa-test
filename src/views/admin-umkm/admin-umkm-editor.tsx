"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Icon } from "@/shared/ui/icon";
import { FallbackImage } from "@/shared/ui/fallback-image";
import { AdminUmkmService } from "@/entities/admin/api/admin-umkm.service";
import type { UmkmStatus } from "@/entities/admin/model/admin.types";

interface ProductInput {
  name: string;
  price: number;
  description: string;
}

export function AdminUmkmEditor({ isNew = true }: { isNew?: boolean }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [categoryName, setCategoryName] = useState("Kuliner");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [status, setStatus] = useState<UmkmStatus>("APPROVED");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [products, setProducts] = useState<ProductInput[]>([]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await AdminUmkmService.createUmkm({
        name,
        ownerName,
        categoryName,
        phone,
        address,
        coverUrl,
        status,
      });
      router.push("/admin/umkm");
    } catch (err) {
      console.error("Gagal menyimpan UMKM:", err);
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

          <div>
            <label className="font-label-sm text-on-surface-variant mb-2 block text-xs font-bold uppercase">
              Nama Usaha / Brand UMKM (Wajib)
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-2xl border p-3.5 text-sm font-bold outline-none"
              placeholder="Masukkan nama UMKM..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-label-sm text-on-surface-variant mb-2 block text-xs font-bold uppercase">
                Nama Pemilik Usaha
              </label>
              <input
                type="text"
                required
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-2xl border p-3.5 text-sm font-semibold outline-none"
                placeholder="Nama pemilik..."
              />
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
                type="text"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-2xl border p-3.5 font-mono text-sm outline-none"
                placeholder="081234567890"
              />
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
              URL Foto Sampul / Logo Usaha
            </label>
            <input
              type="url"
              value={coverUrl}
              onChange={(e) => setCoverUrl(e.target.value)}
              className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-2xl border p-3.5 text-xs outline-none"
              placeholder="https://..."
            />
          </div>

          <div>
            <label className="font-label-sm text-on-surface-variant mb-2 block text-xs font-bold uppercase">
              Alamat Lengkap Usaha
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-2xl border p-3.5 text-sm outline-none"
              placeholder="Alamat dusun / RT / RW..."
            />
          </div>

          <div>
            <label className="font-label-sm text-on-surface-variant mb-2 block text-xs font-bold uppercase">
              Deskripsi Produk / Profil Singkat Usaha
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-2xl border p-3.5 text-sm leading-relaxed outline-none"
              placeholder="Jelaskan produk unggulan & keunikan usaha..."
            />
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
