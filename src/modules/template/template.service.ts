import { TemplateModel } from "./template.models";
import { ExerciseModel } from "../exercise/exercise.model";
import { AddExerciseInput, addExerciseSchema, CreateTemplateInput } from "./template.schema";

export const TemplateService = {
    getAllTemplates: async (userId: number) => TemplateModel.findAllTemplates(userId),
    getTemplateById: async (id: number) => {
        const template = await TemplateModel.findTemplateById(id);

        if (!template) {
            throw new Error("Template not found.");
        }
        
        return template;
    },
    createTemplate: async (userId: number, data: CreateTemplateInput) => TemplateModel.create(userId, data),
    addExerciseToTemplate: async (templateId: number, data: AddExerciseInput["body"]) => {
        const Template = await TemplateModel.findTemplateById(templateId);

        if (!Template) {
            throw new Error("Template not found.");
        }

        const exerciseId = data.exerciseId;

        const exercise = await ExerciseModel.findById(exerciseId);
        if (!exercise) {
            throw new Error("Exercise not found.");
        }
        await TemplateModel.addExercise(templateId, exerciseId);

        return exercise;
    },
}