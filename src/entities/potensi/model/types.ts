export interface PotensiListItemDto {
  id: string;
  title: string;
  slug: string;
  category: string;
  overview: string;
  coverImage: string;
}

export type PotensiDetailDto = PotensiListItemDto;

export interface PotensiListResponse {
  items: PotensiListItemDto[];
  total: number;
}
