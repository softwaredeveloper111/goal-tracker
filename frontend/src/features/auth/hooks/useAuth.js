import { useContext } from "react";
import {AuthContextProvider} from "../auth.context.jsx"
import {registerAPI,loginAPI,getMeAPI,logoutAPI} from "../services/auth.api.js"




const useAuth = () => {

  
const {loading,setLoading,user, setUser, error, setError} = useContext(AuthContextProvider)
  


  const HandlerRegisterAPI = async(userData)=>{
  try {
    setLoading(true);
    setError(null);
    const response = await registerAPI(userData);
    setUser(response.data);
    return response

  } catch (error) {
    setError(error.response?.data?.message || "Registration failed");
    return error.response.data
  }
  finally{
     setLoading(false);
  }
}


  const HandlerLoginAPI = async(userData)=>{
  try {
    setLoading(true);
    setError(null);
    const response = await loginAPI(userData);
    setUser(response.data);
    return response


  } catch (error) {
    setError(error.response?.data?.message || "Login failed");
    return error.response.data
  }
  finally{
     setLoading(false);
  }
}



  const HandlerGetMeAPI = async()=>{
  try {
    setLoading(true);
    setError(null);
    const response = await getMeAPI();
    setUser(response.data);
    return response.data
  } catch (error) {
    setError(error.response?.data?.message || "Failed to retrieve user data");
    return error.response.data
  }
  finally{
     setLoading(false);
  }
}



  const HandlerLogoutAPI = async()=>{
  try {
    setLoading(true);
    setError(null);
    const response = await logoutAPI();
    setUser(null);
    return response.data
  } catch (error) {
    setError(error.response?.data?.message || "Logout failed");
    return error.response.data
  }
  finally{
      setLoading(false);
  }
  }



  return {HandlerRegisterAPI, HandlerLoginAPI, HandlerGetMeAPI , HandlerLogoutAPI , loading,user,error}
}

export default useAuth