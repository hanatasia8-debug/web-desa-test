import React, { useRef, useState } from "react";
import { Icon } from "@/shared/ui/icon";
import { FallbackImage } from "@/shared/ui/fallback-image";
import { apiClient } from "@/shared/api/axios-instance";
import type { ApiSuccessBody } from "@/shared/api/response";
import { compressImage, type ImagePreset } from "@/shared/utils/image-compression";

interface FileUploadWithPreviewProps {
  label: string;
  value: string;
  onChange: (url: string) => void;
  placeholder?: string;
  helperText?: string;
  aspectRatio?: "square" | "video" | "banner";
  category?: "profile" | "umkm" | "news" | "village";
}

export function FileUploadWithPreview({
  label,
  value,
  onChange,
  placeholder = "Pilih berkas gambar dari perangkat Anda...",
  helperText,
  aspectRatio = "square",
  category = "profile",
}: FileUploadWithPreviewProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawFile = e.target.files?.[0];
    if (!rawFile) return;

    // Validate size (max 15MB)
    if (rawFile.size > 15 * 1024 * 1024) {
      setUploadError("Ukuran file maksimal adalah 15MB");
      return;
    }

    setIsUploading(true);
    setUploadError(null);

    try {
      // Determine compression preset based on category & aspect ratio
      let preset: ImagePreset = "default";
      if (aspectRatio === "banner" || category === "news") {
        preset = "banner";
      } else if (category === "umkm") {
        preset = "product";
      } else if (category === "profile") {
        preset = "avatar";
      }

      const file = await compressImage(rawFile, preset);

      if (file.size > 4 * 1024 * 1024) {
        throw new Error(
          "Ukuran file hasil kompresi masih melebihi batas 4MB. Harap gunakan foto dengan resolusi lebih kecil."
        );
      }

      const formData = new FormData();
      formData.append("file", file);
      formData.append("category", category);

      const { data } = await apiClient.post<ApiSuccessBody<{ url: string }>>(
        `/uploads?category=${category}`,
        formData,
        {
          timeout: 60000,
        },
      );

      if (data?.data?.url) {
        onChange(data.data.url);
      } else {
        throw new Error("Gagal mendapatkan URL publik dari server storage");
      }
    } catch (err: any) {
      console.error("Gagal mengunggah berkas ke Supabase storage:", err);
      setUploadError(
        err?.response?.data?.message ||
          "Gagal mengunggah berkas ke server storage. Periksa format dan koneksi Anda.",
      );
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const getAspectClass = () => {
    if (aspectRatio === "video") return "aspect-[16/9]";
    if (aspectRatio === "banner") return "aspect-[21/9]";
    return "aspect-square";
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="font-label-sm text-on-surface-variant text-xs font-bold uppercase">
          {label}
        </label>
        <button
          type="button"
          onClick={() => setShowUrlInput(!showUrlInput)}
          className="text-primary inline-flex items-center gap-1 text-[11px] font-bold hover:underline"
        >
          <Icon name="link" className="text-sm" />
          {showUrlInput ? "Gunakan Unggah Berkas" : "Gunakan Link URL"}
        </button>
      </div>

      {showUrlInput ? (
        <div className="space-y-2">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="https://example.com/image.jpg..."
            className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-2xl border p-3 text-xs outline-none"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <div
            className={`bg-surface-container border-outline-variant/30 relative shrink-0 overflow-hidden rounded-2xl border ${
              aspectRatio === "square" ? "h-24 w-24" : "h-28 w-44"
            } ${getAspectClass()}`}
          >
            {value ? (
              <FallbackImage
                src={value}
                alt={label}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="text-on-surface-variant flex h-full w-full flex-col items-center justify-center p-2 text-center">
                <Icon name="image" className="text-primary/40 text-2xl" />
                <span className="mt-1 text-[10px]">Belum Ada Foto</span>
              </div>
            )}
          </div>

          <div className="w-full flex-1 space-y-2">
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />

            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={isUploading}
                onClick={() => fileInputRef.current?.click()}
                className="bg-primary text-on-primary hover:bg-primary/90 disabled:opacity-50 flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-bold shadow-sm transition"
              >
                {isUploading ? (
                  <>
                    <Icon name="sync" className="animate-spin text-base" /> Mengunggah ke Storage...
                  </>
                ) : (
                  <>
                    <Icon name="upload_file" className="text-base" /> Pilih Berkas Gambar
                  </>
                )}
              </button>

              {value && !isUploading && (
                <button
                  type="button"
                  onClick={() => onChange("")}
                  className="bg-error/10 text-error hover:bg-error hover:text-on-error rounded-xl px-3 py-2.5 text-xs font-bold transition"
                >
                  Hapus
                </button>
              )}
            </div>

            {uploadError && (
              <p className="text-error text-xs font-semibold">{uploadError}</p>
            )}

            <p className="text-on-surface-variant text-[11px]">
              {helperText || placeholder}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
