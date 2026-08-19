import type { MetadataRoute } from "next";
import { UmkmService } from "@/entities/umkm/api/umkm.service";
import { ProdukService } from "@/entities/produk/api/produk.service";
import { BeritaService } from "@/entities/berita/api/berita.service";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lokalpringgodani.my.id";
  const now = new Date();

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/umkm`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/produk`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/berita`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/profil`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/peta`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/umkm/daftar`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // Dynamic routes (UMKM, Produk, Berita)
  const [umkmResult, produkResult, beritaResult] = await Promise.allSettled([
    UmkmService.getPaginated({ page: 1, limit: 100 }),
    ProdukService.getPaginated({ page: 1, limit: 100 }),
    BeritaService.getPaginated({ page: 1, limit: 100 }),
  ]);

  const umkmRoutes: MetadataRoute.Sitemap =
    umkmResult.status === "fulfilled" && umkmResult.value.items
      ? umkmResult.value.items.map((item) => ({
          url: `${baseUrl}/umkm/${encodeURIComponent(item.slug)}`,
          lastModified: item.publishedAt ? new Date(item.publishedAt) : now,
          changeFrequency: "weekly",
          priority: 0.85,
        }))
      : [];

  const produkRoutes: MetadataRoute.Sitemap =
    produkResult.status === "fulfilled" && produkResult.value.items
      ? produkResult.value.items.map((item) => ({
          url: `${baseUrl}/produk/${item.id}`,
          lastModified: now,
          changeFrequency: "weekly",
          priority: 0.85,
        }))
      : [];

  const beritaRoutes: MetadataRoute.Sitemap =
    beritaResult.status === "fulfilled" && beritaResult.value.items
      ? beritaResult.value.items.map((item) => ({
          url: `${baseUrl}/berita/${encodeURIComponent(item.slug)}`,
          lastModified: item.publishedAt ? new Date(item.publishedAt) : now,
          changeFrequency: "monthly",
          priority: 0.75,
        }))
      : [];

  return [...staticRoutes, ...umkmRoutes, ...produkRoutes, ...beritaRoutes];
}
