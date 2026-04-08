import {Router} from "express"
import 
 { registervalidation , 
  loginvalidation
 } 
from "../validator/auth.validation.js"
import 
  { 
    registerUserController , 
    loginUserController,
    getMecontroller,
    logoutController
  } 
    from "../controllers/auth.controller.js";

import userIdentifier from "../middlewares/auth.middleware.js";





    

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





/**
 * @route    GET  /api/auth/me
 * @description    fetch user profile
 * @access    Protected
 * 
 */
authRouter.get("/me" , userIdentifier , getMecontroller)





/**
 * @route    POST   /api/auth/logout
 * @description   logout user
 * @access  Public
 */
authRouter.post("/logout", logoutController  )










export default authRouter;