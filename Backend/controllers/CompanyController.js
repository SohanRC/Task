import errorHandler from "../Error/errorHandler.js"
import companyModel from "../models/CompanyModel.js"
const getAllCompanies = async (req, res, next) => {
    try {
        const data = await companyModel.find({});
        return res.status(201).json({
            ok: true,
            data
        })
    } catch (error) {
        return next(errorHandler(500, "Could Not Get Companies!"));
    }
}

export { getAllCompanies }