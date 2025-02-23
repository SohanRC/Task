import { Router } from "express";
import { editCompanyById, getAllCompanies, getCompanyById } from "../controllers/CompanyController.js";
const router = Router();

router.get("/getAllCompanies", getAllCompanies)
router.get("/getCompany/:id", getCompanyById)
router.patch('/editCompany/:id', editCompanyById)


export default router