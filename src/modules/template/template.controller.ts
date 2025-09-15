import { Response, Request } from "express";

import { TemplateService } from "./template.service";
import { CreateTemplateInput, AddExerciseInput } from "./template.schema";

export const TemplateController = {
    getAll: async (req: Request, res: Response) => {
        try {
            const userId = res.locals.user;
            const templates = await TemplateService.getAllTemplates(userId);
            res.status(201).json(templates)
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    },
    getById: async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);
            const Template = await TemplateService.getTemplateById(id);
            res.status(200).json(Template);
        } catch(err: any) {
            res.status(400).json({ error: err.message });
        }
    },
    create: async (req: Request<{}, {}, CreateTemplateInput>, res: Response) => {
        try {
            const data = req.body;
            const userId = res.locals.user;
            const template = await TemplateService.createTemplate(userId, data);
            res.status(200).json(template);
        } catch(err: any) {
            res.status(400).json({ error: err.message });
        }
    },
    update: async () => {

    },
    delete: async () => {

    },
    addExercise: async (
        req: Request<AddExerciseInput["params"], {}, AddExerciseInput["body"]>,
        res: Response
    ) => {
        try {
            const data = req.body;
            console.log(data)
            const templateId = Number(req.params.templateId);
            const exercise = await TemplateService.addExerciseToTemplate(templateId, data);
            res.status(200).json(exercise);
        } catch (err: any) {
            res.status(400).json({ error: err.message })
        }
    },
    updateExercise: async () => {

    },
    deleteExercise: async () => {

    },
}