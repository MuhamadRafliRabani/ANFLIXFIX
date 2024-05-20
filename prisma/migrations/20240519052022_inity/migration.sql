/*
  Warnings:

  - Made the column `anime_title` on table `collection` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `collection` MODIFY `anime_title` VARCHAR(191) NOT NULL;
