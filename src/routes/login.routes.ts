import { Router } from "express";
import {
  fetchLogin,
  forgotPassword,
  resetPassword,
} from "../controllers/login.controller.js";

const router = Router();

router.post("/", fetchLogin);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

export default router;
