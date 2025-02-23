import errorHandler from "../Error/errorHandler.js"
import interiorDesignerModel from "../models/InteriorDesignerModel.js";
const getAllInteriorDesigners = async (req, res, next) => {
    try {
        const data = await interiorDesignerModel.find({});
        return res.status(201).json({
            ok: true,
            data
        })
    } catch (error) {
        return next(errorHandler(500, "Could Not Get Interior designer!"));
    }
}

const getInteriorDesignerById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await interiorDesignerModel.findOne({ _id: id });
        return res.status(201).json({
            ok: true,
            data
        })
    } catch (error) {
        return next(errorHandler(500, "Could Not Get Designer!"));
    }
}

const editInteriorDesignerById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { designer } = req.body;
        const data = await interiorDesignerModel.findByIdAndUpdate(id, designer, {
            new: true
        })
        return res.status(201).json({
            ok: true,
            data
        })
    } catch (error) {
        return next(errorHandler(500, "Cannot Update Designer"))
    }
}

const deleteInteriorDesigner = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await interiorDesignerModel.findByIdAndDelete(id)
        return res.status(201).json({
            ok: true,
            data
        })
    } catch (error) {
        return next(errorHandler(500, "Cannot Delete Interior Designer"))
    }
}

export { getAllInteriorDesigners, getInteriorDesignerById, editInteriorDesignerById, deleteInteriorDesigner }