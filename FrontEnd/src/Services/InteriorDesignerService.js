import axios from "axios"

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL

class InteriorDesignerService {
    generateError(error) {
        const { response: { data: { status, message } } } = error;
        const customErr = new Error();
        customErr.status = status;
        customErr.message = message;
        return customErr;
    }

    async getAllInteriorDesigner() {
        try {
            const response = await axios.get('/interior/getAllInteriorDesigners', { withCredentials: true })
            return response.data;
        } catch (error) {
            throw this.generateError(error)
        }
    }

    async getInteriorDesignerById(id) {
        try {
            const response = await axios.get(`/interior/getInteriorDesigner/${id}`, { withCredentials: true })
            return response.data;
        } catch (error) {
            throw this.generateError(error)
        }
    }

    async editInteriorDesignerById(id, designer) {
        try {
            const response = await axios.patch(`/interior/editInteriorDesigner/${id}`, { designer }, { withCredentials: true })
            return response.data;
        } catch (error) {
            throw this.generateError(error)
        }
    }
}

const interiorDesignerService = new InteriorDesignerService()
export default interiorDesignerService