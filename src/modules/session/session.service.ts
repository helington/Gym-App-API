import { ExerciseModel } from "../exercise/exercise.model";
import { TemplateModel } from "../template/template.models";
import { SessionModel } from "./session.models";
import { AddExerciseLogInput, CreateSessionInput } from "./session.schema";

export const SessionService = {
    getAllSessions: async (userId: number) => SessionModel.findAllSessions(userId),
    getSessionById: async (userId: number, sessionId: number) => {
        const authorizedSession = await SessionModel.findSessionByIdAndUserId(sessionId, userId);
        if (!authorizedSession) {
            throw new Error("Unauthorized to access this session.")
        }

        return authorizedSession;
    },
    createSession: async (userId: number, data: CreateSessionInput) => {
        const templateId = data.templateId;
        const authorizedTemplate = await TemplateModel.findTemplateByIdAndUserId(templateId, userId);
        if (!authorizedTemplate) {
            throw new Error("Unauthorized to create session into this template.");
        }

        const session = await SessionModel.create(data);

        return session;
    },
    deleteSession: async (userId: number, sessionId: number) => {
        const authorizedSession = await SessionModel.findSessionByIdAndUserId(sessionId, userId);
        console.log(sessionId)
        if (!authorizedSession) {
            throw new Error("Unauthorized to delete this session.")
        }

        const deletedSession = await SessionModel.delete(sessionId);

        return deletedSession;
    },
    addExerciseToSession: async (userId: number, sessionId: number, data: AddExerciseLogInput["body"]) => {
        const session = await SessionModel.findSessionById(sessionId);
        if (!session) {
            throw new Error("Session not found.");
        }

        const authorizedSession = await SessionModel.findSessionByIdAndUserId(sessionId, userId);
        if (!authorizedSession) {
            throw new Error("Unauthorized to add exercise log to this session.")
        }

        const exerciseId = data.exerciseId;
        const validExercise = await ExerciseModel.findBySessionIdAndExerciseId(sessionId, exerciseId);
        if (!validExercise) {
            throw new Error("Invalid exercise.");
        }

        const exerciseLog = await SessionModel.addExercise(sessionId, data);

        return exerciseLog;
    },
    removeExerciseFromSession: async (userId: number, sessionId: number, exerciseLogId: number) => {
        const session = await SessionModel.findSessionById(sessionId);
        if (!session) {
            throw new Error("Session not found.");
        }

        const authorizedSession = await SessionModel.findSessionByIdAndUserId(sessionId, userId);
        if (!authorizedSession) {
            throw new Error("Unauthorized to remove exercise log from this session.")
        }

        const exercise = await SessionModel.findExerciseByIdAndSessionId(sessionId, exerciseLogId);
        if (!exercise) {
            throw new Error("Exercise not found.");
        }

        const exerciseLog = await SessionModel.removeExercise(exerciseLogId);

        return exerciseLog;
    },
}