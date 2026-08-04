/**
 * Converts a stored `coverImage`/`logo`/etc. value (a bucket-relative key
 * like `news/covers/foo.webp`) into a full public URL. Passes through
 * unchanged if it's already absolute (e.g. a full `https://` URL).
 *
 * When no storage backend is configured, returns a placeholder image path
 * so the UI doesn't break with null/empty src attributes.
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

  // When NEXT_PUBLIC_API_URL is configured, assume the backend provides
  // absolute URLs. In mock mode, return a placeholder.
  return `/placeholder/${storagePathOrUrl}`;
}
