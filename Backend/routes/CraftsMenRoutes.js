import { Router } from "express";
import { getAllCraftsMen, getCraftsMenById, editCraftsMenById } from "../controllers/CraftsMenController.js";
const router = Router();

router.get("/getAllCraftsMen", getAllCraftsMen)
router.get("/getCraftsMen/:id", getCraftsMenById)
router.patch('/editCraftsMen/:id', editCraftsMenById)

export default router