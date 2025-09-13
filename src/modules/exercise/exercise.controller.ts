import { Request, Response } from "express";
import { ExerciseService } from "./exercise.service";

export const ExerciseController = {
    getAll: async (req: Request, res: Response) => {
        try {
            const exercises = await ExerciseService.getAllExercises();
            res.status(201).json(exercises);
        } catch (err: any) {
            res.status(400).json({ error: err.message })
        }
    },
    getAllPublics: async (req: Request, res: Response) => {
        try {
            const exercises = await ExerciseService.getAllPublicExercises();
            res.status(201).json(exercises);
        } catch (err: any) {
            res.status(400).json({ error: err.message })
        }
    },
    getAllPrivates: async (req: Request, res: Response) => {
        try {
            const userId = res.locals.user;
            const exercises = await ExerciseService.getAllPrivateExercises(userId);
            res.status(201).json(exercises);
        } catch (err: any) {
            res.status(400).json({ error: err.message })
        }
    },
    getById: async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);
            const exercise = await ExerciseService.getExerciseById(id);
            res.status(201).json(exercise);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    },
    create: async (req: Request, res: Response) => {
        try {
            const ownerId = res.locals.user;
            const { name, muscle, equipment,  difficulty} = req.body;
            const exercise = await ExerciseService.createExercise(
                name,
                muscle,
                equipment,
                difficulty,
                ownerId
            );
            res.status(201).json(exercise);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    },
};