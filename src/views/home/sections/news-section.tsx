import { NewsCard } from "@/entities/berita/ui/news-card";
import type { NewsListItemDto } from "@/entities/berita/model/types";

interface NewsSectionProps {
  items: NewsListItemDto[];
}

export function NewsSection({ items }: NewsSectionProps) {
  return (
    <section className="bg-surface-container-low py-section-padding">
      <div className="max-w-container-max px-gutter mx-auto">
        <div className="mb-stack-lg scroll-reveal text-center">
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Berita Terbaru
          </h2>
          <p className="font-body-base text-body-base text-on-surface-variant mt-2">
            Update informasi kegiatan dan pengumuman resmi dari Pemerintah Desa
            Pringgodani.
          </p>
        </div>

        {items.length === 0 ? (
          <p className="text-on-surface-variant font-body-base py-12 text-center">
            Belum ada berita yang dipublikasikan.
          </p>
        ) : (
          <div className="gap-gutter grid grid-cols-1 md:grid-cols-3">
            {items.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
