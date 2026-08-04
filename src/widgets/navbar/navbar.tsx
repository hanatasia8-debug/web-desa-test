"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "@/shared/ui/icon";
import { cn } from "@/shared/utils/cn";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/profil", label: "Profil" },
  { href: "/potensi", label: "Potensi" },
  { href: "/umkm", label: "UMKM" },
  { href: "/berita", label: "Berita" },
  { href: "/peta", label: "Peta" },
];

const AJUKAN_OPTIONS = [
  { href: "/submit/berita", label: "Ajukan Berita", icon: "edit_square" },
  { href: "/submit/umkm", label: "Daftarkan UMKM", icon: "storefront" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ajukanOpen, setAjukanOpen] = useState(false);

  return (
    <>
      <header className="border-outline-variant/30 glass-effect bg-surface/80 fixed top-0 z-50 w-full border-b shadow-sm">
        <nav className="max-w-container-max px-gutter mx-auto flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full">
              <Icon name="eco" className="text-2xl" />
            </div>
            <span className="font-headline-md text-headline-md text-primary font-bold">
              Desa Pringgodani
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-label-sm text-label-sm pb-1 transition-colors duration-200",
                  isActive(pathname, link.href)
                    ? "text-primary border-primary border-b-2 font-bold"
                    : "text-on-surface-variant hover:text-primary",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Ajukan Konten dropdown (desktop) */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setAjukanOpen((v) => !v)}
                className="bg-primary text-on-primary font-label-sm text-label-sm flex items-center gap-1 rounded-full px-6 py-2.5 shadow-md transition-all hover:opacity-90 active:scale-95"
              >
                Ajukan Konten
                <Icon
                  name="expand_more"
                  className={cn(
                    "text-lg transition-transform",
                    ajukanOpen && "rotate-180",
                  )}
                />
              </button>
              {ajukanOpen && (
                <>
                  {/* Click-outside catcher */}
                  <button
                    aria-label="Tutup menu"
                    className="fixed inset-0 z-40 cursor-default"
                    onClick={() => setAjukanOpen(false)}
                  />
                  <div className="border-outline-variant/20 bg-surface-container-lowest absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-xl border shadow-xl">
                    {AJUKAN_OPTIONS.map((opt) => (
                      <Link
                        key={opt.href}
                        href={opt.href}
                        className="hover:bg-surface-container font-label-sm text-on-surface flex items-center gap-3 px-4 py-3 transition-colors"
                        onClick={() => setAjukanOpen(false)}
                      >
                        <Icon
                          name={opt.icon}
                          className="text-primary text-lg"
                        />
                        {opt.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Mobile menu trigger */}
            <button
              className="text-primary flex h-10 w-10 items-center justify-center md:hidden"
              aria-label="Buka menu navigasi"
              onClick={() => setMobileOpen(true)}
            >
              <Icon name="menu" className="text-3xl" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile slide-over menu — DESIGN.md "Level 3 (Overlays)": dark 40%
          backdrop, high elevation, used for mobile nav + submission forms. */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <button
            aria-label="Tutup menu"
            className="bg-inverse-surface/40 absolute inset-0"
            onClick={() => setMobileOpen(false)}
          />
          <div className="bg-surface absolute top-0 right-0 h-full w-72 max-w-[85vw] shadow-2xl">
            <div className="border-outline-variant/30 p-gutter flex items-center justify-between border-b">
              <span className="font-headline-md text-headline-md text-primary font-bold">
                Menu
              </span>
              <button
                aria-label="Tutup menu"
                onClick={() => setMobileOpen(false)}
                className="text-on-surface-variant"
              >
                <Icon name="close" className="text-2xl" />
              </button>
            </div>
            <div className="p-gutter flex flex-col">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "font-label-sm text-label-sm border-outline-variant/10 border-b py-4",
                    isActive(pathname, link.href)
                      ? "text-primary font-bold"
                      : "text-on-surface-variant",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-stack-md flex flex-col gap-3">
                {AJUKAN_OPTIONS.map((opt) => (
                  <Link
                    key={opt.href}
                    href={opt.href}
                    onClick={() => setMobileOpen(false)}
                    className="bg-primary text-on-primary font-label-sm flex items-center justify-center gap-2 rounded-full py-3 font-bold"
                  >
                    <Icon name={opt.icon} />
                    {opt.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
