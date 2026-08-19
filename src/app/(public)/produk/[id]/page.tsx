import type { Metadata } from "next";
import { ProdukDetailPage } from "@/views/produk-detail/produk-detail-page";
import { ProdukService } from "@/entities/produk/api/produk.service";
import { safeJsonLdStringify } from "@/shared/utils/safe-json-ld";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = await ProdukService.getById(id);

  if (!product) {
    return {
      title: "Produk Tidak Ditemukan",
    };
  }

  const title = `${product.name} — Produk UMKM ${product.umkm?.name || "Desa Pringgodani"}`;
  const description =
    product.description ||
    `Beli ${product.name} langsung dari produsen lokal ${product.umkm?.name || "UMKM Desa Pringgodani"}, Kecamatan Bantur, Kabupaten Malang.`;

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://lokalpringgodani.my.id";

  return {
    title,
    description,
    keywords: [
      product.name,
      "umkm pringgodani",
      "produk pringgodani",
      "desa pringgodani",
      "produk lokal pringgodani",
      product.umkm?.name || "UMKM Desa Pringgodani",
      "hasil bumi pringgodani",
      "kuliner pringgodani",
    ],
    alternates: {
      canonical: `/produk/${id}`,
    },
    openGraph: {
      title,
      description,
      url: `/produk/${id}`,
      images: [
        {
          url: product.imageUrl || `${SITE_URL}/images/og-image.png`,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [product.imageUrl || `${SITE_URL}/images/og-image.png`],
    },
  };
}

export const dynamic = "force-dynamic";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await ProdukService.getById(id);

  const jsonLd = product
    ? {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Product",
            "@id": `https://lokalpringgodani.my.id/produk/${product.id}#product`,
            name: product.name,
            image: product.imageUrl,
            description:
              product.description ||
              `Produk unggulan dari ${product.umkm?.name || "Desa Pringgodani"}`,
            ...(product.price
              ? {
                  offers: {
                    "@type": "Offer",
                    priceCurrency: "IDR",
                    price: product.price,
                    availability: "https://schema.org/InStock",
                    url: `https://lokalpringgodani.my.id/produk/${product.id}`,
                  },
                }
              : {}),
            brand: {
              "@type": "Brand",
              name: product.umkm?.name || "UMKM Desa Pringgodani",
            },
          },
          {
            "@type": "BreadcrumbList",
            "@id": `https://lokalpringgodani.my.id/produk/${product.id}#breadcrumb`,
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
              {
                "@type": "ListItem",
                position: 3,
                name: product.name,
                item: `https://lokalpringgodani.my.id/produk/${product.id}`,
              },
            ],
          },
        ],
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLdStringify(jsonLd) }}
        />
      )}
      <ProdukDetailPage id={id} />
    </>
  );
}

