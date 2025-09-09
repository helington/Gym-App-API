import { Router } from "express";
import { ExerciseController } from "./exercise.controller";

const router = Router();

router.get("/", ExerciseController.getAll);
router.post("/", ExerciseController.create);
router.get("/:id", ExerciseController.getById);

export default router;