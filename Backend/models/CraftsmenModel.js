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
                dob: "1992/04/12",
                show: true
            },
            {
                name: "Rohan Jumar",
                dob: "1980/03/15",
                show: true
            },
            {
                name: "Rohini Mondal",
                dob: "2001/01/10",
                show: true
            },
            {
                name: "Rishi Mukherjee",
                dob: "2004/01/21",
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