import { Response, Request } from "express";

import { TemplateService } from "./template.service";
import { CreateTemplateInput, AddExerciseInput, ExerciseParamsInput, TemplateParamsInput, UpdateTemplateInput } from "./template.schema";

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
    getById: async (req: Request<TemplateParamsInput>, res: Response) => {
        try {
            const templateId = Number(req.params.templateId);
            const userId = res.locals.user;
            const Template = await TemplateService.getTemplateById(userId, templateId);
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
    update: async (
        req: Request<UpdateTemplateInput["params"], {}, UpdateTemplateInput["body"]>,
        res: Response
    ) => {
        try {
            const data = req.body;
            const userId = res.locals.user;
            const templateId = Number(req.params.templateId);
            const template = await TemplateService.updateTemplate(userId, templateId, data);
            res.status(200).json(template);
        } catch(err: any) {
            res.status(400).json({ error: err.message });
        }
    },
    delete: async (req: Request<TemplateParamsInput>, res: Response) => {
        try {
            const templateId = Number(req.params.templateId);
            const userId = res.locals.user;
            const template = await TemplateService.deleteTemplate(templateId, userId);
            res.status(200).json(template);
        } catch(err: any) {
            res.status(400).json({ error: err.message });
        }
    },
    addExercise: async (
        req: Request<AddExerciseInput["params"], {}, AddExerciseInput["body"]>,
        res: Response
    ) => {
        try {
            const userId = res.locals.user;
            const data = req.body;
            const templateId = Number(req.params.templateId);

            const exercise = await TemplateService.addExerciseToTemplate(userId, templateId, data);
            res.status(200).json(exercise);
        } catch (err: any) {
            res.status(400).json({ error: err.message })
        }
    },
    removeExercise: async (req: Request<ExerciseParamsInput>, res: Response) => {
        try {
            const userId = res.locals.user;
            const templateId = Number(req.params.templateId);
            const exerciseId = Number(req.params.exerciseId);

            const exercise = await TemplateService.removeExerciseFromTemplate(userId, templateId, exerciseId);
            res.status(200).json(exercise);
        } catch (err: any) {
            res.status(400).json({ error: err.message })
        }
    },
    getSessions: async (req: Request<TemplateParamsInput>, res: Response) => {
        try {
            const userId = res.locals.user;
            const templateId = Number(req.params.templateId);

            const exercise = await TemplateService.getSessionsFromTemplate(userId, templateId);
            res.status(200).json(exercise);
        } catch (err: any) {
            res.status(400).json({ error: err.message })
        }
    },
}