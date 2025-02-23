import { Router } from "express";
import { getAllInteriorDesigners } from "../controllers/InteriorController.js";
const router = Router();

router.get('/getAllInteriorDesigners', getAllInteriorDesigners)

export default router