
import Approuter from "./Approuter"
import { useEffect } from "react"
import useAuth from "./features/auth/hooks/useAuth"


const App = () => {

  const {HandlerGetMeAPI} = useAuth()
  
  useEffect(()=>{
    HandlerGetMeAPI()
  },[])


  return (
    <div className="app">
      <Approuter />
    </div>
  )
}

export default App