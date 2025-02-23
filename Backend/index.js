import express from "express"
import { config } from "dotenv"
config();
import cors from "cors"
import DbConnect from "./config/DbConnect.js";

const app = express();
const PORT = process.env.PORT || 3000


app.use(cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE"]
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server running at PORT number : ${PORT}`)

    DbConnect().then(() => {
        console.log("Database Connection Success !");
    }).catch(err => {
        console.log(err)
        console.log("Could not connect to Databse!");
    })
})
