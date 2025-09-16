/*
  Warnings:

  - You are about to drop the column `sets` on the `ExerciseLog` table. All the data in the column will be lost.
  - Added the required column `setNumber` to the `ExerciseLog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."ExerciseLog" DROP COLUMN "sets",
ADD COLUMN     "setNumber" INTEGER NOT NULL;
