import { Router } from "express";
//import { upload } from "../middleware/upload.middleware.js";
import { createEmployee } from "../controllers/employee.controller.js";
import upload from "../config/multer.js";

const router = Router();

router.post("/", upload.single("profileImage"), createEmployee);

export default router;
