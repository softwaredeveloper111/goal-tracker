
import Fullpageloader from "./Fullpageloader"
import {Navigate} from "react-router-dom"
import useAuth from "../auth/hooks/useAuth"

const PublicRoute = ({children}) => {
 
  const {user, isAuthChecked} = useAuth()
  
  if(!isAuthChecked){
    return <Fullpageloader/>
  }

  if(user)return <Navigate to="/" replace/>; 


  return children
}

export default PublicRoute