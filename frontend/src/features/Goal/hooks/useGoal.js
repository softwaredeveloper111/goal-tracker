import { getGoalsAPI , createGoalAPI } from "../services/goal.api.js";
import { useContext } from "react";
import { goalContextProvider } from "../goal.context.jsx";



const useGoal = () => {

 
  const { goals, setGoals, loading, setLoading, error, setError } = useContext(goalContextProvider);


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





  return { HandlerGetGoalsAPI, goals, loading, error , HandleCreateGoalAPI  };
}

export default useGoal
