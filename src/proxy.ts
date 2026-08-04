import { NextResponse, type NextRequest } from "next/server";

import { updateSupabaseSession } from "@/shared/lib/supabase/middleware";

/**
 * Next.js 16 renamed the `middleware.ts` file convention to `proxy.ts`
 * (export `proxy` instead of `middleware`). Functionally the same as
 * Middleware — this file is NOT related to an HTTP reverse proxy despite
 * the name. See https://nextjs.org/docs/app/api-reference/file-conventions/proxy
 *
 * Note: Proxy always runs on the Node.js runtime (unlike the old Edge
 * Middleware) — fine for us, since `@supabase/ssr` works in Node.
 */

const ADMIN_PREFIX = "/admin";
const ADMIN_LOGIN_PATH = "/admin/login";
const ADMIN_DASHBOARD_PATH = "/admin/dashboard";

export async function proxy(request: NextRequest) {
  const { supabaseResponse, user } = await updateSupabaseSession(request);

  const { pathname } = request.nextUrl;
  const isAdminRoute = pathname.startsWith(ADMIN_PREFIX);
  const isLoginRoute = pathname === ADMIN_LOGIN_PATH;

  // Belum login & mengakses /admin/* (selain halaman login) → redirect ke login.
  if (isAdminRoute && !isLoginRoute && !user) {
    const redirectUrl = new URL(ADMIN_LOGIN_PATH, request.url);
    redirectUrl.searchParams.set("redirectTo", pathname);
    return NextResponse.redirect(redirectUrl);
  }

  // Sudah login tapi mengakses halaman login → redirect ke dashboard.
  if (isLoginRoute && user) {
    return NextResponse.redirect(new URL(ADMIN_DASHBOARD_PATH, request.url));
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    /*
     * Proxy hanya perlu jalan untuk route /admin/* — halaman publik,
     * submit flow, dan /api/* tidak melewati proteksi ini (proteksi API
     * admin dilakukan di masing-masing Route Handler, bukan di sini).
     */
    "/admin/:path*",
  ],
};
