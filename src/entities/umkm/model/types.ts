export interface UmkmListItemDto {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  logo: string;
  whatsappNumber: string;
  /** `Umkm.address` — shown as the location line on the directory card. */
  address: string;
  ownerName: string;
  publishedAt: string; // ISO string over the wire
}

export interface UmkmListResponse {
  items: UmkmListItemDto[];
  total: number;
}

/**
 * One row of `UmkmProduct` (`prd_2.txt §6.2`). Note the schema has no
 * description column for a product — the prototype's per-product blurb is
 * therefore not rendered rather than invented.
 */
export interface UmkmProductDto {
  id: string;
  productName: string;
  /** `Int?` in the schema — a product may be listed without a price. */
  price: number | null;
  productPhoto: string | null;
}

/** The `VillagePotential` an UMKM belongs to ("Potensi Terkait" card). */
export interface UmkmPotentialSummaryDto {
  id: string;
  title: string;
  slug: string;
  category: string;
}

export interface UmkmDetailDto extends UmkmListItemDto {
  latitude: number;
  longitude: number;
  /** `Umkm.gallery` (`Json`) — array of storage keys, may be empty. */
  gallery: string[];
  products: UmkmProductDto[];
  potential: UmkmPotentialSummaryDto | null;
}

/**
 * A selectable category chip. Unlike news categories (a real `NewsCategory`
 * table), UMKM categories are the fixed `UmkmCategory` enum from the schema,
 * so the chip list is derived from the enum — not hardcoded from the
 * prototype's sample chips.
 */
export interface UmkmCategoryDto {
  value: string;
  slug: string;
  label: string;
  /** Number of published UMKM in this category. */
  umkmCount: number;
}

export interface UmkmCategoryListResponse {
  items: UmkmCategoryDto[];
}
