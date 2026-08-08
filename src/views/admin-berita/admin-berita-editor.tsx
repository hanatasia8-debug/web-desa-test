"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Icon } from "@/shared/ui/icon";
import { FallbackImage } from "@/shared/ui/fallback-image";
import { AdminNewsService } from "@/entities/admin/api/admin-news.service";
import type { NewsStatus } from "@/entities/admin/model/admin.types";
import { generateAutoExcerpt } from "@/shared/utils/news-excerpt.helper";

interface ContentBlockInput {
  subHeading: string;
  content: string;
  imageUrl: string;
}

interface AdminNewsDetail {
  title?: string;
  categoryName?: string;
  excerpt?: string;
  summary?: string;
  coverUrl?: string;
  coverImage?: string;
  status?: NewsStatus;
  contentSections?: Array<{
    sectionTitle?: string | null;
    paragraph?: string;
    sectionImage?: string | null;
  }>;
  contentBlocks?: Array<{
    subHeading?: string;
    content: string;
    imageUrl?: string;
  }>;
}

export function AdminBeritaEditor({
  isNew = true,
  newsId,
}: {
  isNew?: boolean;
  newsId?: string;
}) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [categoryName, setCategoryName] = useState("Kegiatan Desa");
  const [coverUrl, setCoverUrl] = useState("");
  const [status, setStatus] = useState<NewsStatus>("PUBLISHED");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [blocks, setBlocks] = useState<ContentBlockInput[]>([
    { subHeading: "", content: "", imageUrl: "" },
  ]);

  useEffect(() => {
    if (newsId) {
      AdminNewsService.getNewsById(newsId).then((data) => {
        if (data) {
          const detail = data as unknown as AdminNewsDetail;
          setTitle(detail.title || "");
          setCategoryName(detail.categoryName || "Kegiatan Desa");
          setCoverUrl(detail.coverUrl || detail.coverImage || "");
          setStatus(detail.status || "PUBLISHED");

          if (detail.contentSections && detail.contentSections.length > 0) {
            setBlocks(
              detail.contentSections.map((sec) => ({
                subHeading: sec.sectionTitle || "",
                content: sec.paragraph || "",
                imageUrl: sec.sectionImage || "",
              })),
            );
          } else if (detail.contentBlocks && detail.contentBlocks.length > 0) {
            setBlocks(
              detail.contentBlocks.map((b) => ({
                subHeading: b.subHeading || "",
                content: b.content || "",
                imageUrl: b.imageUrl || "",
              })),
            );
          }
        }
      });
    }
  }, [newsId]);

  const addBlock = () => {
    setBlocks([...blocks, { subHeading: "", content: "", imageUrl: "" }]);
  };

  const updateBlock = (
    index: number,
    key: keyof ContentBlockInput,
    value: string,
  ) => {
    const next = [...blocks];
    next[index][key] = value;
    setBlocks(next);
  };

  const removeBlock = (index: number) => {
    setBlocks(blocks.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const autoExcerpt = generateAutoExcerpt({
      newsTypeId: "STANDARD",
      title,
      blocks: blocks.map((b) => ({
        content: b.content,
        subHeading: b.subHeading,
      })),
    });

    try {
      await AdminNewsService.createNews({
        title,
        categoryName,
        excerpt: autoExcerpt,
        coverUrl,
        status,
      });
      router.push("/admin/berita");
    } catch (err) {
      console.error("Gagal menyimpan berita:", err);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header & Breadcrumb */}
      <div className="flex flex-col gap-4 border-b pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link
            href="/admin/berita"
            className="text-primary font-label-sm mb-2 inline-flex items-center gap-1.5 text-xs font-bold hover:underline"
          >
            <Icon name="arrow_back" className="text-base" /> Kembali ke Daftar
            Berita
          </Link>
          <h2 className="font-headline-lg text-primary text-3xl font-bold">
            {isNew
              ? "Tulis & Edit Berita Baru (Live Split-View)"
              : "Sunting Berita"}
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/berita"
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
                Simpan & Terbitkan Berita
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
              <Icon name="edit" className="text-xl" /> Formulir Konten Berita
            </h3>
            <p className="text-on-surface-variant mt-1 text-xs">
              Setiap perubahan pada input ini langsung memperbarui pratinjau di
              sisi kanan.
            </p>
          </div>

          <div>
            <label className="font-label-sm text-on-surface-variant mb-2 block text-xs font-bold uppercase">
              Judul Berita (Wajib)
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-2xl border p-3.5 text-sm font-bold outline-none"
              placeholder="Masukkan judul berita utama..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-label-sm text-on-surface-variant mb-2 block text-xs font-bold uppercase">
                Kategori Berita
              </label>
              <select
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-2xl border p-3.5 text-sm font-semibold outline-none"
              >
                <option value="Kegiatan Desa">Kegiatan Desa</option>
                <option value="Pembangunan">Pembangunan</option>
                <option value="Pengumuman">Pengumuman</option>
                <option value="Ekonomi & UMKM">Ekonomi & UMKM</option>
              </select>
            </div>

            <div>
              <label className="font-label-sm text-on-surface-variant mb-2 block text-xs font-bold uppercase">
                Status Publikasi
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as NewsStatus)}
                className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-2xl border p-3.5 text-sm font-semibold outline-none"
              >
                <option value="PUBLISHED">PUBLISHED (Langsung Terbit)</option>
                <option value="DRAFT">DRAFT (Konsep Simpan)</option>
                <option value="PENDING">PENDING (Menunggu Review)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="font-label-sm text-on-surface-variant mb-2 block text-xs font-bold uppercase">
              URL Foto Sampul Utama (Cover Image)
            </label>
            <input
              type="url"
              value={coverUrl}
              onChange={(e) => setCoverUrl(e.target.value)}
              className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-2xl border p-3.5 text-xs outline-none"
              placeholder="https://..."
            />
          </div>

          {/* Dinamis Paragraf Blocks */}
          <div className="space-y-4 border-t pt-6">
            <div className="flex items-center justify-between">
              <h4 className="text-primary text-sm font-bold tracking-wider uppercase">
                Blok Paragraf & Sub-Heading Artikels
              </h4>
              <button
                type="button"
                onClick={addBlock}
                className="bg-primary/10 text-primary hover:bg-primary hover:text-on-primary flex items-center gap-1 rounded-xl px-3 py-1.5 text-xs font-bold transition"
              >
                <Icon name="add" className="text-sm" /> Tambah Blok
              </button>
            </div>

            {blocks.map((block, idx) => (
              <div
                key={idx}
                className="bg-surface border-outline-variant/30 relative space-y-3 rounded-2xl border p-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-primary text-xs font-bold">
                    Blok #{idx + 1}
                  </span>
                  {blocks.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeBlock(idx)}
                      className="text-error text-xs font-bold hover:underline"
                    >
                      Hapus Blok
                    </button>
                  )}
                </div>

                <input
                  type="text"
                  value={block.subHeading}
                  onChange={(e) =>
                    updateBlock(idx, "subHeading", e.target.value)
                  }
                  placeholder="Sub-Heading (Opsional)..."
                  className="bg-surface-container-lowest border-outline-variant text-on-surface w-full rounded-xl border p-2.5 text-xs font-bold outline-none"
                />

                <textarea
                  rows={3}
                  value={block.content}
                  onChange={(e) => updateBlock(idx, "content", e.target.value)}
                  placeholder="Isi uraian paragraf berita..."
                  className="bg-surface-container-lowest border-outline-variant text-on-surface w-full rounded-xl border p-2.5 text-xs leading-relaxed outline-none"
                />

                <input
                  type="url"
                  value={block.imageUrl}
                  onChange={(e) => updateBlock(idx, "imageUrl", e.target.value)}
                  placeholder="URL Foto Blok Sisipan (Opsional)..."
                  className="bg-surface-container-lowest border-outline-variant text-on-surface w-full rounded-xl border p-2.5 text-xs outline-none"
                />
              </div>
            ))}
          </div>
        </form>

        {/* Kolom Kanan: Live Real-Time Public Article Preview */}
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

            {/* Layout Pratinjau Artikel */}
            <div className="space-y-6">
              <div className="bg-surface-container relative aspect-[16/9] overflow-hidden rounded-2xl">
                <FallbackImage
                  src={coverUrl}
                  alt={title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <span className="bg-secondary-container text-on-secondary-container rounded-full px-3 py-1 text-xs font-bold">
                  {categoryName}
                </span>
                <h1 className="font-headline-lg text-primary mt-3 text-2xl leading-tight font-bold">
                  {title || "Judul Berita Belum Diisi"}
                </h1>
                <p className="text-on-surface-variant mt-2 text-xs">
                  Diterbitkan oleh{" "}
                  <span className="text-primary font-semibold">
                    Pemerintah Desa Pringgodani
                  </span>{" "}
                  •{" "}
                  {new Date().toLocaleDateString("id-ID", {
                    dateStyle: "full",
                  })}
                </p>
              </div>

              <div className="text-on-surface-variant border-t border-b py-4 text-sm leading-relaxed italic">
                &quot;
                {generateAutoExcerpt({
                  newsTypeId: "STANDARD",
                  title,
                  blocks: blocks.map((b) => ({
                    content: b.content,
                    subHeading: b.subHeading,
                  })),
                })}
                &quot;
              </div>

              <div className="space-y-6">
                {blocks.map((block, idx) => (
                  <div key={idx} className="space-y-3">
                    {block.subHeading && (
                      <h3 className="font-headline-md text-primary text-lg font-bold">
                        {block.subHeading}
                      </h3>
                    )}
                    <p className="text-on-surface-variant text-sm leading-relaxed whitespace-pre-line">
                      {block.content || "Isi paragraf..."}
                    </p>
                    {block.imageUrl && (
                      <div className="bg-surface-container aspect-[16/9] overflow-hidden rounded-2xl">
                        <FallbackImage
                          src={block.imageUrl}
                          alt={block.subHeading}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
