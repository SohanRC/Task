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

export { getAllCraftsMen }