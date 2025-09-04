import { WorkoutModel } from "./workout.models";

export const WorkoutService = {
    getWorkoutById: async (id: number) => {
        const workout = await WorkoutModel.findWorkoutById(id);

        if (!workout) {
            throw new Error("Workout not found.");
        }
        
        return workout;
    },
    createWorkout: async (userId: number) => {
        return WorkoutModel.create(userId);
    },
}