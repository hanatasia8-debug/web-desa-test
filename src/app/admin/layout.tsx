"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Icon } from "@/shared/ui/icon";
import { AdminAuthService } from "@/shared/lib/auth/admin-auth.service";
import { AdminSubmissionsService } from "@/entities/admin/api/admin-submissions.service";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/admin/dashboard", icon: "dashboard" },
  {
    label: "Pengajuan Warga",
    href: "/admin/pengajuan",
    icon: "assignment_turned_in",
    showBadge: true,
  },
  { label: "Kelola Berita", href: "/admin/berita", icon: "newspaper" },
  { label: "Kelola UMKM", href: "/admin/umkm", icon: "storefront" },
  { label: "Peta Geospasial", href: "/admin/peta", icon: "map" },
  {
    label: "Profil & Perangkat",
    href: "/admin/profil",
    icon: "assignment_ind",
  },
  { label: "Pengaturan Site", href: "/admin/settings", icon: "settings" },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [pendingCount, setPendingCount] = useState(0);
  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    if (!isLoginPage && !AdminAuthService.isAuthenticated()) {
      router.push("/admin/login");
      return;
    }

    if (!isLoginPage) {
      AdminSubmissionsService.getPendingSubmissions().then((data) => {
        setPendingCount(data.totalPending);
      });
    }
  }, [pathname, isLoginPage, router]);

  const handleLogout = () => {
    AdminAuthService.logout();
    router.push("/admin/login");
  };

  if (isLoginPage) {
    return (
      <div className="bg-surface text-on-surface min-h-screen">
        <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
      </div>
    );
  }

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      {/* Top Navbar Admin */}
      <header className="bg-primary text-on-primary sticky top-0 z-40 border-b border-white/10 shadow-md">
        <div className="max-w-container-max px-gutter mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 font-bold">
              <Icon name="admin_panel_settings" className="text-2xl" />
            </div>
            <div>
              <h1 className="font-headline-md text-lg font-bold">
                Admin Panel — Desa Pringgodani
              </h1>
              <p className="text-on-primary/70 text-xs font-medium">
                Sistem Informasi & Manajemen Terpadu Desa
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-2 sm:flex">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-xs font-bold">
                A
              </div>
              <span className="text-xs font-semibold">Admin Desa</span>
            </div>

            <button
              onClick={handleLogout}
              className="font-label-sm inline-flex items-center gap-1.5 rounded-xl bg-white/10 px-3.5 py-2 text-xs font-bold transition hover:bg-white/20"
              title="Keluar dari Panel Admin"
            >
              <Icon name="logout" className="text-base" />
              Keluar
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Sub-Bar */}
      <nav className="bg-surface-container-highest border-outline-variant/30 border-b shadow-sm">
        <div className="max-w-container-max px-gutter mx-auto flex overflow-x-auto py-2.5">
          <div className="flex items-center gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-label-sm relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition ${
                    isActive
                      ? "bg-primary text-on-primary shadow-sm"
                      : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
                  }`}
                >
                  <Icon name={item.icon} className="text-lg" />
                  <span>{item.label}</span>
                  {item.showBadge && pendingCount > 0 && (
                    <span
                      className={`ml-1 rounded-full px-2 py-0.5 text-xs font-bold ${
                        isActive
                          ? "text-primary bg-white"
                          : "bg-error text-on-error"
                      }`}
                    >
                      {pendingCount}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Admin Content */}
      <main className="max-w-container-max px-gutter mx-auto min-h-[calc(100vh-8rem)] py-8">
        {children}
      </main>
    </div>
  );
}
