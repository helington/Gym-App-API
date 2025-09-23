import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../user/user.model";
import dotenv from "dotenv";
import { AuthModel } from "./auth.model";
import { generateAccessToken, verityRefreshTokenExpiration } from "../utils/jwt.utils";

dotenv.config();

export const AuthService = {
    loginUser: async (email: string, password: string) => {
        const user = await UserModel.findUserByEmail(email);

        if (!user || !await bcrypt.compare(password, user.password)) {
            throw new Error("Invalid credentials!");
        }

        const userId = user.id;

        const accessToken = generateAccessToken(userId);
        const refreshToken = AuthModel.createRefreshToken(userId);

        return {accessToken, refreshToken};
    },

    refresh: async (refreshToken: string) => {
        const validRefreshToken = await AuthModel.findRefreshToken(refreshToken);

        if (!validRefreshToken) {
            throw new Error ("Invalid refresh token");
        }

        if (verityRefreshTokenExpiration(validRefreshToken)) {
            AuthModel.deleteRefreshToken(refreshToken);
            throw new Error ("Refresh token was expired. Please make a new login.");
        }

        AuthModel.deleteRefreshToken(refreshToken);

        const userId = validRefreshToken.userId;

        const accessToken = generateAccessToken(userId);
        const newRefreshToken = AuthModel.createRefreshToken(userId);

        return {accessToken, newRefreshToken};
    }
};