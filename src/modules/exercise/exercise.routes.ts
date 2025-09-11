import { Router } from "express";
import { ExerciseController } from "./exercise.controller";
import { authenticate } from "../../middleware/authenticate";

const router = Router();

router.get("/", ExerciseController.getAll)
router.get("/publics", ExerciseController.getAllPublics);
router.get("/:id", ExerciseController.getById);

router.get("/privates", authenticate, ExerciseController.getAllPrivates);
router.post("/", authenticate, ExerciseController.create);

export default router;