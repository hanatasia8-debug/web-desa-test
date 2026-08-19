import type { Metadata } from "next";
import { ProdukListPage } from "@/views/produk-list/produk-list-page";

export const metadata: Metadata = {
  title: "Katalog Produk UMKM Pringgodani — Produk Olahan & Hasil Bumi Desa",
  description:
    "Katalog resmi aneka produk olahan pangan, kerajinan tangan lokal, dan hasil bumi pertanian unggulan UMKM Desa Pringgodani, Kecamatan Bantur, Kabupaten Malang.",
  keywords: [
    "produk umkm pringgodani",
    "umkm pringgodani",
    "katalog produk pringgodani",
    "hasil bumi pringgodani",
    "produk lokal pringgodani",
    "desa pringgodani",
    "kuliner pringgodani",
    "kerajinan pringgodani",
  ],
  alternates: {
    canonical: "/produk",
  },
  openGraph: {
    title: "Katalog Produk UMKM Pringgodani — Produk Olahan & Hasil Bumi Desa",
    description:
      "Jelajahi dan beli langsung produk UMKM berkualitas dari warga Desa Pringgodani via WhatsApp.",
    url: "/produk",
  },
};

export const dynamic = "force-dynamic";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://lokalpringgodani.my.id/produk#page",
      name: "Katalog Produk UMKM Desa Pringgodani",
      description:
        "Katalog produk olahan, kerajinan, dan hasil bumi unggulan Desa Pringgodani, Bantur, Malang.",
      url: "https://lokalpringgodani.my.id/produk",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://lokalpringgodani.my.id/#website",
        name: "Lokal Pringgodani",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://lokalpringgodani.my.id/produk#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Beranda",
          item: "https://lokalpringgodani.my.id",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Katalog Produk",
          item: "https://lokalpringgodani.my.id/produk",
        },
      ],
    },
  ],
};

export default function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProdukListPage searchParams={searchParams} />
    </>
  );
}
