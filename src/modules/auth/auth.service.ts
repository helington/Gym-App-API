import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../user/user.model";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string;
const JWT_ACCESS_EXPIRATION = parseInt(process.env.JWT_ACCESS_EXPIRATION as string);

export const AuthService = {
    loginUser: async (email: string, password: string) => {
        const user = await UserModel.findUserByEmail(email);

        if (!user || !await bcrypt.compare(password, user.password)) {
            throw new Error("Invalid credentials!");
        }

        return jwt.sign({id: user.id}, JWT_SECRET_KEY, { expiresIn: JWT_ACCESS_EXPIRATION })
    },
};