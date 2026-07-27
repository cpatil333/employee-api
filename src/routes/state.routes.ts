import { Router } from "express";
import { fetchStates } from "../controllers/state.controller.js";

const router = Router();

router.get("/:countryId", fetchStates);

export default router;
