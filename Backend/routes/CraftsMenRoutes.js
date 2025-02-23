import { Router } from "express";
import { getAllCraftsMen, getCraftsMenById, editCraftsMenById, deleteCraftsMen } from "../controllers/CraftsMenController.js";
const router = Router();

router.get("/getAllCraftsMen", getAllCraftsMen)
router.get("/getCraftsMen/:id", getCraftsMenById)
router.patch('/editCraftsMen/:id', editCraftsMenById)
router.delete('/delete/:id', deleteCraftsMen)

export default router