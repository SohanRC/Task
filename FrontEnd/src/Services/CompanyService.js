import axios from "axios"

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL

class CompanyService {

    generateError(error) {
        const { response: { data: { status, message } } } = error;
        const customErr = new Error();
        customErr.status = status;
        customErr.message = message;
        return customErr;
    }

    async getAllCompanies() {
        try {
            const response = await axios.get('/company/getAllCompanies', { withCredentials: true })
            return response.data;
        } catch (error) {
            throw this.generateError(error)
        }
    }
}

const companyService = new CompanyService()
export default companyService