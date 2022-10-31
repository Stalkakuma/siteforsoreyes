/*
  Warnings:

  - You are about to drop the column `authorImage` on the `threads` table. All the data in the column will be lost.
  - You are about to drop the column `authorName` on the `threads` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "threads" DROP CONSTRAINT "threads_authorId_authorImage_authorName_fkey";

-- DropIndex
DROP INDEX "users_id_image_name_key";

-- AlterTable
ALTER TABLE "threads" DROP COLUMN "authorImage",
DROP COLUMN "authorName";

-- AddForeignKey
ALTER TABLE "threads" ADD CONSTRAINT "threads_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
