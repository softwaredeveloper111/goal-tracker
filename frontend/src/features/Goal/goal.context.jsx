import {createContext,useState} from "react"
export const goalContextProvider = createContext()


const GoalContext = ({children}) => {

 
 const [goals, setGoals] = useState([]);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(null);


  return (
    <goalContextProvider.Provider value={{goals, setGoals, loading, setLoading, error, setError}}>
      {children}
    </goalContextProvider.Provider>
  )
}

export default GoalContext