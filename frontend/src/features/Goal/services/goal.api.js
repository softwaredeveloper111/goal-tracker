import axios from "../../../axios.js";






export const getGoalsAPI = async()=>{
    try {
        const response = await axios.get('/api/goal');
        console.log('Goals retrieved successfully:', response.data);
        return response.data;
    }    catch (error) {
        console.error('Error fetching goals:', error);
        throw error;
    }
}



