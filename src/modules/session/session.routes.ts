import { Router } from "express";

import { authenticate } from "../../middleware/authenticate";
import { validate } from "../../middleware/validate";
import { SessionController } from "./session.controller";
import { createSessionSchema } from "./session.schema";

const router = Router();

router.get("/", SessionController.getAll);
router.post("/", validate(createSessionSchema), SessionController.create);
router.get("/:sessionId", SessionController.getById);
router.delete("/:sessionId", SessionController.delete);

router.post("/:sessionId/logs", SessionController.addExerciseLog);
router.delete("/:sessionId/logs/logId", SessionController.removeExerciseLog);

export default router;