/*
  Warnings:

  - You are about to drop the column `anime_genres` on the `collection` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[anime_mal_id,user_email,anime_images,anime_title,anime_rating,anime_type,anime_episodes]` on the table `collection` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `anime_status` to the `collection` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `collection_anime_mal_id_user_email_anime_images_anime_title__key` ON `collection`;

-- AlterTable
ALTER TABLE `collection` DROP COLUMN `anime_genres`,
    ADD COLUMN `anime_status` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `collection_anime_mal_id_user_email_anime_images_anime_title__key` ON `collection`(`anime_mal_id`, `user_email`, `anime_images`, `anime_title`, `anime_rating`, `anime_type`, `anime_episodes`);
