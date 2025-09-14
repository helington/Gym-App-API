import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import { CreateUserInput, UpdateUserInput } from "./user.schemas";

dotenv.config();

const prisma = new PrismaClient()

const userSelect = {
    id: true,
    name: true,
    email: true
}

export const UserModel = {
    findAll: () => prisma.user.findMany({
        select: userSelect
    }),
    findUserById: (id: number) =>
        prisma.user.findUnique({
            select: userSelect,
            where: { id: id }
        }),
    findUserByEmail: (email: string) =>
        prisma.user.findUnique({
            where: {
                email: email
            }
        }),
    create: (data: CreateUserInput) =>
        prisma.user.create({
            select: userSelect,
            data: data
        }),
    update: (userId: number, data: UpdateUserInput["body"]) => 
        prisma.user.update({
            select: userSelect,
            where: { id: userId },
            data: data,
        }),
    delete: (userId: number) =>
        prisma.user.delete({
            select: userSelect,
            where: { id: userId },
        })
}