import { TemplateModel } from "./template.models";
import { ExerciseModel } from "../exercise/exercise.model";
import { AddExerciseInput, addExerciseSchema, CreateTemplateInput, UpdateTemplateInput } from "./template.schema";

export const TemplateService = {
    getAllTemplates: async (userId: number) => TemplateModel.findAllTemplates(userId),
    getTemplateById: async (userId: number, templateId: number) => {
        const authorizedTemplate = await TemplateModel.findTemplateByIdAndUserId(templateId, userId);
        if (!authorizedTemplate) {
            throw new Error("Unauthorized to access this template.")
        }

        return authorizedTemplate;
    },
    createTemplate: async (userId: number, data: CreateTemplateInput) => TemplateModel.create(userId, data),
    updateTemplate: async (userId: number, templateId: number, data: UpdateTemplateInput["body"]) => {
        const authorizedTemplate = await TemplateModel.findTemplateByIdAndUserId(templateId, userId);
        if (!authorizedTemplate) {
            throw new Error("Unauthorized to update this template.")
        }

        const updatedTemplate = await TemplateModel.update(templateId, data);

        return updatedTemplate;
    },
    deleteTemplate: async (userId: number, templateId: number) => {
        const authorizedTemplate = await TemplateModel.findTemplateByIdAndUserId(templateId, userId);
        if (!authorizedTemplate) {
            throw new Error("Unauthorized to remove this template.")
        }

        const deletedTemplate = await TemplateModel.delete(templateId);

        return deletedTemplate;
    },
    addExerciseToTemplate: async (userId: number, templateId: number, data: AddExerciseInput["body"]) => {
        const Template = await TemplateModel.findTemplateById(templateId);
        if (!Template) {
            throw new Error("Template not found.");
        }

        const authorizedTemplate = await TemplateModel.findTemplateByIdAndUserId(templateId, userId);
        if (!authorizedTemplate) {
            throw new Error("Unauthorized to add exercise to this template.")
        }

        const exerciseId = data.exerciseId;
        const exercise = await ExerciseModel.findById(exerciseId);
        if (!exercise) {
            throw new Error("Exercise not found.");
        }
        await TemplateModel.addExercise(templateId, exerciseId);

        return exercise;
    },
    removeExerciseFromTemplate: async (userId: number, templateId: number, exerciseId: number) => {
        const Template = await TemplateModel.findTemplateById(templateId);
        if (!Template) {
            throw new Error("Template not found.");
        }

        const authorizedTemplate = await TemplateModel.findTemplateByIdAndUserId(templateId, userId);
        if (!authorizedTemplate) {
            throw new Error("Unauthorized to remove exercise from this template.")
        }

        const exercise = await TemplateModel.findExerciseById(exerciseId);
        if (!exercise) {
            throw new Error("Exercise not found.");
        }
        await TemplateModel.removeExercise(exerciseId);

        return exercise;
    },
    getSessionsFromTemplate: async (userId: number, templateId: number) => {
        const Template = await TemplateModel.findTemplateById(templateId);
        if (!Template) {
            throw new Error("Template not found.");
        }

        const authorizedTemplate = await TemplateModel.findTemplateByIdAndUserId(templateId, userId);
        if (!authorizedTemplate) {
            throw new Error("Unauthorized to access sessions from this template.")
        }

        const sessions = await TemplateModel.findAllSessions(templateId);

        return sessions
    }
}