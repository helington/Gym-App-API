import { z } from "zod";

export const createUserSchema = z.object({
    body: z.object({
        name: z.string().nonempty("Name is required!"),
        email: z.email().nonempty("Email is required!"),
        password: z.string().nonempty("Password is required!"),
    }),
});

export const updateUserSchema = z.object({
    params: z.object({
        userId: z.string(),
    }),
    body: z.object({
        name: z.string().optional(),
        email: z.email().optional(),
        password: z.string().optional(),
    }),
});

export const userParamsSchema = z.object({
    params: z.object({
        userId: z.string(),
    }),
})

export type CreateUserInput = z.infer<typeof createUserSchema.shape.body>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
export type UserParamsInput = z.infer<typeof userParamsSchema.shape.params>;