/*
  Warnings:

  - Added the required column `status` to the `library` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "library" ADD COLUMN     "status" TEXT NOT NULL;
