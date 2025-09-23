import { z } from "zod";

export const LoginSchema = z.object({
    body: z.object({
        email: z.email().nonempty("Email is required"),
        password: z.string().nonempty("Password is required"),
    })
})

export type LoginInput = z.infer<typeof LoginSchema.shape.body>;