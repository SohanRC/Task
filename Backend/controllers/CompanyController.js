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

const getCompanyById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await companyModel.findOne({ _id: id });
        return res.status(201).json({
            ok: true,
            data
        })
    } catch (error) {
        return next(errorHandler(500, "Could Not Get Companies!"));
    }
}

const editCompanyById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { company } = req.body;
        const data = await companyModel.findByIdAndUpdate(id, company, {
            new: true
        })
        return res.status(201).json({
            ok: true,
            data
        })
    } catch (error) {
        return next(errorHandler(500, "Cannot Update Company"))
    }
}

export { getAllCompanies, getCompanyById, editCompanyById }