/*
  Warnings:

  - Added the required column `type` to the `library` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "library" ADD COLUMN     "type" TEXT NOT NULL;
