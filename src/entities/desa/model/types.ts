export interface VillageOfficialDto {
  name: string;
  position: string;
  photo: string;
  greeting?: string;
  email?: string;
}

export interface VillageProfileDto {
  villageName: string;
  headGreeting: string;
  headPhoto: string;
  /**
   * Derived from `officials` (first entry whose `position` contains
   * "kepala desa") — the schema doesn't have a dedicated head-of-village
   * name field, only `headPhoto`/`headGreeting` plus the `officials` array.
   */
  headName: string | null;
  headPosition: string | null;
  historyText: string;
  /** First ~200 chars of `historyText`, for the Home page teaser card. */
  historyExcerpt: string;
  vision: string;
  missions: string[];
  officials: VillageOfficialDto[];
  structureImageUrl?: string;
}

export interface VillageStatsDto {
  umkmCount: number;
  productCount: number;
  newsCount: number;
  /**
   * Not a DB entity (no "Dusun" model exists in the schema) — sourced from
   * `Settings` (key: "jumlah_dusun"), editable by admin without a migration.
   */
  dusunCount: number;
}

export interface VillageProfileResponse {
  profile: VillageProfileDto | null;
  stats: VillageStatsDto;
}
