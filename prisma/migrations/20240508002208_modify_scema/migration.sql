/*
  Warnings:

  - A unique constraint covering the columns `[anime_mal_id,user_email,anime_images,anime_title]` on the table `collection` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `collection_anime_mal_id_user_email_key` ON `collection`;

-- AlterTable
ALTER TABLE `collection` ADD COLUMN `anime_images` VARCHAR(191) NULL,
    ADD COLUMN `anime_title` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `collection_anime_mal_id_user_email_anime_images_anime_title_key` ON `collection`(`anime_mal_id`, `user_email`, `anime_images`, `anime_title`);
