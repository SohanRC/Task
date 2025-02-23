import { Router } from "express";
import { deleteInteriorDesigner, editInteriorDesignerById, getAllInteriorDesigners, getInteriorDesignerById } from "../controllers/InteriorController.js";
const router = Router();

router.get('/getAllInteriorDesigners', getAllInteriorDesigners)
router.get("/getInteriorDesigner/:id", getInteriorDesignerById)
router.patch('/editInteriorDesigner/:id', editInteriorDesignerById)
router.delete('/delete/:id', deleteInteriorDesigner)

export default router