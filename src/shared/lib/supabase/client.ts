import { createBrowserClient } from "@supabase/ssr";

import { getPublicEnv } from "@/shared/config/public-env";

/**
 * Supabase client for Client Components. Call this inside the component/hook
 * that needs it — do not module-scope a single instance, per Supabase's SSR
 * guidance for Next.js App Router.
 */
export function createSupabaseBrowserClient() {
  const env = getPublicEnv();
  return createBrowserClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
}
