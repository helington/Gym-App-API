import { WorkoutModel } from "./workout.models";
import { ExerciseModel } from "../exercise/exercise.model";

export const WorkoutService = {
    getWorkoutById: async (id: number) => {
        const workout = await WorkoutModel.findWorkoutById(id);

        if (!workout) {
            throw new Error("Workout not found.");
        }
        
        return workout;
    },
    createWorkout: async (userId: number, exercisesIds: number[]) => {
        for (const exerciseId of exercisesIds) {
            const exercise = await ExerciseModel.findById(exerciseId);

            if (!exercise) {
                throw new Error("Some invalid exercise was selected.")
            }
        }

        return WorkoutModel.create(userId, exercisesIds);
    },
}