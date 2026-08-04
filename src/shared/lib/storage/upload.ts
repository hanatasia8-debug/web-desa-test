import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

import { createSupabaseAdminClient } from "@/shared/lib/supabase/admin";
import {
  IMAGE_PRESETS,
  STORAGE_BUCKET,
  STORAGE_FOLDERS,
  STORAGE_FOLDER_PRESET,
  type StorageFolderKey,
} from "./config";
import { detectImageType, generateStorageFilename } from "./file-utils";

export class UnsupportedImageTypeError extends Error {
  constructor() {
    super(
      "Format file tidak didukung. Hanya menerima JPEG, PNG, atau WebP (divalidasi lewat file signature, bukan ekstensi).",
    );
    this.name = "UnsupportedImageTypeError";
  }
}

export interface UploadImageResult {
  /** Publicly accessible URL of the processed image. */
  url: string;
  /** Storage path/key (bucket-relative for Supabase, `/uploads`-relative locally). */
  path: string;
  /** Which backend actually served the upload. */
  backend: "supabase" | "local-dev-fallback";
}

/**
 * Ingests an image per the pipeline in `prd_2.txt §7.2`:
 * 1. Validate true file signature (magic bytes) — never trust client MIME/extension.
 * 2. Resize + convert to WebP via Sharp (this also strips EXIF/GPS metadata,
 *    since Sharp does not preserve input metadata unless `.withMetadata()` is
 *    explicitly called).
 * 3. Upload to Supabase Storage.
 *
 * Falls back to writing into `public/uploads/<folder>/` when Supabase
 * credentials aren't configured yet (local development before Tahap 3's
 * Supabase project exists) — same call signature either way, so callers in
 * the Service Layer don't need to know which backend is active.
 */
export async function uploadImage(
  fileBuffer: Buffer,
  folderKey: StorageFolderKey,
): Promise<UploadImageResult> {
  const detectedType = detectImageType(fileBuffer);
  if (!detectedType) {
    throw new UnsupportedImageTypeError();
  }

  const preset = IMAGE_PRESETS[STORAGE_FOLDER_PRESET[folderKey]];

  let pipeline = sharp(fileBuffer).rotate(); // .rotate() with no args auto-orients then strips orientation EXIF
  pipeline = preset.square
    ? pipeline.resize(preset.maxWidth, preset.maxWidth, { fit: "cover" })
    : pipeline.resize({ width: preset.maxWidth, withoutEnlargement: true });

  const processedBuffer = await pipeline
    .webp({ quality: preset.quality })
    .toBuffer();

  const filename = generateStorageFilename(folderKey, "webp");
  const folderPath = STORAGE_FOLDERS[folderKey];
  const storageKey = `${folderPath}/${filename}`;

  const hasSupabaseServiceRole = Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY);
  if (hasSupabaseServiceRole) {
    return uploadToSupabase(processedBuffer, storageKey);
  }

  return uploadToLocalDevFallback(processedBuffer, storageKey);
}

async function uploadToSupabase(
  buffer: Buffer,
  storageKey: string,
): Promise<UploadImageResult> {
  const supabase = createSupabaseAdminClient();

  const { error } = await supabase.storage
    .from(STORAGE_BUCKET)
    .upload(storageKey, buffer, {
      contentType: "image/webp",
      upsert: false,
    });

  if (error) {
    throw new Error(`Gagal upload ke Supabase Storage: ${error.message}`);
  }

  const { data } = supabase.storage
    .from(STORAGE_BUCKET)
    .getPublicUrl(storageKey);

  return { url: data.publicUrl, path: storageKey, backend: "supabase" };
}

/**
 * Dev-only fallback: writes into `public/uploads/<storageKey>` so the file
 * is servable directly by Next.js's static file handling at
 * `/uploads/<storageKey>`. Never used in production (requires
 * `SUPABASE_SERVICE_ROLE_KEY`, which will always be set there).
 */
async function uploadToLocalDevFallback(
  buffer: Buffer,
  storageKey: string,
): Promise<UploadImageResult> {
  const uploadsRoot = path.join(process.cwd(), "public", "uploads");
  const destination = path.join(uploadsRoot, storageKey);

  await fs.mkdir(path.dirname(destination), { recursive: true });
  await fs.writeFile(destination, buffer);

  return {
    url: `/uploads/${storageKey}`,
    path: storageKey,
    backend: "local-dev-fallback",
  };
}
