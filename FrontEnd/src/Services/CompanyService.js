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

    async getCompanyById(id) {
        try {
            const response = await axios.get(`/company/getCompany/${id}`, { withCredentials: true })
            return response.data;
        } catch (error) {
            throw this.generateError(error)
        }
    }

    async editCompanyById(id, company) {
        try {
            const response = await axios.patch(`/company/editCompany/${id}`, { company }, { withCredentials: true })
            return response.data;
        } catch (error) {
            throw this.generateError(error)
        }
    }
}

const companyService = new CompanyService()
export default companyService