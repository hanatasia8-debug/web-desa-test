import { z } from "zod";
import { getPublicEnv } from "@/shared/config/public-env";

/**
 * Server-only environment variables (Node runtime — Prisma, Service Layer,
 * Route Handlers). NEVER import this from Edge Middleware or client
 * components; use `shared/config/public-env.ts` there instead.
 *
 * Validation is lazy (`getEnv()`), same reasoning as `public-env.ts`: avoid
 * crashing modules that don't actually need these vars yet.
 */
const serverEnvSchema = z.object({
  DATABASE_URL: z.string().min(1, "DATABASE_URL wajib diisi"),
  DIRECT_URL: z.string().min(1, "DIRECT_URL wajib diisi"),
  SUPABASE_SERVICE_ROLE_KEY: z
    .string()
    .min(1, "SUPABASE_SERVICE_ROLE_KEY wajib diisi untuk upload server-side"),
});

type ServerEnv = z.infer<typeof serverEnvSchema> &
  ReturnType<typeof getPublicEnv>;

let cached: ServerEnv | null = null;

export function getEnv(): ServerEnv {
  if (cached) return cached;

  const parsed = serverEnvSchema.safeParse(process.env);
  if (!parsed.success) {
    console.error(
      "❌ Invalid/missing server environment variables:",
      parsed.error.flatten().fieldErrors,
    );
    throw new Error("Invalid server environment variables");
  }

  cached = { ...getPublicEnv(), ...parsed.data };
  return cached;
}
