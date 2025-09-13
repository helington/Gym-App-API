import { Router } from "express";
import { WorkoutController } from "./workout.controller";
import { createWorkoutSchema } from "./workout.schema";
import { authenticate } from "../../middleware/authenticate";
import { validate } from "../../middleware/validate";

const router = Router();

router.post("/", authenticate, validate(createWorkoutSchema), WorkoutController.create)
router.get("/:id", authenticate, WorkoutController.getById);

export default router;