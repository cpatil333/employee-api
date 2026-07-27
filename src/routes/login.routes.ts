import { Router } from "express";
import { fetchLogin } from "../controllers/login.controller.js";

const router = Router();

router.post("/", fetchLogin);

export default router;
