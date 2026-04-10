import {Routes,Route} from "react-router-dom" 
import Auth from "./features/auth/pages/Auth"
import ProtectedRoute from "./features/shared/ProtectedRoute"
import PublicRoute from "./features/shared/PublicRoute"



const Approuter = () => {
  return (
    <Routes>
        <Route path="/auth" element={
          <PublicRoute>
            <Auth/>
          </PublicRoute>
        } />


        <Route path="/" element={
          <ProtectedRoute>
            <h1>Home</h1>
          </ProtectedRoute>
        } />
    </Routes>
  )
}

export default Approuter