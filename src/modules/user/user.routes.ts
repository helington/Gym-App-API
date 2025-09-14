import { Router } from "express";
import { UserController } from "./user.controller";
import { createUserSchema, updateUserSchema } from "./user.schemas";
import { validate } from "../../middleware/validate";
import { authenticate } from "../../middleware/authenticate";

const router = Router();

router.post("/", validate(createUserSchema), UserController.create);
router.patch("/:userId", authenticate, validate(updateUserSchema), UserController.update);
router.delete("/:userId", authenticate, UserController.delete);

router.get("/", UserController.getAll);
router.get("/:userId", UserController.getById);

export default router;