/**
 * Converts a stored `coverImage`/`logo`/etc. value into a full public URL.
 * Passes through unchanged if it's already absolute (e.g. `https://` or `data:` URL).
 * If a relative path or key is provided, returns a high-quality Unsplash image URL fallback.
 */
export function resolveImageUrl(
  storagePathOrUrl: string | null | undefined,
): string | null {
  if (!storagePathOrUrl) return null;
  if (
    storagePathOrUrl.startsWith("http://") ||
    storagePathOrUrl.startsWith("https://") ||
    storagePathOrUrl.startsWith("data:") ||
    storagePathOrUrl.startsWith("blob:")
  ) {
    return storagePathOrUrl;
  }

  if (storagePathOrUrl.startsWith("/")) {
    return storagePathOrUrl;
  }

  // Fallback high-quality Unsplash image for relative keys
  return "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80";
}
