import { Router } from "express";
import { AuthController } from "./auth.contoller";
import { validate } from "../../middleware/validate";
import { LoginSchema } from "./auth.schemas";

const router = Router();

router.post("/login",validate(LoginSchema), AuthController.login);
router.post("/refresh", AuthController.refresh)

export default router