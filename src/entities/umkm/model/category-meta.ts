/**
 * Display label + Tailwind badge background class per `UmkmCategory` enum
 * value (`prisma/schema.prisma`). Colors extend the pattern set by the
 * prototype (Kuliner → nature-green, Kerajinan → secondary, Pertanian →
 * status-verified) to the remaining categories not shown in the mockup.
 */
export const UMKM_CATEGORY_META: Record<
  string,
  { label: string; badgeClass: string }
> = {
  KULINER: { label: "Kuliner", badgeClass: "bg-nature-green" },
  FASHION: { label: "Fashion", badgeClass: "bg-tertiary" },
  PERTANIAN_PETERNAKAN: {
    label: "Pertanian & Peternakan",
    badgeClass: "bg-status-verified",
  },
  KERAJINAN_SOUVENIR: {
    label: "Kerajinan & Souvenir",
    badgeClass: "bg-secondary",
  },
  JASA: { label: "Jasa", badgeClass: "bg-status-pending" },
  PERDAGANGAN: { label: "Perdagangan", badgeClass: "bg-primary-container" },
};

export function getUmkmCategoryMeta(category: string) {
  return (
    UMKM_CATEGORY_META[category] ?? {
      label: category,
      badgeClass: "bg-primary",
    }
  );
}
