"use client";

import { useState } from "react";
import { Icon } from "@/shared/ui/icon";
import type {
  PendingNewsSubmission,
  PendingUmkmSubmission,
} from "@/entities/admin/model/admin.types";
import { SubmitBeritaForm } from "@/views/submit-berita/submit-berita-form";
import { SubmitUmkmForm } from "@/views/submit-umkm/submit-umkm-form";
import { SubmitBeritaPreview } from "@/views/submit-berita-preview/submit-berita-preview";
import { SubmitUmkmPreview } from "@/views/submit-umkm-preview/submit-umkm-preview";
import type {
  NewsCategoryDto,
  NewsDetailDto,
} from "@/entities/berita/model/types";
import type {
  UmkmCategoryDto,
  UmkmDetailDto,
} from "@/entities/umkm/model/types";
import type { RegisterNewsDTO } from "@/entities/berita/model/register-news.schema";
import type { RegisterUmkmDTO } from "@/entities/umkm/model/register-umkm.schema";

interface SubmissionReviewModalProps {
  type: "NEWS" | "UMKM";
  data: PendingNewsSubmission | PendingUmkmSubmission | null;
  onClose: () => void;
  onApprove: (id: string) => Promise<void>;
  onReject: (id: string, reason: string) => Promise<void>;
}

interface NewsFormState {
  title: string;
  categorySlug: string;
  excerpt: string;
  coverUrl: string;
  authorName: string;
  blocks: Array<{ subHeading?: string; content: string; imageUrl?: string }>;
}

interface UmkmFormState {
  name: string;
  ownerName: string;
  categorySlug: string;
  description: string;
  phone: string;
  address: string;
  coverUrl: string;
  products: Array<{
    name: string;
    price: number;
    description?: string;
    imageUrl?: string;
  }>;
}

const NEWS_CATEGORIES: NewsCategoryDto[] = [
  { id: "1", name: "Kegiatan Desa", slug: "kegiatan-desa", newsCount: 0 },
  { id: "2", name: "Pembangunan", slug: "pembangunan", newsCount: 0 },
  { id: "3", name: "Pengumuman", slug: "pengumuman", newsCount: 0 },
  { id: "4", name: "Ekonomi & UMKM", slug: "ekonomi-umkm", newsCount: 0 },
];

const UMKM_CATEGORIES: UmkmCategoryDto[] = [
  { value: "KULINER", label: "Kuliner", slug: "kuliner", umkmCount: 0 },
  {
    value: "KERAJINAN_SOUVENIR",
    label: "Kerajinan & Souvenir",
    slug: "kerajinan-souvenir",
    umkmCount: 0,
  },
  {
    value: "PERTANIAN_PETERNAKAN",
    label: "Pertanian & Peternakan",
    slug: "pertanian-peternakan",
    umkmCount: 0,
  },
];

export function SubmissionReviewModal({
  type,
  data,
  onClose,
  onApprove,
  onReject,
}: SubmissionReviewModalProps) {
  const [rejectReason, setRejectReason] = useState("");
  const [isRejecting, setIsRejecting] = useState(false);
  const [isActionLoading, setIsActionLoading] = useState(false);

  const isNews = type === "NEWS";
  const newsData = isNews ? (data as PendingNewsSubmission) : null;
  const umkmData = !isNews ? (data as PendingUmkmSubmission) : null;

  const [newsFormData, setNewsFormData] = useState<NewsFormState>({
    title: newsData?.title || "",
    categorySlug: "kegiatan-desa",
    excerpt: newsData?.excerpt || "",
    coverUrl:
      newsData?.coverUrl ||
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80",
    authorName: newsData?.authorName || "Warga Desa",
    blocks: newsData?.contentBlocks || [
      {
        subHeading: "Uraian Berita",
        content: newsData?.excerpt || "Uraian berita pengajuan warga.",
        imageUrl: "",
      },
    ],
  });

  const [umkmFormData, setUmkmFormData] = useState<UmkmFormState>({
    name: umkmData?.name || "",
    ownerName: umkmData?.ownerName || "",
    categorySlug: "kuliner",
    description: umkmData?.description || "",
    phone: umkmData?.phone || "081234567890",
    address: umkmData?.address || "Desa Pringgodani",
    coverUrl:
      umkmData?.coverUrl ||
      "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=800&q=80",
    products: umkmData?.products || [
      { name: "Produk Olahan", price: 15000, description: "Kripik & Camilan" },
    ],
  });

  if (!data) return null;

  const handleApprove = async () => {
    setIsActionLoading(true);
    await onApprove(data.id);
    setIsActionLoading(false);
    onClose();
  };

  const handleConfirmReject = async () => {
    if (!rejectReason.trim()) return;
    setIsActionLoading(true);
    await onReject(data.id, rejectReason);
    setIsActionLoading(false);
    onClose();
  };

  // Build exact public DTOs for 100% precision live preview
  const previewNewsDto: NewsDetailDto = {
    id: newsData?.id || "preview-news",
    title: newsFormData.title || "Judul Berita",
    slug: newsData?.slug || "judul-berita",
    summary: newsFormData.excerpt || "Ringkasan berita.",
    coverImage:
      newsFormData.coverUrl ||
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80",
    coverCaption: newsFormData.title || "Foto berita",
    categoryId: "1",
    categoryName: "Kegiatan Desa",
    categorySlug: newsFormData.categorySlug || "kegiatan-desa",
    authorName: newsFormData.authorName || "Warga Desa",
    authorRole: "Warga Desa",
    publishedAt: new Date().toISOString(),
    readingTimeMinutes: 2,
    contentSections: (newsFormData.blocks || []).map((b) => ({
      sectionTitle: b.subHeading || null,
      paragraph: b.content || "",
      sectionImage: b.imageUrl || null,
    })),
  };

  const previewUmkmDto: UmkmDetailDto = {
    id: umkmData?.id || "preview-umkm",
    name: umkmFormData.name || "Nama UMKM",
    slug: umkmData?.slug || "nama-umkm",
    category: umkmFormData.categorySlug || "Kuliner",
    description: umkmFormData.description || "Deskripsi profil usaha.",
    logo:
      umkmFormData.coverUrl ||
      "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=800&q=80",
    whatsappNumber: umkmFormData.phone || "081234567890",
    address: umkmFormData.address || "Desa Pringgodani",
    ownerName: umkmFormData.ownerName || "Pemilik UMKM",
    publishedAt: new Date().toISOString(),
    latitude: -7.981,
    longitude: 112.631,
    gallery: [
      umkmFormData.coverUrl ||
        "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=800&q=80",
    ],
    products: (umkmFormData.products || []).map((p, idx) => ({
      id: `prod-${idx}`,
      productName: p.name || "Nama Produk",
      price: p.price || 0,
      productPhoto: p.imageUrl || null,
    })),
    potential: null,
  };

  return (
    <div className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
      <div className="border-outline-variant/30 bg-surface-container-lowest text-on-surface flex h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-[2.5rem] border shadow-2xl">
        {/* Header Modal */}
        <div className="bg-primary text-on-primary flex items-center justify-between px-8 py-4">
          <div className="flex items-center gap-3">
            <Icon
              name={isNews ? "newspaper" : "storefront"}
              className="text-2xl"
            />
            <div>
              <h2 className="font-headline-sm text-lg font-bold">
                Tinjauan Pengajuan {isNews ? "Berita" : "UMKM"} Warga
              </h2>
              <p className="text-on-primary/80 text-xs">
                Periksa & sunting detail pengajuan sebelum mempublikasikannya ke
                portal desa.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="hover:bg-on-primary/10 text-on-primary rounded-full p-2 transition-colors"
          >
            <Icon name="close" className="text-xl" />
          </button>
        </div>

        {/* Modal Body (2 Columns Split Editor vs Preview) */}
        <div className="grid flex-1 grid-cols-1 overflow-hidden lg:grid-cols-2">
          {/* Column 1: Editable Form */}
          <div className="border-outline-variant/20 bg-surface-container-low/30 space-y-6 overflow-y-auto border-r p-6">
            <div className="flex items-center justify-between border-b pb-3">
              <span className="font-title-sm text-primary flex items-center gap-2 font-bold">
                <Icon name="edit" className="text-lg" /> Sunting Detail Data
              </span>
              <span className="text-on-surface-variant text-xs italic">
                Data dapat disunting langsung sebelum disetujui
              </span>
            </div>

            {isNews ? (
              <SubmitBeritaForm
                hideSidebar={true}
                formData={newsFormData as unknown as Partial<RegisterNewsDTO>}
                categories={NEWS_CATEGORIES}
                errors={{}}
                onChange={(field, value) =>
                  setNewsFormData((prev) => ({ ...prev, [field]: value }))
                }
                onAddBlock={() =>
                  setNewsFormData((prev) => ({
                    ...prev,
                    blocks: [
                      ...(prev.blocks || []),
                      { subHeading: "", content: "", imageUrl: "" },
                    ],
                  }))
                }
                onRemoveBlock={(idx) =>
                  setNewsFormData((prev) => ({
                    ...prev,
                    blocks: (prev.blocks || []).filter((_, i) => i !== idx),
                  }))
                }
                onBlockChange={(idx, fld, val) => {
                  const blocks = [...(newsFormData.blocks || [])];
                  blocks[idx] = { ...blocks[idx], [fld]: val };
                  setNewsFormData((prev) => ({ ...prev, blocks }));
                }}
                onAddGalleryImage={() => {}}
                onRemoveGalleryImage={() => {}}
                onGalleryImageChange={() => {}}
                onClearDraft={() => {}}
                onSubmitStep={(e) => e.preventDefault()}
              />
            ) : (
              <SubmitUmkmForm
                formData={umkmFormData as unknown as Partial<RegisterUmkmDTO>}
                categories={UMKM_CATEGORIES}
                errors={{}}
                onChange={(field, value) =>
                  setUmkmFormData((prev) => ({ ...prev, [field]: value }))
                }
                onAddProduct={() =>
                  setUmkmFormData((prev) => ({
                    ...prev,
                    products: [
                      ...(prev.products || []),
                      { name: "", price: 0, description: "" },
                    ],
                  }))
                }
                onRemoveProduct={(idx) =>
                  setUmkmFormData((prev) => ({
                    ...prev,
                    products: (prev.products || []).filter((_, i) => i !== idx),
                  }))
                }
                onProductChange={(idx, fld, val) => {
                  const products = [...(umkmFormData.products || [])];
                  products[idx] = { ...products[idx], [fld]: val };
                  setUmkmFormData((prev) => ({ ...prev, products }));
                }}
                onClearDraft={() => {}}
                onSubmitStep={(e) => e.preventDefault()}
              />
            )}

            {isRejecting && (
              <div className="bg-error-container/30 border-error/30 space-y-3 rounded-2xl border p-4">
                <p className="text-error text-xs font-bold uppercase">
                  Alasan Penolakan (Wajib diisi):
                </p>
                <textarea
                  value={rejectReason}
                  onChange={(e) => setRejectReason(e.target.value)}
                  placeholder="Contoh: Foto kurang jelas atau nomor kontak tidak dapat dihubungi."
                  className="border-error/40 focus:border-error bg-surface-container-lowest focus:ring-error w-full rounded-xl border p-3 text-xs focus:ring-1 focus:outline-none"
                  rows={3}
                />
              </div>
            )}
          </div>

          {/* Column 2: Live Public Preview */}
          <div className="bg-surface-container-lowest overflow-y-auto p-6">
            <div className="mb-4 flex items-center justify-between border-b pb-3">
              <span className="font-title-sm text-secondary flex items-center gap-2 font-bold">
                <Icon name="visibility" className="text-lg" /> Live Preview
                Tampilan Publik
              </span>
              <span className="text-on-surface-variant text-xs">
                Tampilan tepat seperti publik
              </span>
            </div>

            {isNews ? (
              <SubmitBeritaPreview
                previewNewsDto={previewNewsDto}
                isSubmitting={false}
                onBackToEdit={() => {}}
                onFinalSubmit={() => {}}
              />
            ) : (
              <SubmitUmkmPreview
                previewDetailDto={previewUmkmDto}
                isSubmitting={false}
                onBackToEdit={() => {}}
                onFinalSubmit={() => {}}
              />
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="border-outline-variant/20 bg-surface-container-low flex items-center justify-between border-t px-8 py-4">
          <button
            type="button"
            onClick={onClose}
            disabled={isActionLoading}
            className="border-outline-variant hover:bg-surface-container-high text-on-surface rounded-full border px-6 py-2.5 text-xs font-bold transition-colors"
          >
            Tutup
          </button>

          <div className="flex items-center gap-3">
            {!isRejecting ? (
              <>
                <button
                  type="button"
                  onClick={() => setIsRejecting(true)}
                  disabled={isActionLoading}
                  className="bg-error/10 text-error hover:bg-error/20 flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold transition-colors"
                >
                  <Icon name="close" className="text-base" /> Tolak Pengajuan
                </button>
                <button
                  type="button"
                  onClick={handleApprove}
                  disabled={isActionLoading}
                  className="bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container flex items-center gap-2 rounded-full px-8 py-2.5 text-xs font-bold shadow-md transition-colors"
                >
                  <Icon name="check_circle" className="text-base" /> Setujui &
                  Publikasikan
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => setIsRejecting(false)}
                  disabled={isActionLoading}
                  className="text-on-surface-variant hover:bg-surface-container-high rounded-full px-5 py-2.5 text-xs font-bold transition-colors"
                >
                  Batal
                </button>
                <button
                  type="button"
                  onClick={handleConfirmReject}
                  disabled={isActionLoading || !rejectReason.trim()}
                  className="bg-error text-on-error hover:bg-error/90 flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold transition-colors disabled:opacity-50"
                >
                  <Icon name="gavel" className="text-base" /> Konfirmasi
                  Penolakan
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
