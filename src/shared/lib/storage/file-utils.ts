import { STORAGE_ENTITY_TYPE, type StorageFolderKey } from "./config";

export type DetectedImageType = "jpeg" | "png" | "webp";

/**
 * Validates the true file signature (magic bytes) instead of trusting the
 * client-supplied MIME type/extension, per `prd_2.txt §10.2` ("Image File
 * Integrity"). Returns the detected type, or null if it isn't a supported
 * image format.
 */
export function detectImageType(buffer: Buffer): DetectedImageType | null {
  if (buffer.length < 12) return null;

  // JPEG: FF D8 FF
  if (buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff) {
    return "jpeg";
  }

  // PNG: 89 50 4E 47
  if (
    buffer[0] === 0x89 &&
    buffer[1] === 0x50 &&
    buffer[2] === 0x4e &&
    buffer[3] === 0x47
  ) {
    return "png";
  }

  // WebP: "RIFF"....."WEBP"
  if (
    buffer.toString("ascii", 0, 4) === "RIFF" &&
    buffer.toString("ascii", 8, 12) === "WEBP"
  ) {
    return "webp";
  }

  return null;
}

/**
 * Generates a filename per `prd_2.txt §7.2`:
 * `[entity_type]_[YYYYMMDD]_[UUIDv4-short].[extension]`
 * e.g. `umkm_20260731_a8f9c2d1.webp`
 */
export function generateStorageFilename(
  folderKey: StorageFolderKey,
  extension: string = "webp",
): string {
  const entityType = STORAGE_ENTITY_TYPE[folderKey];
  const datePart = formatYyyyMmDd(new Date());
  const shortUuid = crypto.randomUUID().split("-")[0];
  return `${entityType}_${datePart}_${shortUuid}.${extension}`;
}

function formatYyyyMmDd(date: Date): string {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, "0");
  const d = String(date.getUTCDate()).padStart(2, "0");
  return `${y}${m}${d}`;
}
