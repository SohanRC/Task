import mongoose from "mongoose";

const interiorDesignerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    show: {
        type: Boolean,
        default: true,
        required: true
    }
})

const interiorDesignerModel = mongoose.model("interiorDesigner", interiorDesignerSchema);

const insertINteriorData = async () => {
    try {
        const data = [
            {
                name: "Sohan Roy",
                dob: "1992/04/12",
                address: "Kolkata",
                show: true
            },
            {
                name: "Rohan Jumar",
                dob: "1980/03/15",
                address: "America",
                show: true
            },
            {
                name: "Rohini Mondal",
                dob: "2001/01/10",
                address: "Spain",
                show: true
            },
            {
                name: "Rishi Mukherjee",
                dob: "2004/01/21",
                address: "Mumbai",
                show: true
            },
        ]

        await interiorDesignerModel.insertMany(data)
        console.log("Interior Designer Data Inserted !!");
    } catch (error) {
        console.log(error)
        console.log("Could not insert Interior Designer Data!!");
    }
}

// insertData();

export default interiorDesignerModel

export { insertINteriorData }