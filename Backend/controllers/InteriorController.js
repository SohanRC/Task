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

export { getAllInteriorDesigners }