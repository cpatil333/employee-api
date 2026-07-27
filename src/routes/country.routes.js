import { Router } from "express";
import { fetchCountry } from "../controllers/country.controller.js";
const router = Router();
router.get("/", fetchCountry);
export default router;
//# sourceMappingURL=country.routes.js.map