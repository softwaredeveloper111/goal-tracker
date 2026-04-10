import {Routes,Route} from "react-router-dom" 
import Auth from "./features/auth/pages/Auth"




const Approuter = () => {
  return (
    <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<h1>Home</h1>} />
    </Routes>
  )
}

export default Approuter