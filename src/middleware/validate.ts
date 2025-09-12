import { NextFunction, Request, Response } from "express";
import { ZodObject } from "zod";

export const validate =
    (schema: ZodObject) =>
    (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse({
                params: req.params,
                body: req.body,
                query: req.query,
            });
            return next();
        } catch (err: any) {
            return res.status(400).send(err.errors);
        }
    };