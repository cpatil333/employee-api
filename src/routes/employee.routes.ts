import { Router } from "express";
import {
  createEmployee,
  deleteEmployee,
  fetchEmployeeById,
  fetchEmployees,
  updateEmployee,
} from "../controllers/employee.controller.js";
import upload from "../config/multer.js";
//import { upload } from "../middleware/upload.middleware.js";

const router = Router();

router.post("/", upload.single("profileImage"), createEmployee);
router.put("/:employeeId", upload.single("profileImage"), updateEmployee);

router.get("/", fetchEmployees);
router.get("/:employeeId", fetchEmployeeById);
router.post("/", createEmployee);
router.put("/:employeeId", updateEmployee);
router.delete("/:employeeId", deleteEmployee);

export default router;
