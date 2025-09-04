import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient()

export const UserModel = {
    findAll: () => prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true
        }
    }),
    findUserById: (id: number) =>
        prisma.user.findUnique({
            select: {
                id: true,
                name: true,
                email: true
            },
            where: { id: id }
        }),
    create: (data: { name: string, email: string, password: string}) =>
        prisma.user.create({
            data: data
        }),
}