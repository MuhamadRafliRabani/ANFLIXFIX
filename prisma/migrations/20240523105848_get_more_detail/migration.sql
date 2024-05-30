/*
  Warnings:

  - A unique constraint covering the columns `[anime_mal_id,user_email,anime_images,anime_title,anime_rating,anime_genres,anime_type,anime_episodes]` on the table `collection` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `anime_episodes` to the `collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `anime_genres` to the `collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `anime_rating` to the `collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `anime_type` to the `collection` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `collection_anime_mal_id_user_email_anime_images_anime_title_key` ON `collection`;

-- AlterTable
ALTER TABLE `collection` ADD COLUMN `anime_episodes` INTEGER NOT NULL,
    ADD COLUMN `anime_genres` VARCHAR(191) NOT NULL,
    ADD COLUMN `anime_rating` VARCHAR(191) NOT NULL,
    ADD COLUMN `anime_type` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `collection_anime_mal_id_user_email_anime_images_anime_title__key` ON `collection`(`anime_mal_id`, `user_email`, `anime_images`, `anime_title`, `anime_rating`, `anime_genres`, `anime_type`, `anime_episodes`);
