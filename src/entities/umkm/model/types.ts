export interface UmkmListItemDto {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  logo: string;
  whatsappNumber: string;
  publishedAt: string; // ISO string over the wire
}

export interface UmkmListResponse {
  items: UmkmListItemDto[];
  total: number;
}
