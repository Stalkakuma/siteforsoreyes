/*
  Warnings:

  - You are about to drop the column `userId` on the `threads` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "threads" DROP CONSTRAINT "threads_userId_fkey";

-- AlterTable
ALTER TABLE "threads" DROP COLUMN "userId",
ADD COLUMN     "authorId" TEXT NOT NULL DEFAULT '';

-- AddForeignKey
ALTER TABLE "threads" ADD CONSTRAINT "threads_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
