/**
 * Loading skeleton for the UMKM directory grid — required by the brief for
 * every data-driven flow (loading / empty / error). Shown by the Suspense
 * boundary in `umkm-list-page.tsx` on first load and on every
 * search/filter/page change. Column counts mirror the real grid so the layout
 * does not jump when data arrives.
 */
export function UmkmGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div
      className="gap-gutter grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      aria-busy="true"
      aria-label="Memuat daftar UMKM"
    >
      {Array.from({ length: count }, (_, index) => (
        <div
          key={index}
          className="border-outline-variant/30 bg-surface-container-lowest overflow-hidden rounded-xl border"
        >
          <div className="bg-surface-container h-48 w-full animate-pulse" />
          <div className="space-y-3 p-5">
            <div className="bg-surface-container h-6 w-3/4 animate-pulse rounded" />
            <div className="bg-surface-container h-4 w-full animate-pulse rounded" />
            <div className="bg-surface-container h-4 w-5/6 animate-pulse rounded" />
            <div className="border-outline-variant/20 flex items-center justify-between border-t pt-4">
              <div className="bg-surface-container h-4 w-28 animate-pulse rounded" />
              <div className="bg-surface-container h-4 w-20 animate-pulse rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
