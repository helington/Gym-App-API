-- AlterTable
ALTER TABLE "public"."WorkoutExercise" ALTER COLUMN "weight" DROP NOT NULL,
ALTER COLUMN "reps" DROP NOT NULL,
ALTER COLUMN "sets" DROP NOT NULL;
