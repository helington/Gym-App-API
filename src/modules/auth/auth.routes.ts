import { Router } from "express";
import { AuthController } from "./auth.contoller";

const router = Router();

router.post("/", AuthController.login);

export default router