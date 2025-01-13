/*
  Warnings:

  - Changed the type of `year` on the `library` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `score` on the `library` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "library" DROP COLUMN "year",
ADD COLUMN     "year" INTEGER NOT NULL,
DROP COLUMN "score",
ADD COLUMN     "score" DOUBLE PRECISION NOT NULL;
