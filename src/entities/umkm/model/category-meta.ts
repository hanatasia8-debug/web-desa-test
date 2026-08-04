/**
 * Display label, URL slug and Tailwind badge background class per
 * `UmkmCategory` enum value (`prisma/schema.prisma`). Colors extend the
 * pattern set by the prototype (Kuliner → nature-green, Kerajinan →
 * secondary, Pertanian → status-verified) to the remaining categories not
 * shown in the mockup.
 *
 * `slug` is what appears in `/umkm?kategori=…` — kebab-case of the enum value,
 * so the URL stays readable and shareable while the stored value remains the
 * enum.
 */
export const UMKM_CATEGORY_META: Record<
  string,
  { label: string; slug: string; badgeClass: string }
> = {
  KULINER: { label: "Kuliner", slug: "kuliner", badgeClass: "bg-nature-green" },
  FASHION: { label: "Fashion", slug: "fashion", badgeClass: "bg-tertiary" },
  PERTANIAN_PETERNAKAN: {
    label: "Pertanian & Peternakan",
    slug: "pertanian-peternakan",
    badgeClass: "bg-status-verified",
  },
  KERAJINAN_SOUVENIR: {
    label: "Kerajinan & Souvenir",
    slug: "kerajinan-souvenir",
    badgeClass: "bg-secondary",
  },
  JASA: { label: "Jasa", slug: "jasa", badgeClass: "bg-status-pending" },
  PERDAGANGAN: {
    label: "Perdagangan",
    slug: "perdagangan",
    badgeClass: "bg-primary-container",
  },
};

/** Enum values in the order they should appear as filter chips. */
export const UMKM_CATEGORY_VALUES = Object.keys(UMKM_CATEGORY_META);

export function getUmkmCategoryMeta(category: string) {
  return (
    UMKM_CATEGORY_META[category] ?? {
      label: category,
      slug: category.toLowerCase().replace(/_/g, "-"),
      badgeClass: "bg-primary",
    }
  );
}

/**
 * Resolves whatever arrived in `?kategori=` to an enum value: accepts the slug
 * (`kerajinan-souvenir`) as well as the raw enum (`KERAJINAN_SOUVENIR`), and
 * returns `null` for anything unknown so the caller can render an empty state
 * instead of a silently broken filter.
 */
export function resolveUmkmCategory(input: string): string | null {
  const needle = input.trim().toLowerCase();
  if (!needle) return null;

  return (
    UMKM_CATEGORY_VALUES.find(
      (value) =>
        value.toLowerCase() === needle ||
        UMKM_CATEGORY_META[value].slug === needle,
    ) ?? null
  );
}
