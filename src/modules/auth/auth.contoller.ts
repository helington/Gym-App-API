import { Request, Response } from "express";
import { AuthService } from "./auth.service";

export const AuthController = {
    login: async(req: Request, res: Response) => {
        const { email, password } = req.body;
        try {
            const token = await AuthService.loginUser(email, password);
            res.status(200).send({token});
        } catch(err: any) {
            res.status(400).send({"message": "Login failed", error: err.message});
        }
    }
}