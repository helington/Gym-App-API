import { PrismaClient } from "@prisma/client";
import { CreateTemplateInput, UpdateTemplateInput } from "./template.schema";

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
    findTemplateByIdAndUserId: (id: number, userId: number) =>
        prisma.workoutTemplate.findUnique({
            where: {
                id: id,
                userId: userId
            },
            include: {
                exercises: {
                    include: {
                        exercise: true
                    }
                }
            }
        }),
    create: (userId: number, data: CreateTemplateInput) =>
        prisma.workoutTemplate.create({
            data: {
                userId: userId,
                ...data,
            },
        }),
    update: (templateId: number, data: UpdateTemplateInput["body"]) =>
        prisma.workoutTemplate.update({
            where: { id: templateId },
            data: data
        }),
    delete: (templateId: number) =>
        prisma.workoutTemplate.delete({
            where: { id: templateId }
        }),
    findExerciseById: (exerciseId: number) =>
        prisma.templateExercises.findUnique({
            where: { id: exerciseId },
            select: {
                exercise: true
            }
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
    removeExercise: (exerciseId: number) =>
        prisma.templateExercises.delete({
            where: { id: exerciseId }
        }),
    findAllSessions: (templateId: number) =>
        prisma.workoutSession.findMany({
            where: { templateId: templateId },
            include: {
                logs: {
                    include: {
                        exercise: true
                    }
                }

            }
        }),
};