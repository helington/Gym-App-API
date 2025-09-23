import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();
const JWT_REFRESH_EXPIRATION = parseInt(process.env.JWT_REFRESH_EXPIRATION as string);

export const AuthModel = {
    createRefreshToken: async (userId: number) => {
        const refreshToken = await prisma.refreshToken.create({
            data: {
                userId: userId,
                expiresAt: new Date(Date.now() + JWT_REFRESH_EXPIRATION * 1000)
            }
        })

        return refreshToken.token;
    },
    findRefreshToken: (refreshToken: string) => prisma.refreshToken.findUnique({
        where: { token: refreshToken },
    }),
    deleteRefreshToken: (refreshToken: string) => prisma.refreshToken.delete({
        where: { token: refreshToken },
    })
}