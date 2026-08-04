import { z } from "zod";

/**
 * Public env vars only (Supabase URL/anon key). Deliberately kept separate
 * from `shared/config/env.ts` (which also validates `DATABASE_URL`) so this
 * can be safely imported from Edge Middleware and client components without
 * pulling in Node-only server secrets.
 *
 * Validation is LAZY (only runs when `getPublicEnv()` is called, not at
 * module import time). `src/middleware.ts` loads on every request for the
 * whole app, so eager top-level validation here would crash local dev the
 * moment Supabase env vars are unset — even for public pages that don't
 * need Supabase at all. Call `getPublicEnv()` only from inside the actual
 * Supabase client factories (`shared/lib/supabase/*`).
 */
const publicEnvSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z
    .string()
    .url("NEXT_PUBLIC_SUPABASE_URL wajib diisi & valid"),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z
    .string()
    .min(1, "NEXT_PUBLIC_SUPABASE_ANON_KEY wajib diisi"),
});

export type PublicEnv = z.infer<typeof publicEnvSchema>;

let cached: PublicEnv | null = null;

export function getPublicEnv(): PublicEnv {
  if (cached) return cached;

  const parsed = publicEnvSchema.safeParse({
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  });

  if (!parsed.success) {
    console.error(
      "❌ Invalid/missing Supabase public environment variables:",
      parsed.error.flatten().fieldErrors,
    );
    throw new Error(
      "Supabase belum dikonfigurasi — isi NEXT_PUBLIC_SUPABASE_URL & NEXT_PUBLIC_SUPABASE_ANON_KEY di .env.local (lihat .env.local.example).",
    );
  }

  cached = parsed.data;
  return cached;
}
