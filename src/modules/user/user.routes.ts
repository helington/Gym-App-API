import { Router } from "express";
import { UserController } from "./user.controller";
import { createUserSchema } from "./user.schemas";
import { validate } from "../../middleware/validate";

const router = Router();

router.get("/", UserController.getAll);
router.post("/", validate(createUserSchema), UserController.create);
router.get("/:id", UserController.getById);

export default router;