import { Request, Response } from "express";
import { UserService } from "./user.service";
import { CreateUserInput, UserParamsInput, UpdateUserInput } from "./user.schemas";

export const UserController = {
    getAll: async (req: Request, res: Response) => {
        try {
            const users = await UserService.getAllUsers();
            res.status(201).json(users);
        } catch (err: any) {
            res.status(400).json({ error: err.message })
        }
    },
    getById: async (req: Request<UserParamsInput>, res: Response) => {
        try {
            const id = Number(req.params.userId);
            const user = await UserService.getUserById(id);
            res.status(201).json(user);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    },
    create: async (req: Request<{}, {}, CreateUserInput>, res: Response) => {
        try {
            const data= req.body;
            const user = await UserService.createUser(data);
            res.status(201).json(user);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    },
    update: async (
        req: Request<UpdateUserInput["params"], {}, UpdateUserInput["body"]>,
        res: Response
    ) => {
        try {
            const userId = Number(req.params.userId);
            const currentUserId = res.locals.user;
            const dataToUpdate = req.body;
            const user = await UserService.updateUser(currentUserId, userId, dataToUpdate);
            res.status(201).json(user);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    },
    delete: async (req: Request<UserParamsInput>, res: Response) => {
        try {
            const userId = Number(req.params.userId);
            const currentUserId = res.locals.user;
            const user = await UserService.deleteUser(currentUserId, userId);
            res.status(201).json(user);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    },
};