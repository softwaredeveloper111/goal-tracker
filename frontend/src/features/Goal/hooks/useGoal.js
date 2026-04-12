import { getGoalsAPI , createGoalAPI ,getGoalByIdAPI , getAllCheckinsAPI , toggleCheckinAPI } from "../services/goal.api.js";
import { useContext } from "react";
import { goalContextProvider } from "../goal.context.jsx";



const useGoal = () => {

 
  const { goals, setGoals, loading, setLoading, error, setError , singleGoal , setSingleGoal , isSingleGoalLoading , setIsSingleGoalLoading , checkins , setCheckins } = useContext(goalContextProvider);


  const HandlerGetGoalsAPI = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getGoalsAPI();
      setGoals(response.data);
      return response

    } catch (error) {
       setError(error.response?.data?.message || "An error occurred while fetching goals.");
       return error.response.data
    } 
    finally{
      setLoading(false);
    }
  }



  const HandleCreateGoalAPI = async (goalData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await createGoalAPI(goalData);
      setGoals(prevGoals => [...prevGoals, response.data]);
      return response
    } catch (error) {
       setError(error.response?.data?.message || "An error occurred while creating the goal.");
       return error.response.data
    }
     finally{
      setLoading(false)
     }

  }
  


  const HandleGetGoalByIdAPI = async (goalId) => {
    try {
     setIsSingleGoalLoading(true);
      setError(null);
      const response = await getGoalByIdAPI(goalId);
      setSingleGoal(response.data);
      return response
    } catch (error) {
       setError(error.response?.data?.message || "An error occurred while fetching the goal.");
       return error.response.data
    }
    finally{
      setIsSingleGoalLoading(false)
    }
  }
  


   const HandleToggleCheckinAPI = async (checkinData) => {
    try {
      setLoading(true);
       setError(null);
      const response = await toggleCheckinAPI(checkinData);
      return response
    } catch (error) {
       setError(error.response?.data?.message || "An error occurred while toggling the check-in.");
       return error.response.data
    }
      finally{
      setLoading(false)
     }
  }




  const HandleGetAllCheckinsAPI = async (goalId) => {
    try {
      setLoading(true);
      setError(null);
      const response = await getAllCheckinsAPI(goalId);
      setCheckins(response.data)
      return response
    } catch (error) {
       setError(error.response?.data?.message || "An error occurred while fetching check-ins.");
       return error.response.data
    }finally{
      setLoading(false)
     }
  };






  return { HandlerGetGoalsAPI, HandleCreateGoalAPI, HandleGetGoalByIdAPI ,  goals, loading, error   , singleGoal , isSingleGoalLoading ,HandleToggleCheckinAPI , HandleGetAllCheckinsAPI , checkins , setCheckins };
}

export default useGoal
