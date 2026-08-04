export interface NewsListItemDto {
  id: string;
  title: string;
  slug: string;
  summary: string;
  coverImage: string;
  categoryName: string;
  categorySlug: string;
  /** `null` for community submissions approved without an assigned author. */
  authorName: string | null;
  publishedAt: string; // ISO string over the wire
}

export interface NewsListResponse {
  items: NewsListItemDto[];
  total: number;
}

/**
 * One entry of `News.contentSections` (`Json` column, `prd_2.txt §6.2`:
 * "Array of { section_title, paragraph, section_image }"). Stored snake_case
 * in the database, exposed camelCase over the API like every other DTO here.
 */
export interface NewsContentSectionDto {
  sectionTitle: string | null;
  paragraph: string;
  sectionImage: string | null;
}

export interface NewsDetailDto {
  id: string;
  title: string;
  slug: string;
  summary: string;
  coverImage: string;
  coverCaption: string;
  categoryId: string;
  categoryName: string;
  categorySlug: string;
  authorName: string | null;
  /** Label derived from `User.role`; `null` whenever `authorName` is null. */
  authorRole: string | null;
  contentSections: NewsContentSectionDto[];
  publishedAt: string;
  /** Derived at request time from the word count — never stored in the DB. */
  readingTimeMinutes: number;
}

export interface NewsCategoryDto {
  id: string;
  name: string;
  slug: string;
  /** Number of PUBLISHED news in this category. */
  newsCount: number;
}

export interface NewsCategoryListResponse {
  items: NewsCategoryDto[];
}
