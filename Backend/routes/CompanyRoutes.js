import { Router } from "express";
import { deleteCompany, editCompanyById, getAllCompanies, getCompanyById } from "../controllers/CompanyController.js";
const router = Router();

router.get("/getAllCompanies", getAllCompanies)
router.get("/getCompany/:id", getCompanyById)
router.patch('/editCompany/:id', editCompanyById)
router.delete('/delete/:id', deleteCompany)


export default router