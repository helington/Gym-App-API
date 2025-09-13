import { Request, Response } from "express";
import { UserService } from "./user.service";
import { get } from "http";

export const UserController = {
    getAll: async (req: Request, res: Response) => {
        try {
            const users = await UserService.getAllUsers();
            res.status(201).json(users);
        } catch (err: any) {
            res.status(400).json({ error: err.message })
        }
    },
    getById: async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);
            const user = await UserService.getUserById(id);
            res.status(201).json(user);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    },
    create: async (req: Request, res: Response) => {
        try {
            console.log(req.body)
            const { name, email, password } = req.body;
            const user = await UserService.createUser(name, email, password);
            res.status(201).json(user);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    },
};