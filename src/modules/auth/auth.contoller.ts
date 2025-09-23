import { Request, Response } from "express";
import { AuthService } from "./auth.service";

export const AuthController = {
    login: async(req: Request, res: Response) => {
        const { email, password } = req.body;
        try {
            const {accessToken, refreshToken} = await AuthService.loginUser(email, password);
            res
                .cookie("refreshToken", refreshToken, {
                    httpOnly: true,
                    sameSite: 'strict',
                })
                .status(200)
                .json({accessToken});
        } catch(err: any) {
            res.status(400).json({message: "Login failed", error: err.message});
        }
    },
    refresh: async(req: Request, res: Response) => {
        let refreshToken = req.cookies["refreshToken"];

        if (!refreshToken) {
            return res.status(401).send("Access Denied. No refresh token provided.");
        }

        try {
            const {accessToken, newRefreshToken} = await AuthService.refresh(refreshToken);
            res
                .cookie("refreshToken", newRefreshToken, {
                        httpOnly: true,
                        sameSite: 'strict',
                })
                .status(201)
                .json({accessToken});
        } catch (err: any) {
            res.status(400).send({"message": "Refresh Token failed", error: err.message});
        }
    }
}