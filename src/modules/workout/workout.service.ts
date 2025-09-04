import { WorkoutModel } from "./workout.models";
import { UserModel } from "../user/user.model";

export const WorkoutService = {
    getWorkoutById: async (id: number) => {
        const workout = await WorkoutModel.findWorkoutById(id);

        if (!workout) {
            throw new Error("Workout not found.");
        }
        
        return workout;
    },
    createWorkout: async (userId: number, exercisesIds: number[]) => {
        const user = await UserModel.findUserById(userId);

        if (!user) {
            throw new Error("User doens't exist!")
        }

        return WorkoutModel.create(userId, exercisesIds);
    },
}