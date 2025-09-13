import { PrismaClient, Visibility } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient()

export const ExerciseModel = {
    // Run this when Auth is implemented.
    // findAll: (userId: number) => prisma.exercise.findMany({
    //     where: {
    //         OR: [
    //             { visibility: Visibility.PUBLIC},
    //             { ownerId: userId}
    //         ]
    //     }
    // }),
    findAll: () => prisma.exercise.findMany(),
    findAllPublics: () => prisma.exercise.findMany({
        where: {
            visibility: "PUBLIC",
        }
    }),
    findAllPrivates: (userId: number) => prisma.exercise.findMany({
        where: {
            AND: [
                { visibility: Visibility.PRIVATE },
                { ownerId: userId }
            ]
        }
    }),
    findById: (exerciseId: number) => prisma.exercise.findUnique({
        where: {
            id: exerciseId
        }
    }),
    create: (data: {
        name: string,
        muscle: string,
        equipment: string,
        difficulty: string,
        visibility: Visibility,
        ownerId: number
    }) =>
        prisma.exercise.create({
            data: data
        })
};