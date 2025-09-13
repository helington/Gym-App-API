import { z } from "zod";

export const createWorkoutSchema = z.object({
    body: z.object({
        exercisesIds: z.array(z.number()).nonempty("Some exercise id is required")
    })
});

export type CreateWorkoutInput = z.infer<typeof createWorkoutSchema.shape.body>;