-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('SUPER_ADMIN', 'VILLAGE_ADMIN');

-- CreateEnum
CREATE TYPE "ContentStatus" AS ENUM ('DRAFT', 'PENDING_REVIEW', 'REVISION_REQUESTED', 'PUBLISHED', 'REJECTED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "UmkmCategory" AS ENUM ('KULINER', 'FASHION', 'PERTANIAN_PETERNAKAN', 'KERAJINAN_SOUVENIR', 'JASA', 'PERDAGANGAN');

-- CreateEnum
CREATE TYPE "PotentialCategory" AS ENUM ('PERTANIAN', 'PERKEBUNAN', 'PETERNAKAN', 'PERIKANAN', 'PARIWISATA', 'KEBUDAYAAN', 'KERAJINAN', 'SUMBER_DAYA_ALAM');

-- CreateEnum
CREATE TYPE "FacilityCategory" AS ENUM ('KANTOR_DESA', 'SEKOLAH', 'TEMPAT_IBADAH', 'FASILITAS_KESEHATAN', 'DESTINASI_WISATA', 'FASILITAS_UMUM');

-- CreateEnum
CREATE TYPE "ActionType" AS ENUM ('SUBMIT', 'APPROVE', 'REJECT', 'REQUEST_REVISION', 'UPDATE', 'DELETE');

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'VILLAGE_ADMIN',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news_categories" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "news_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news" (
    "id" UUID NOT NULL,
    "category_id" UUID NOT NULL,
    "author_id" UUID,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "cover_image" TEXT NOT NULL,
    "cover_caption" TEXT NOT NULL,
    "content_sections" JSONB NOT NULL,
    "status" "ContentStatus" NOT NULL DEFAULT 'PENDING_REVIEW',
    "submitter_name" TEXT,
    "submitter_email" TEXT,
    "submitter_phone" TEXT,
    "revision_token" TEXT,
    "admin_feedback" TEXT,
    "published_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "news_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "umkm" (
    "id" UUID NOT NULL,
    "potential_id" UUID,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "owner_name" TEXT NOT NULL,
    "category" "UmkmCategory" NOT NULL,
    "description" TEXT NOT NULL,
    "whatsapp_number" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "logo" TEXT NOT NULL,
    "gallery" JSONB NOT NULL,
    "status" "ContentStatus" NOT NULL DEFAULT 'PENDING_REVIEW',
    "submitter_email" TEXT,
    "revision_token" TEXT,
    "admin_feedback" TEXT,
    "published_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "umkm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "umkm_products" (
    "id" UUID NOT NULL,
    "umkm_id" UUID NOT NULL,
    "product_name" TEXT NOT NULL,
    "price" INTEGER,
    "product_photo" TEXT,

    CONSTRAINT "umkm_products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "village_potentials" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "category" "PotentialCategory" NOT NULL,
    "overview" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "cover_image" TEXT NOT NULL,
    "gallery" JSONB NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "village_potentials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public_facilities" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "category" "FacilityCategory" NOT NULL,
    "address" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "image" TEXT,
    "operating_hours" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "public_facilities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "village_profile" (
    "id" UUID NOT NULL,
    "village_name" TEXT NOT NULL,
    "head_greeting" TEXT NOT NULL,
    "head_photo" TEXT NOT NULL,
    "history_text" TEXT NOT NULL,
    "vision" TEXT NOT NULL,
    "missions" JSONB NOT NULL,
    "officials" JSONB NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "village_profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "revision_histories" (
    "id" UUID NOT NULL,
    "entity_type" TEXT NOT NULL,
    "entity_id" UUID NOT NULL,
    "action" "ActionType" NOT NULL,
    "notes" TEXT,
    "admin_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "revision_histories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "audit_logs" (
    "id" UUID NOT NULL,
    "user_id" UUID,
    "action" TEXT NOT NULL,
    "entity_type" TEXT NOT NULL,
    "entity_id" UUID NOT NULL,
    "payload" JSONB,
    "ip_address" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "banners" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "link_url" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "banners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "settings" (
    "id" UUID NOT NULL,
    "key" TEXT NOT NULL,
    "value" JSONB NOT NULL,
    "description" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "settings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "news_categories_name_key" ON "news_categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "news_categories_slug_key" ON "news_categories"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "news_slug_key" ON "news"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "news_revision_token_key" ON "news"("revision_token");

-- CreateIndex
CREATE INDEX "news_status_published_at_idx" ON "news"("status", "published_at");

-- CreateIndex
CREATE INDEX "news_slug_idx" ON "news"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "umkm_slug_key" ON "umkm"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "umkm_revision_token_key" ON "umkm"("revision_token");

-- CreateIndex
CREATE INDEX "umkm_status_published_at_idx" ON "umkm"("status", "published_at");

-- CreateIndex
CREATE INDEX "umkm_category_idx" ON "umkm"("category");

-- CreateIndex
CREATE INDEX "umkm_slug_idx" ON "umkm"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "village_potentials_slug_key" ON "village_potentials"("slug");

-- CreateIndex
CREATE INDEX "village_potentials_slug_idx" ON "village_potentials"("slug");

-- CreateIndex
CREATE INDEX "public_facilities_category_idx" ON "public_facilities"("category");

-- CreateIndex
CREATE INDEX "banners_is_active_order_idx" ON "banners"("is_active", "order");

-- CreateIndex
CREATE UNIQUE INDEX "settings_key_key" ON "settings"("key");

-- AddForeignKey
ALTER TABLE "news" ADD CONSTRAINT "news_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "news_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news" ADD CONSTRAINT "news_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "umkm" ADD CONSTRAINT "umkm_potential_id_fkey" FOREIGN KEY ("potential_id") REFERENCES "village_potentials"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "umkm_products" ADD CONSTRAINT "umkm_products_umkm_id_fkey" FOREIGN KEY ("umkm_id") REFERENCES "umkm"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "revision_histories" ADD CONSTRAINT "revision_histories_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audit_logs" ADD CONSTRAINT "audit_logs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
