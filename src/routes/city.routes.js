import { Router } from "express";
import { fetchCities } from "../controllers/city.controller.js";
const router = Router();
router.get("/:stateId", fetchCities);
export default router;
//# sourceMappingURL=city.routes.js.map