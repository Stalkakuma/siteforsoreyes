/*
  Warnings:

  - Added the required column `body` to the `threads` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "threads" ADD COLUMN     "body" TEXT NOT NULL;
