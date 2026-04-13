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






export const createGoalAPI = async(goalData)=>{
    try {
        const response = await axios.post('/api/goal', goalData);
        console.log('Goal created successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating goal:', error);
        throw error;
    }
}







export const getGoalByIdAPI = async(goalId)=>{
    try {
        const response = await axios.get(`/api/goal/${goalId}`);
        console.log('Goal retrieved successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching goal:', error);
        throw error;
    }
}







export const getAllCheckinsAPI = async(goalId)=>{

 try {
    const response = await axios.get(`/api/checkin/${goalId}`);
    console.log('Check-ins retrieved successfully:', response.data);
    return response.data;
 } catch (error) {
    console.error('Error fetching check-ins:', error);
    throw error;
 }
}







export const toggleCheckinAPI = async(checkinData)=>{
    try {
        const response = await axios.post('/api/checkin/toggle', checkinData);
        console.log('Check-in created successfully:', response.data);
        return response.data;
    }
        catch (error) {
        console.error('Error creating check-in:', error);
        throw error;
    }
}