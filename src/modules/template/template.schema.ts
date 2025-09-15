import { z } from "zod";

export const createTemplateSchema = z.object({
    body: z.object({
        title: z.string().nonempty("Title is required!"),
    })
});

export const updateTemplateSchema = z.object({
    params: z.object({
        templateId: z.string(),
    }),
    body: z.object({
        title: z.string().nonempty("Title is required!"),
    }),
});

export const addExerciseSchema = z.object({
    params: z.object({
        templateId: z.string(),
    }),
    body: z.object({
        exerciseId: z.int()
    }),
})

export const ExerciseParamsSchema = z.object({
    params: z.object({
        templateId: z.string(),
        exerciseId: z.string(),
    }),
})

export type CreateTemplateInput = z.infer<typeof createTemplateSchema.shape.body>;
export type UpdateTemplateInput = z.infer<typeof updateTemplateSchema>;
export type AddExerciseInput = z.infer<typeof addExerciseSchema>;
export type ExerciseParams = z.infer<typeof ExerciseParamsSchema.shape.params>;