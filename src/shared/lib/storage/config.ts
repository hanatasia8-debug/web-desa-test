/**
 * Folder taxonomy & image presets for Supabase Storage, per `prd_2.txt §7.1`/`§7.2`.
 *
 * villagecms-media-bucket/
 * ├── news/covers/       news/inline/
 * ├── umkm/logos/        umkm/gallery/     umkm/products/
 * ├── potentials/covers/ potentials/gallery/
 * ├── facilities/
 * ├── profile/
 * └── banners/           (tambahan — belum ada di §7.1, mengikuti pola yang sama)
 */
export const STORAGE_BUCKET = "villagecms-media-bucket";

export type ImagePreset = "cover" | "avatar" | "gallery";

export const STORAGE_FOLDERS = {
  newsCover: "news/covers",
  newsInline: "news/inline",
  umkmLogo: "umkm/logos",
  umkmGallery: "umkm/gallery",
  umkmProduct: "umkm/products",
  potentialCover: "potentials/covers",
  potentialGallery: "potentials/gallery",
  facility: "facilities",
  profile: "profile",
  banner: "banners",
} as const;

export type StorageFolderKey = keyof typeof STORAGE_FOLDERS;

/** Entity-type prefix used in the filename schema (not the folder path). */
export const STORAGE_ENTITY_TYPE: Record<StorageFolderKey, string> = {
  newsCover: "news",
  newsInline: "news",
  umkmLogo: "umkm",
  umkmGallery: "umkm",
  umkmProduct: "umkm",
  potentialCover: "potential",
  potentialGallery: "potential",
  facility: "facility",
  profile: "profile",
  banner: "banner",
};

/** Which resize/quality preset each folder uses, per §7.2. */
export const STORAGE_FOLDER_PRESET: Record<StorageFolderKey, ImagePreset> = {
  newsCover: "cover",
  newsInline: "gallery",
  umkmLogo: "avatar",
  umkmGallery: "gallery",
  umkmProduct: "gallery",
  potentialCover: "cover",
  potentialGallery: "gallery",
  facility: "gallery",
  profile: "avatar",
  banner: "cover",
};

export const IMAGE_PRESETS: Record<
  ImagePreset,
  { maxWidth: number; quality: number; square: boolean }
> = {
  cover: { maxWidth: 1200, quality: 80, square: false },
  avatar: { maxWidth: 400, quality: 85, square: true },
  gallery: { maxWidth: 800, quality: 75, square: false },
};
