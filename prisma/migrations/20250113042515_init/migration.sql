/*
  Warnings:

  - You are about to drop the `collection` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "collection";

-- CreateTable
CREATE TABLE "library" (
    "id" SERIAL NOT NULL,
    "mal_id" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "images" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "score" TEXT NOT NULL,

    CONSTRAINT "library_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "library_mal_id_email_images_title_key" ON "library"("mal_id", "email", "images", "title");
