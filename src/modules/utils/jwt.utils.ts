import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { RefreshToken } from "@prisma/client";

dotenv.config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string;
const JWT_ACCESS_EXPIRATION = parseInt(process.env.JWT_ACCESS_EXPIRATION as string);

export const generateAccessToken = (userId: number) => {
    return jwt.sign({ id: userId }, JWT_SECRET_KEY, {
        expiresIn: JWT_ACCESS_EXPIRATION
    });
};

export const verifyToken = (token: string) => {
    return jwt.verify(token, JWT_SECRET_KEY);
};

export const verityRefreshTokenExpiration = (refreshToken: RefreshToken) => {
    return refreshToken.expiresAt.getTime() < new Date().getTime();
};