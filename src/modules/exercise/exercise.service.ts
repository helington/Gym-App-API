import { ExerciseModel } from "./exercise.model";
import { UserModel } from "../user/user.model";
import { Visibility } from "@prisma/client";

export const ExerciseService = {
    getAllExercises: async () => {
        // const user = await UserModel.findUserById(userId);

        // if (!user) {
        //     throw new Error("Invalid user!")
        // }

        return ExerciseModel.findAll()
    },
    getAllPublicExercises: () => ExerciseModel.findAllPublics(),
    getAllPrivateExercises: async (userId: number) => {
        const user = await UserModel.findUserById(userId);

        if (!user) {
            throw new Error("Invalid user!")
        };

        return ExerciseModel.findAllPrivates(userId);
    },
    getExerciseById: async (exerciseId: number) => {
        const exercise = await ExerciseModel.findById(exerciseId);

        if (!exercise) {
            throw new Error ("Exercise not found!");
        };

        return exercise;
    },
    createExercise: async (
        name: string,
        muscle: string,
        equipment: string,
        difficulty: string,
        ownerId: number
    ) => {
        const user = await UserModel.findUserById(ownerId);

        if (!user) {
            throw new Error("Invalid user!");
        }

        const visibility = Visibility.PRIVATE;
        return ExerciseModel.create({ name, muscle, equipment, difficulty, visibility, ownerId });
    },
}