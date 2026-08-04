"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Icon } from "@/shared/ui/icon";
import { cn } from "@/shared/utils/cn";
import { buildQueryString } from "@/shared/utils/search-params";

const DEBOUNCE_MS = 400;

interface SearchBoxProps {
  /** DOM id, so the `<label>` can point at the input. */
  id: string;
  /** Screen-reader label, e.g. "Cari UMKM". */
  label: string;
  placeholder: string;
  /** Query-string key the keyword is stored under (`cari` everywhere so far). */
  paramKey?: string;
  className?: string;
  inputClassName?: string;
}

/**
 * Shared URL-backed search box (widget layer — used by /berita and /umkm, and
 * by the remaining listing pages later).
 *
 * State lives in the URL, not in component state, so a search is
 * shareable/bookmarkable and the back button works. `router.replace` performs
 * a client-side navigation — the server re-renders the results only, never a
 * full page reload — and typing is debounced so one request goes out per
 * pause, not per keystroke.
 */
export function SearchBox({
  id,
  label,
  placeholder,
  paramKey = "cari",
  className,
  inputClassName,
}: SearchBoxProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const urlValue = searchParams.get(paramKey) ?? "";

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
        [paramKey]: value.trim() || null,
        halaman: null,
      });
      router.replace(`${pathname}${query}`, { scroll: false });
    }, DEBOUNCE_MS);

    return () => clearTimeout(timer);
  }, [value, pathname, router, searchParams, paramKey]);

  return (
    <div className={cn("relative w-full", className)}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <Icon
        name="search"
        className="text-outline absolute top-1/2 left-4 -translate-y-1/2"
      />
      <input
        id={id}
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder}
        className={cn(
          "border-outline-variant focus:ring-primary w-full rounded-lg border bg-white py-3 pr-4 pl-12 transition-all outline-none focus:border-transparent focus:ring-2",
          inputClassName,
        )}
      />
    </div>
  );
}
