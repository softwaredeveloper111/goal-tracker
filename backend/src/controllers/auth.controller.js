import userModel from "../models/user.model.js";
import AppError from "../utils/appError.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import config from "../config/config.js"
import jwt from "jsonwebtoken"
import sendSuccess from "../utils/response.js"





export const registerUserController = asyncHandler(async (req, res) => {
 
  const {username,email,password} = req.body
   
  const isUserAlreadyRegistered = await userModel.findOne({
    $or:[
      {username},
      {email}
    ]
  })

  if(isUserAlreadyRegistered){
    throw new AppError("user is already register",400)
  }


  const createdUser = await userModel.create({
    username,
    email,
    password,
  })

  const token = jwt.sign({id:createdUser._id,username:createdUser.username} , config.JWT_SECRET_KEY , {expiresIn:"7d"})

  res.cookie("JWT_TOKEN",token)

  sendSuccess(res,201,"user registered successfullly", createdUser)

})





export const  loginUserController = asyncHandler(async(req,res)=>{
  const {identifier,password} = req.body;
  const isUserRegistered = await userModel.findOne({
    $or:[
      {usernaem:identifier},
      {email:"identifier"},
    ]
  }).select("+password")

  
  if(!isUserRegistered){
    throw new AppError("user not found",404)
  }

  const isPasswordMatched = await isUserRegistered.comparePassword(password)
 
  if(!isPasswordMatched){
    throw new AppError("wrong password",401);
  }

    const token = jwt.sign({id:createdUser._id,username:createdUser.username} , config.JWT_SECRET_KEY , {expiresIn:"7d"})
   res.cookie("JWT_TOKEN",token);

   sendSuccess(res,200,"user loggedin successfully", isUserRegistered)

})






