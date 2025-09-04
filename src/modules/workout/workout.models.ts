import { Exercise, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const WorkoutModel = {
    findWorkoutById: (id: number) =>
        prisma.workout.findUnique({
            where: { id },
    }),

    create: (userId: number) =>
        prisma.workout.create({
            data: {userId: userId}
    }),
}