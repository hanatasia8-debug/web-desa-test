"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Icon } from "@/shared/ui/icon";
import { buildQueryString } from "@/shared/utils/search-params";

const DEBOUNCE_MS = 400;

/**
 * Free-text search for /berita. State lives in the URL (`?cari=`), not in
 * component state, so a search is shareable/bookmarkable and the back button
 * works. `router.replace` performs a client-side navigation — the server
 * re-renders the results only, never a full page reload — and typing is
 * debounced so one request goes out per pause, not per keystroke.
 */
export function BeritaSearchInput() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const urlValue = searchParams.get("cari") ?? "";

  const [value, setValue] = useState(urlValue);
  const lastPushedRef = useRef(urlValue);

  // Keep in sync when the URL changes from elsewhere (back button, category
  // chip reset) without fighting what the user is currently typing.
  useEffect(() => {
    if (urlValue !== lastPushedRef.current) {
      lastPushedRef.current = urlValue;
      setValue(urlValue);
    }
  }, [urlValue]);

  useEffect(() => {
    if (value === lastPushedRef.current) return;

    const timer = setTimeout(() => {
      lastPushedRef.current = value;
      // Any new keyword resets to page 1 — page 3 of the previous result set
      // is meaningless for a different query.
      const query = buildQueryString(searchParams, {
        cari: value.trim() || null,
        halaman: null,
      });
      router.replace(`${pathname}${query}`, { scroll: false });
    }, DEBOUNCE_MS);

    return () => clearTimeout(timer);
  }, [value, pathname, router, searchParams]);

  return (
    <div className="relative w-full md:w-1/3">
      <label htmlFor="cari-berita" className="sr-only">
        Cari berita
      </label>
      <Icon
        name="search"
        className="text-outline absolute top-1/2 left-4 -translate-y-1/2"
      />
      <input
        id="cari-berita"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Cari berita atau pengumuman..."
        className="border-outline-variant focus:ring-primary w-full rounded-lg border bg-white py-3 pr-4 pl-12 transition-all outline-none focus:border-transparent focus:ring-2"
      />
    </div>
  );
}
