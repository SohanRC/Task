import { Router } from "express";
import { getAllCraftsMen } from "../controllers/CraftsMenController.js";
const router = Router();

router.get("/getAllCraftsMen", getAllCraftsMen)

export default router