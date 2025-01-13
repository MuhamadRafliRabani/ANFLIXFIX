/*
  Warnings:

  - You are about to drop the column `anime_episodes` on the `collection` table. All the data in the column will be lost.
  - You are about to drop the column `anime_images` on the `collection` table. All the data in the column will be lost.
  - You are about to drop the column `anime_mal_id` on the `collection` table. All the data in the column will be lost.
  - You are about to drop the column `anime_rating` on the `collection` table. All the data in the column will be lost.
  - You are about to drop the column `anime_status` on the `collection` table. All the data in the column will be lost.
  - You are about to drop the column `anime_title` on the `collection` table. All the data in the column will be lost.
  - You are about to drop the column `anime_type` on the `collection` table. All the data in the column will be lost.
  - You are about to drop the column `user_email` on the `collection` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[mal_id,email,images,title]` on the table `collection` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `images` to the `collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mal_id` to the `collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `score` to the `collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `collection` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "collection_anime_mal_id_user_email_anime_images_anime_title_key";

-- AlterTable
ALTER TABLE "collection" DROP COLUMN "anime_episodes",
DROP COLUMN "anime_images",
DROP COLUMN "anime_mal_id",
DROP COLUMN "anime_rating",
DROP COLUMN "anime_status",
DROP COLUMN "anime_title",
DROP COLUMN "anime_type",
DROP COLUMN "user_email",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "images" TEXT NOT NULL,
ADD COLUMN     "mal_id" INTEGER NOT NULL,
ADD COLUMN     "score" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "year" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "collection_mal_id_email_images_title_key" ON "collection"("mal_id", "email", "images", "title");
