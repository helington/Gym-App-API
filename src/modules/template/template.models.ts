import { PrismaClient } from "@prisma/client";
import { CreateTemplateInput } from "./template.schema";

const prisma = new PrismaClient();

export const TemplateModel = {
    findAllTemplates: (userId: number) =>
        prisma.workoutTemplate.findMany({
            where: { userId: userId },
            include: {
                exercises: {
                    include: {
                        exercise: true
                    }
                }
            }
        }),
    findTemplateById: (id: number) =>
        prisma.workoutTemplate.findUnique({
            where: { id },
            include: {
                exercises: true,
            }
        }),

    create: (userId: number, data: CreateTemplateInput) =>
        prisma.workoutTemplate.create({
            data: {
                userId: userId,
                ...data,
            },
        }),

    addExercise: (templateId: number, exerciseId: number) =>
        prisma.workoutTemplate.update({
            where: { id: templateId},
            data: {
                exercises: {
                    create: { exercise: { connect: {id: exerciseId} } },
                }
            }
        }),
};