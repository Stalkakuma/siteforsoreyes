/*
  Warnings:

  - A unique constraint covering the columns `[id,image,name]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "threads" DROP CONSTRAINT "threads_authorId_fkey";

-- AlterTable
ALTER TABLE "threads" ADD COLUMN     "authorImage" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "authorName" TEXT NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "users_id_image_name_key" ON "users"("id", "image", "name");

-- AddForeignKey
ALTER TABLE "threads" ADD CONSTRAINT "threads_authorId_authorImage_authorName_fkey" FOREIGN KEY ("authorId", "authorImage", "authorName") REFERENCES "users"("id", "image", "name") ON DELETE RESTRICT ON UPDATE CASCADE;
