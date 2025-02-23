import mongoose from "mongoose";

const companySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    show: {
        type: Boolean,
        default: true,
        required: true
    }
})

const companyModel = mongoose.model("company", companySchema);

const insertCompanyData = async () => {
    try {
        const data = [
            {
                name: "Jio Cinema",
                startDate: "12/04/1992",
                owner: "Mr. Rohan Kumar",
                show: true
            },
            {
                name: "TCS",
                startDate: "15/03/1980",
                owner: "Mr. Sohan Roychowdhury",
                show: true
            },
            {
                name: "Accenture",
                startDate: "10/01/2001",
                owner: "Mr. Rakesh Roshan",
                show: true
            },
        ]

        await companyModel.insertMany(data)
        console.log("Company Data Inserted !!");
    } catch (error) {
        console.log(error)
        console.log("Could not insert Company Data!!");
    }
}


export default companyModel

export { insertCompanyData }