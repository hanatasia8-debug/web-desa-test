import { PrismaPg } from "@prisma/adapter-pg";

import { PrismaClient } from "@/generated/prisma";

/**
 * Singleton PrismaClient. Import this in `entities/*\/api` and
 * `features/*\/api` Service classes — never instantiate PrismaClient
 * directly elsewhere, and never import it into client components.
 *
 * The `globalThis` cache prevents exhausting the local Postgres
 * connection pool during Next.js dev hot-reloads.
 *
 * Prisma 7 requires an explicit driver adapter — the connection string lives
 * here (runtime) and in `prisma.config.ts` (CLI/Migrate), no longer in
 * `schema.prisma`. `DATABASE_URL` is validated when this module is first
 * imported, with an explicit message instead of a cryptic adapter error.
 */
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient(): PrismaClient {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error(
      "DATABASE_URL belum diisi — copy `.env.local.example` ke `.env.local` lalu isi connection string PostgreSQL.",
    );
  }

  return new PrismaClient({
    adapter: new PrismaPg({ connectionString }),
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
