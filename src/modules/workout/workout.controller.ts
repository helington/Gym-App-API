import { Response, Request } from "express";

import { WorkoutService } from "./workout.service";

export const WorkoutController = {
    getById: async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);
            const workout = await WorkoutService.getWorkoutById(id);
            res.status(200).json(workout);
        } catch(err: any) {
            res.status(400).json({error: err.message});
        }
    },

    create: async (req: Request, res: Response) => {
        try {
            const { userId, exercisesIds } = req.body;
            const workout = await WorkoutService.createWorkout(userId, exercisesIds);
            res.status(200).json(workout);
        } catch(err: any) {
            res.status(400).json({error: err.message});
        }
    },
}