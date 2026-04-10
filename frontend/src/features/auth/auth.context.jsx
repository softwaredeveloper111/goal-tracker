import {createContext, useState} from "react"
export const AuthContextProvider = createContext()

const AuthContext = ({children}) => {

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);


  return (
    <AuthContextProvider.Provider value={{loading,setLoading,user,setUser,error,setError}}>
      {children}
    </AuthContextProvider.Provider>
  )
}

export default AuthContext