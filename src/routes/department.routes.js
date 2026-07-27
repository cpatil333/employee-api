import { Router } from "express";
import { createDepartment, deleteDepartment, fetchDepartment, fetchDepartments, updateDepartment, } from "../controllers/department.controller.js";
const router = Router();
router.get("/", fetchDepartments);
router.get("/:id", fetchDepartment);
router.post("/", createDepartment);
router.put("/:id", updateDepartment);
router.delete("/:id", deleteDepartment);
export default router;
//# sourceMappingURL=department.routes.js.map