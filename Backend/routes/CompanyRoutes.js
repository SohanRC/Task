import { Router } from "express";
import { getAllCompanies } from "../controllers/CompanyController.js";
const router = Router();

router.get("/getAllCompanies", getAllCompanies)


export default router