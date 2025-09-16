import { PrismaClient } from "@prisma/client";
import { AddExerciseLogInput, CreateSessionInput } from "./session.schema";

const prisma = new PrismaClient();

export const SessionModel = {
    findAllSessions: (userId: number) =>
        prisma.workoutSession.findMany({
            where: { template: { userId: userId } },
            include: {
                logs: true
            }
        }),
    findSessionById: (id: number) =>
        prisma.workoutSession.findUnique({
            where: { id },
        }),
    findSessionByIdAndUserId: (id: number, userId: number) =>
        prisma.workoutSession.findUnique({
            where: { 
                template: { userId: userId },
                id: id,
            },
            include: {
                logs: true
            }
        }),
    create: (data: CreateSessionInput) =>
        prisma.workoutSession.create({
            data: data,
            include: {
                logs: true
            }
        }),
    delete: (sessionId: number) =>
        prisma.workoutSession.delete({
            where: { id: sessionId },
            include: {
                logs: true
            }
        }),
    addExercise: (sessionId: number, data: AddExerciseLogInput["body"]) =>
        prisma.workoutSession.update({
            where: { id: sessionId },
            data: {
                logs: {
                    create: data
                }
            },
            include: {
                logs: true
            }
        }),
    findExerciseByIdAndSessionId: (sessionId: number, exerciseLogId: number) =>
        prisma.exerciseLog.findUnique({
            where: {
                id: exerciseLogId,
                session: { id: sessionId }
            }
        }),
    removeExercise: (exerciseLogId: number) =>
        prisma.exerciseLog.delete({
            where: {
                id: exerciseLogId,
            },
        }),
}