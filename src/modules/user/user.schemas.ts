import { z } from "zod";

export const createUserSchema = z.object({
    body: z.object({
        name: z.string().nonempty("Name is required!"),
        email: z.string().nonempty("Email is required!").email(),
        password: z.string().nonempty("Password is required!")
    }),
});

export type CreateUserInput = z.infer<typeof createUserSchema.shape.body>;