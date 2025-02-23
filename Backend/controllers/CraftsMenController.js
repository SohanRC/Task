import errorHandler from "../Error/errorHandler.js"
import craftsmenModel from "../models/CraftsmenModel.js";

const getAllCraftsMen = async (req, res, next) => {
    try {
        console.log("Request Recived")
        const data = await craftsmenModel.find({});
        console.log(data)
        return res.status(201).json({
            ok: true,
            data
        })
    } catch (error) {
        return next(errorHandler(500, "Could Not Get CraftsMen!"));
    }
}

const getCraftsMenById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await craftsmenModel.findOne({ _id: id });
        return res.status(201).json({
            ok: true,
            data
        })
    } catch (error) {
        return next(errorHandler(500, "Could Not Get CraftsMen"))
    }
}

const editCraftsMenById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { craftsmen } = req.body;
        const data = await craftsmenModel.findByIdAndUpdate(id, craftsmen, {
            new: true
        })
        return res.status(201).json({
            ok: true,
            data
        })
    } catch (error) {
        return next(errorHandler(500, "Cannot Update CraftsMen"))
    }
}

export { getAllCraftsMen, getCraftsMenById, editCraftsMenById }