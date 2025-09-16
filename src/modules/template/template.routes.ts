import { Router } from "express";
import { TemplateController } from "./template.controller";
import { createTemplateSchema, updateTemplateSchema, addExerciseSchema } from "./template.schema";
import { validate } from "../../middleware/validate";

const router = Router();

router.get("/", TemplateController.getAll);
router.post("/", validate(createTemplateSchema), TemplateController.create)
router.get("/:templateId", TemplateController.getById);
router.patch("/:templateId", validate(updateTemplateSchema), TemplateController.update);
router.delete("/:templateId", TemplateController.delete);

router.post("/:templateId/exercises", validate(addExerciseSchema), TemplateController.addExercise);
router.delete("/:templateId/exercises/:exerciseId", TemplateController.removeExercise);

router.get("/:templateId/sessions", TemplateController.getSessions);

export default router;