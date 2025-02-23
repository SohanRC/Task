import mongoose from "mongoose"
import { config} from "dotenv"
config();


const DbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
    } catch (error) {
        console.log(error)
        throw error
    }
}

export default DbConnect