import { FallbackImage } from "@/shared/ui/fallback-image";
import type { NewsDetailDto } from "@/entities/berita/model/types";

/**
 * Cover image + structured article body.
 *
 * `contentSections` is a structured array (`{ section_title, paragraph,
 * section_image }`), never stored HTML — the brief's "Template over Editor"
 * rule — so each section is rendered as real elements. No
 * `dangerouslySetInnerHTML` anywhere.
 */
export function ArticleBody({ news }: { news: NewsDetailDto }) {
  return (
    <>
      <figure className="mb-12">
        <div className="mb-4 aspect-[16/9] overflow-hidden rounded-xl shadow-lg">
          <FallbackImage
            src={news.coverImage}
            alt={news.coverCaption || news.title}
            className="h-full w-full object-cover"
            fallbackIcon="newspaper"
          />
        </div>
        {news.coverCaption && (
          <figcaption className="font-label-sm text-label-sm text-on-surface-variant text-center italic">
            {news.coverCaption}
          </figcaption>
        )}
      </figure>

      <div className="max-w-none">
        {news.contentSections.length === 0 ? (
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            {news.summary}
          </p>
        ) : (
          news.contentSections.map((section, index) => (
            <section key={index}>
              {section.sectionTitle && (
                <h2 className="font-headline-md text-headline-md text-primary mt-8 mb-4">
                  {section.sectionTitle}
                </h2>
              )}
              {section.paragraph && (
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                  {section.paragraph}
                </p>
              )}
              {section.sectionImage && (
                <div className="mb-8 overflow-hidden rounded-xl">
                  <FallbackImage
                    src={section.sectionImage}
                    alt={section.sectionTitle ?? news.title}
                    className="h-auto w-full object-cover"
                    fallbackIcon="image"
                  />
                </div>
              )}
            </section>
          ))
        )}
      </div>
    </>
  );
}
