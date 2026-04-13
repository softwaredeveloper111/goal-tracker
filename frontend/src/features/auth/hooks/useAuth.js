import { useContext } from "react";
import {AuthContextProvider} from "../auth.context.jsx"
import {registerAPI,loginAPI,getMeAPI,logoutAPI , updateProfileAvatarAPI} from "../services/auth.api.js"




const useAuth = () => {

  
const {loading,setLoading, user, setUser, error, setError, isAuthChecked, setIsAuthChecked , logoutLoading,setLogoutLoading} = useContext(AuthContextProvider)
  


  const HandlerRegisterAPI = async(userData)=>{
  try {
    setLoading(true);
    setError(null);
    const response = await registerAPI(userData);
    setUser(response.data);
    setIsAuthChecked(true);
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
    setIsAuthChecked(true);
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
    setIsAuthChecked(true);
    return response
  } catch (error) {
    setError(error.response?.data?.message || "Failed to retrieve user data");
    return error.response.data
  }
  finally{
    setLoading(false);
    setIsAuthChecked(true)
  }
}



  const HandlerLogoutAPI = async()=>{
  try {
    setLogoutLoading(true);
    setError(null);
    const response = await logoutAPI();
    setUser(null);
    return response
  } catch (error) {
    setError(error.response?.data?.message || "Logout failed");
    return error.response.data
  }
  finally{
      setLogoutLoading(false);
  }
  }



  const HandlerUpdateProfileAvatarAPI  = async(avatar)=>{
     try {
       setLoading(true);
       setError(null);
       const response = await updateProfileAvatarAPI(avatar);
       setUser(response.data);
       return response
     } catch (error) {
      setError(error.response?.data?.message || "profile updated failed")
      return error.response.data
     }
     finally{
       setLoading(false)
     }
  }



  return {HandlerRegisterAPI, HandlerLoginAPI, HandlerGetMeAPI , HandlerLogoutAPI , HandlerUpdateProfileAvatarAPI ,  loading,user,error , isAuthChecked ,logoutLoading }
}

export default useAuth