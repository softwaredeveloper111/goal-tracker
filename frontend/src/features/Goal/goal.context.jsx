import {createContext,useState} from "react"
export const goalContextProvider = createContext()


const GoalContext = ({children}) => {

 
 const [goals, setGoals] = useState([]);
 const [singleGoal, setSingleGoal] = useState(null);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(null);
 const [isSingleGoalLoading, setIsSingleGoalLoading] = useState(true);
 const [checkins, setCheckins] = useState([]);


  return (
    <goalContextProvider.Provider value={{ goals, setGoals, loading, setLoading, error, setError , singleGoal , setSingleGoal, isSingleGoalLoading, setIsSingleGoalLoading ,checkins , setCheckins }}>
      {children}
    </goalContextProvider.Provider>
  )
}

export default GoalContext