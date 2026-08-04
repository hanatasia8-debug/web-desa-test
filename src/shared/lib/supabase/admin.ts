import { createClient } from "@supabase/supabase-js";

import { getPublicEnv } from "@/shared/config/public-env";

/**
 * Service-role Supabase client. Bypasses Row Level Security — use ONLY for
 * trusted server-side operations (Storage uploads via `shared/lib/storage`,
 * admin Server Actions). NEVER import this into a Client Component or
 * expose `SUPABASE_SERVICE_ROLE_KEY` to the browser.
 */
export function createSupabaseAdminClient() {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceRoleKey) {
    throw new Error(
      "SUPABASE_SERVICE_ROLE_KEY belum diisi di .env.local — wajib untuk operasi admin/upload.",
    );
  }

  const env = getPublicEnv();
  return createClient(env.NEXT_PUBLIC_SUPABASE_URL, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
