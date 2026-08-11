import { Router } from "express";
import {
  getEmployeesByDepartment,
  getEmployeesByGender,
  getEmployeesByStatus,
  getEmployeesExport,
} from "../controllers/dashboard.controller.js";

const router = Router();
router.get("/department/:departmentId", getEmployeesByDepartment);
router.get("/gender/:gender", getEmployeesByGender);
router.get("/status/:status", getEmployeesByStatus);
router.get("/export", getEmployeesExport);

export default router;
