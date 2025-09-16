import { z } from "zod";

export const createSessionSchema = z.object({
    body: z.object({
        templateId: z.int(),
        notes: z.string().optional(),
    }),
});

export const sessionParamsSchema = z.object({
    params: z.object({
        sessionId: z.string(),
    }),
});

export const addExerciseLogSchema = z.object({
    params: z.object({
        sessionId: z.string(),
    }),
    body: z.object({
        exerciseId: z.int(),
        sets: z.int().positive(),
        reps: z.int().positive(),
        weight: z.number().positive(),
    }),
});

export const ExerciseLogParamsSchema = z.object({
    params: z.object({
        sessionId: z.string(),
        logId: z.string(),
    }),
});

export type CreateSessionInput = z.infer<typeof createSessionSchema.shape.body>;
export type SessionParamsInput = z.infer<typeof sessionParamsSchema.shape.params>;
export type AddExerciseLogInput = z.infer<typeof addExerciseLogSchema>;
export type ExerciseLogParamsInput = z.infer<typeof ExerciseLogParamsSchema.shape.params>;