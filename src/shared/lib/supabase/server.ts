import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

import { getPublicEnv } from "@/shared/config/public-env";

/**
 * Supabase client for Server Components, Route Handlers, and Server Actions.
 * Must be created fresh per request (reads `next/headers` cookies at call
 * time) — never module-scope a single instance.
 */
export async function createSupabaseServerClient() {
  const cookieStore = await cookies();
  const env = getPublicEnv();

  return createServerClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch {
            // `setAll` was called from a Server Component — safe to ignore
            // because middleware (`src/middleware.ts`) refreshes the
            // session cookie on every request.
          }
        },
      },
    },
  );
}
