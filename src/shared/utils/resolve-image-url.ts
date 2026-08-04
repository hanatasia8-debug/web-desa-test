import { STORAGE_BUCKET } from "@/shared/lib/storage/config";

/**
 * Converts a stored `coverImage`/`logo`/etc. value (a bucket-relative key
 * like `news/covers/foo.webp`) into a full public URL. Passes through
 * unchanged if it's already absolute (e.g. `/uploads/...` from the local
 * dev storage fallback, or a full `https://` URL).
 */
export function resolveImageUrl(
  storagePathOrUrl: string | null | undefined,
): string | null {
  if (!storagePathOrUrl) return null;
  if (
    storagePathOrUrl.startsWith("http://") ||
    storagePathOrUrl.startsWith("https://") ||
    storagePathOrUrl.startsWith("/")
  ) {
    return storagePathOrUrl;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!supabaseUrl) return null;

  return `${supabaseUrl}/storage/v1/object/public/${STORAGE_BUCKET}/${storagePathOrUrl}`;
}
