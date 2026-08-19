import type { Metadata } from "next";
import { BeritaService } from "@/entities/berita/api/berita.service";
import { BeritaDetailPage } from "@/views/berita-detail/berita-detail-page";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const news = await BeritaService.getBySlug(slug);

  if (!news) {
    return {
      title: "Berita Tidak Ditemukan",
    };
  }

  const title = `${news.title} — Kabar Desa Pringgodani`;
  const description = news.summary
    ? news.summary.substring(0, 160)
    : `Warta resmi, kegiatan UMKM, dan informasi pembangunan Desa Pringgodani, Bantur, Malang: ${news.title}`;

  return {
    title,
    description,
    keywords: [
      news.title,
      "berita desa pringgodani",
      "kabar pringgodani",
      "desa pringgodani",
      "umkm pringgodani",
      news.categoryName || "Warta Desa",
      "bantur malang",
    ],
    alternates: {
      canonical: `/berita/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/berita/${slug}`,
      images: news.coverUrl ? [{ url: news.coverUrl, alt: news.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: news.coverUrl ? [news.coverUrl] : undefined,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const news = await BeritaService.getBySlug(slug);

  const jsonLd = news
    ? {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: news.title,
        description: news.summary,
        image: news.coverUrl ? [news.coverUrl] : [],
        datePublished: news.publishedAt,
        dateModified: news.publishedAt,
        author: {
          "@type": "Organization",
          name: news.authorName || "Pemerintah Desa Pringgodani",
          url: "https://lokalpringgodani.my.id",
        },
        publisher: {
          "@type": "Organization",
          name: "Lokal Pringgodani",
          logo: {
            "@type": "ImageObject",
            url: "https://lokalpringgodani.my.id/images/logo.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://lokalpringgodani.my.id/berita/${slug}`,
        },
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <BeritaDetailPage slug={slug} />
    </>
  );
}

