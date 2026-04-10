
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'remixicon/fonts/remixicon.css'
import {BrowserRouter} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import AuthContext from "./features/auth/auth.context.jsx"

createRoot(document.getElementById('root')).render(
 

   <AuthContext>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
   </AuthContext>
)
