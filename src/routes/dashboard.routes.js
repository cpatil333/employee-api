import { Router } from "express";
import { getEmployeesByDepartment, getEmployeesByGender, getEmployeesByStatus, } from "../controllers/dashboard.controller.js";
const router = Router();
router.get("/department/:departmentId", getEmployeesByDepartment);
router.get("/gender/:gender", getEmployeesByGender);
router.get("/status/:status", getEmployeesByStatus);
export default router;
//# sourceMappingURL=dashboard.routes.js.map