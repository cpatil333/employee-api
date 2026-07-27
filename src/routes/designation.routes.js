import { createDesignation, deleteDesignation, fetchDesignation, fetchDesignations, updateDesignation, } from "../controllers/designation.controller.js";
import { Router } from "express";
const router = Router();
router.get("/", fetchDesignations);
router.get("/:id", fetchDesignation);
router.post("/", createDesignation);
router.put("/:id", updateDesignation);
router.delete("/:id", deleteDesignation);
export default router;
//# sourceMappingURL=designation.routes.js.map