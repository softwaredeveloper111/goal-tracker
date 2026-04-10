import axios from "../../../axios.js";




export const registerAPI = async (userData) => {
  try {

    const response = await axios.post("/api/auth/register", userData)
    console.log("Registration successful:", response.data);
    return response.data
    
  } catch (error) {
    console.error("Registration failed:", error);
    throw error;
  }
}



export const loginAPI = async (userData) => {
  try {
    const response = await axios.post("/api/auth/login", userData);
    console.log("Login successful:", response.data);
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
} 





export const getMeAPI = async () => {
  try {
    const response = await axios.get("/api/auth/me");
    console.log("User data retrieved:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to retrieve user data:", error);
    throw error;
  }
};





export const logoutAPI = async () => {
  try {
    const response = await axios.post("/api/auth/logout");  
    console.log("Logout successful:", response.data);
    return response.data;
  } catch (error) {
    console.error("Logout failed:", error);
    throw error;
  }
};