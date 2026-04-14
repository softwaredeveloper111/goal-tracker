import {
  getGoalsAPI,
  createGoalAPI,
  getGoalByIdAPI,
  getAllCheckinsAPI,
  toggleCheckinAPI,
  deleteGoalAPI,
  markAsCompleteAPI,
  updateGoalAPI,
} from "../services/goal.api.js";
import { useContext } from "react";
import { goalContextProvider } from "../goal.context.jsx";







const useGoal = () => {


  const {
    goals,
    setGoals,
    loading,
    setLoading,
    error,
    setError,
    singleGoal,
    setSingleGoal,
    isSingleGoalLoading,
    setIsSingleGoalLoading,
    checkins,
    setCheckins,
    goalStatus,
    setGoalStatus,
    completedDate,
    setCompletedDate,
  } = useContext(goalContextProvider);








  const HandlerGetGoalsAPI = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getGoalsAPI();
      setGoals(response.data);
      return response;
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "An error occurred while fetching goals.",
      );
      return error.response.data;
    } finally {
      setLoading(false);
    }
  };










  const HandleCreateGoalAPI = async (goalData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await createGoalAPI(goalData);
      setGoals((prevGoals) => [...prevGoals, response.data]);
      return response;
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "An error occurred while creating the goal.",
      );
      return error.response.data;
    } finally {
      setLoading(false);
    }
  };










  const HandleGetGoalByIdAPI = async (goalId) => {
    try {
      setIsSingleGoalLoading(true);
      setError(null);
      const response = await getGoalByIdAPI(goalId);
      setSingleGoal(response.data);
      setGoalStatus(response.data?.status);
setCompletedDate(response.data?.completedAt 
  ? new Date(response.data.completedAt).toISOString().split("T")[0] 
  : null);
      return response;
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "An error occurred while fetching the goal.",
      );
      return error.response.data;
    } finally {
      setIsSingleGoalLoading(false);
    }
  };









  const HandleToggleCheckinAPI = async (checkinData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await toggleCheckinAPI(checkinData);
      return response;
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "An error occurred while toggling the check-in.",
      );
      return error.response.data;
    } finally {
      setLoading(false);
    }
  };







  const HandleGetAllCheckinsAPI = async (goalId) => {
    try {
      setLoading(true);
      setError(null);
      const response = await getAllCheckinsAPI(goalId);
      setCheckins(response.data);
      return response;
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "An error occurred while fetching check-ins.",
      );
      return error.response.data;
    } finally {
      setLoading(false);
    }
  };








  const HandleDeleteGoalAPI = async (goalId) => {
    /** first remove the goal from the ui */
    const prevGoals = goals; /** backup for revert */
    setGoals((prev) => prev.filter((goal) => goal._id !== goalId));

    try {
      setError(null);
      const response = await deleteGoalAPI(goalId);
      return response;
    } catch (error) {
      /** fail hua toh revert karo */
      setGoals(prevGoals);
      setError(
        error.response?.data?.message ||
          "An error occurred while delete a goal.",
      );
      return error.response.data;
    }
  };









  const HandleMarkAsCompleteAPI = async (goalId) => {
    let prevStatus = goalStatus;
    let prevCompletedDate = completedDate;

    const today = new Date().toISOString().split("T")[0];
    setGoalStatus("Completed");
    setCompletedDate(today);

    try {
      setError(null);

      const response = await markAsCompleteAPI(goalId);
      setSingleGoal(response.data);
    setGoalStatus(response.data?.status);  
     const rawDate = response.data?.completedAt;
     const normalized = rawDate ? new Date(rawDate).toISOString().split("T")[0] : null;      
    setCompletedDate(normalized); 
      return response;
    } catch (error) {
      setGoalStatus(prevStatus);
      setCompletedDate(prevCompletedDate);
      setError(
        error.response?.data?.message ||
          "An error occurred while delete a goal.",
      );
      return error.response.data;
    }
  
  };






  const HandlerUpdateGoalAPI = async (goalId,goalData)=>{
    try {
      setLoading(true);
      setError(null);
      const response = await updateGoalAPI(goalId,goalData);
      setGoals(prev=>prev.map(goal=>goal._id===goalId?response.data:goal));
      setSingleGoal(response.data);
      return response

    } catch (error) {
       setError(
        error.response?.data?.message ||
          "An error occurred while update a goal.",
      );
      return error.response.data;
    }
    finally{
      setLoading(false)
    }
  }




  return {
    HandlerGetGoalsAPI,
    HandleCreateGoalAPI,
    HandleGetGoalByIdAPI,
    goals,
    loading,
    error,
    singleGoal,
    isSingleGoalLoading,
    HandleToggleCheckinAPI,
    HandleGetAllCheckinsAPI,
    checkins,
    setCheckins,
    HandleDeleteGoalAPI,
    HandleMarkAsCompleteAPI,
    goalStatus,
    completedDate,
    HandlerUpdateGoalAPI,
  };
};

export default useGoal;
