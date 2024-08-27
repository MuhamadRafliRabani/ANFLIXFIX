-- CreateTable
CREATE TABLE "collection" (
    "id" SERIAL NOT NULL,
    "anime_mal_id" INTEGER NOT NULL,
    "user_email" TEXT NOT NULL,
    "anime_images" TEXT NOT NULL,
    "anime_title" TEXT NOT NULL,
    "anime_rating" TEXT NOT NULL,
    "anime_type" TEXT NOT NULL,
    "anime_status" TEXT NOT NULL,
    "anime_episodes" INTEGER,

    CONSTRAINT "collection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "collection_anime_mal_id_user_email_anime_images_anime_title_key" ON "collection"("anime_mal_id", "user_email", "anime_images", "anime_title", "anime_rating", "anime_type", "anime_episodes");
