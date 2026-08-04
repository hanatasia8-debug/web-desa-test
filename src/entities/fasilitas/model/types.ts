export interface FacilityDto {
  id: string;
  name: string;
  category: string;
  address: string;
  latitude: number;
  longitude: number;
  image: string | null;
}

export interface FacilityListResponse {
  items: FacilityDto[];
}
