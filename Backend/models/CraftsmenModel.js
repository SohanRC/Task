import mongoose from "mongoose";

const craftsmenSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    show: {
        type: Boolean,
        default: true,
        required: true
    }
})

const craftsmenModel = mongoose.model("craftsmen", craftsmenSchema);

const insertCraftsmenData = async () => {
    try {
        const data = [
            {
                name: "Sohan Roy",
                dob: "12/04/1992",
                show: true
            },
            {
                name: "Rohan Jumar",
                dob: "15/03/1980",
                show: true
            },
            {
                name: "Rohini Mondal",
                dob: "10/01/2001",
                show: true
            },
            {
                name: "Rishi Mukherjee",
                dob: "21/01/2004",
                show: true
            },
        ]

        await craftsmenModel.insertMany(data)
        console.log("Craftsmen Data Inserted !!");
    } catch (error) {
        console.log(error)
        console.log("Could not insert Craftsmen Data!!");
    }
}


export default craftsmenModel

export { insertCraftsmenData }