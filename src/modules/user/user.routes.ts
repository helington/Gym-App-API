import { Router } from "express";
import { UserController } from "./user.controller";
import { UserModel } from "./user.model";

const router = Router();

router.get("/", UserController.getAll);
router.post("/", UserController.create);
router.get("/:id", UserController.getById);

export default router;