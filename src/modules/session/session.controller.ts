import { Request, Response } from "express"

import { SessionService } from "./session.service";
import { AddExerciseLogInput, CreateSessionInput, ExerciseLogParamsInput, ExerciseLogParamsSchema, SessionParamsInput } from "./session.schema";

export const SessionController = {
    getAll: async (req: Request, res: Response) => {
        try {
            const userId = res.locals.user;
            const templates = await SessionService.getAllSessions(userId);
            res.status(201).json(templates)
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    },
    getById: async (req: Request<SessionParamsInput>, res: Response) => {
        try {
            const sessionId = Number(req.params.sessionId);
            const userId = res.locals.user;
            const session = await SessionService.getSessionById(userId, sessionId);
            res.status(200).json(session);
        } catch(err: any) {
            res.status(400).json({ error: err.message });
        }
    },
    create: async (req: Request<{}, {}, CreateSessionInput>, res: Response) => {
        try {
            const data = req.body;
            const userId = res.locals.user;
            const session = await SessionService.createSession(userId, data);
            res.status(200).json(session);
        } catch(err: any) {
            res.status(400).json({ error: err.message });
        }
    },
    delete: async (req: Request<SessionParamsInput>, res: Response) => {
        try {
            const sessionId = Number(req.params.sessionId);
            const userId = res.locals.user;
            const session = await SessionService.deleteSession(userId, sessionId);
            res.status(200).json(session);
        } catch(err: any) {
            res.status(400).json({ error: err.message });
        }
    },
    addExerciseLog: async (
        req: Request<AddExerciseLogInput["params"], {}, AddExerciseLogInput["body"]>,
        res: Response
    ) => {
        try {
            const userId = res.locals.user;
            const data = req.body;
            const sessionId = Number(req.params.sessionId);

            const exercise = await SessionService.addExerciseToSession(userId, sessionId, data);
            res.status(200).json(exercise);
        } catch (err: any) {
            res.status(400).json({ error: err.message })
        }
    },
    removeExerciseLog: async (req: Request<ExerciseLogParamsInput>, res: Response) => {
        try {
            const userId = res.locals.user;
            const sessionId = Number(req.params.sessionId);
            const logId = Number(req.params.logId);

            const exercise = await SessionService.removeExerciseFromSession(userId, sessionId, logId);
            res.status(200).json(exercise);
        } catch (err: any) {
            res.status(400).json({ error: err.message })
        }
    },
}