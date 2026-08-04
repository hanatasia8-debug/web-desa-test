/**
 * Badge colors for news categories.
 *
 * Unlike `UmkmCategory` (a fixed Prisma enum), `NewsCategory` is a database
 * table an admin can add rows to, so this cannot be an exhaustive map. The
 * known seed slugs get the colors the prototype uses for its example
 * categories; anything else is assigned a stable color from the same palette
 * by hashing the slug — the same category always renders the same color, and
 * no color outside `globals.css` is ever introduced.
 */
const BADGE_PALETTE = [
  "bg-secondary text-on-secondary",
  "bg-nature-green text-white",
  "bg-status-verified text-white",
  "bg-status-pending text-white",
  "bg-tertiary-container text-on-tertiary",
  "bg-primary-container text-on-primary",
] as const;

const KNOWN_CATEGORY_BADGE: Record<string, string> = {
  pemerintahan: "bg-primary-container text-on-primary",
  "kegiatan-warga": "bg-status-pending text-white",
  pembangunan: "bg-secondary text-on-secondary",
  pengumuman: "bg-tertiary-container text-on-tertiary",
};

export function getNewsCategoryBadgeClass(categorySlug: string): string {
  const known = KNOWN_CATEGORY_BADGE[categorySlug];
  if (known) return known;

  let hash = 0;
  for (let i = 0; i < categorySlug.length; i += 1) {
    hash = (hash * 31 + categorySlug.charCodeAt(i)) % 997;
  }
  return BADGE_PALETTE[hash % BADGE_PALETTE.length];
}
