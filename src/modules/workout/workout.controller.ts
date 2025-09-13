import { Response, Request } from "express";

import { WorkoutService } from "./workout.service";
import { CreateWorkoutInput } from "./workout.schema";

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

    create: async (req: Request<{}, {}, CreateWorkoutInput>, res: Response) => {
        try {
            const { exercisesIds } = req.body;
            const userId = res.locals.user;
            const workout = await WorkoutService.createWorkout(userId, exercisesIds);
            res.status(200).json(workout);
        } catch(err: any) {
            res.status(400).json({error: err.message});
        }
    },
}