import { Router } from "express";
import { WorkoutController } from "./workout.controller";

const router = Router();

router.post("/", WorkoutController.create)
router.get("/:id", WorkoutController.getById);

export default router;