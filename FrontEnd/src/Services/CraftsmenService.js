import axios from "axios"

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL

class CraftsmenService {
    generateError(error) {
        const { response: { data: { status, message } } } = error;
        const customErr = new Error();
        customErr.status = status;
        customErr.message = message;
        return customErr;
    }

    async getAllCraftsMen() {
        try {
            const response = await axios.get('/craftsmen/getAllCraftsMen', { withCredentials: true })
            return response.data;
        } catch (error) {
            throw this.generateError(error)
        }
    }
}

const craftsmenService = new CraftsmenService()
export default craftsmenService