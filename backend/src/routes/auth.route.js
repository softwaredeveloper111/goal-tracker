import {Router} from "express"
import 
 { registervalidation , 
  loginvalidation
 } 
from "../validator/auth.validation.js"
import 
  { 
    registerUserController , 
    loginUserController
  } 
    from "../controllers/auth.controller.js";







    

const authRouter = Router();




/**
 * @route  POST /api/auth/register
 * @description   Register a new user
 * @access   Public
 * @body  { username: String, email: String, password: String }
 */

authRouter.post("/register", registervalidation , registerUserController)




/**
 * @route   POST  /api/auth/login
 * @description    login a registered user
 * @access    Public
 * @body     {identifier:String,password:String}
 */
authRouter.post("/login", loginvalidation ,  loginUserController) 













export default authRouter;