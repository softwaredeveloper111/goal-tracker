import userModel from "../models/user.model.js";
import AppError from "../utils/AppError.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import config from "../config/config.js"
import sendSuccess from "../utils/response.js"
import generateToken from "../utils/generateToken.js"
import redis from "../config/redis.js"
import uploadToImageKit from "../services/imageKit.service.js";




export const registerUserController = asyncHandler(async (req, res) => {
 
  const {username,email,password} = req.body
   
  const isUserAlreadyRegistered = await userModel.findOne({
    $or:[
      {username},
      {email}
    ]
  })

  if(isUserAlreadyRegistered){
    throw new AppError("user is already registered",400)
  }


  const createdUser = await userModel.create({
    username,
    email,
    password,
  })

  const token = generateToken(createdUser)

  res.cookie("JWT_TOKEN",token)

  sendSuccess(res,201,"user registered successfullly", createdUser)

})





export const  loginUserController = asyncHandler(async(req,res)=>{
  const {identifier,password} = req.body;
  const isUserRegistered = await userModel.findOne({
    $or:[
      {username:identifier},
      {email:identifier}
    ]
  }).select("+password")

  
  if(!isUserRegistered){
    throw new AppError("user not found",404)
  }

  const isPasswordMatched = await isUserRegistered.comparePassword(password)
 
  if(!isPasswordMatched){
    throw new AppError("wrong password",401);
  }

  const token = generateToken(isUserRegistered)
  
   res.cookie("JWT_TOKEN",token);

   sendSuccess(res,200,"user loggedin successfully", isUserRegistered)

})







export const getMecontroller = asyncHandler(async(req,res)=>{


  const userId = req.user.id;
  const user = await userModel.findById(userId); 
  if(!user)  {
     throw new AppError('user not found',404)
  }

  sendSuccess(res,200,"user data fetch successfully", user)

})







export const logoutController = asyncHandler(async(req,res)=>{

  const token = req.cookies?.JWT_TOKEN;

  if(token){
   await redis.set(token,Date.now().toString(),"EX",86400*2)
   res.clearCookie("JWT_TOKEN")
  }
  
  sendSuccess(res,200,"logout successfully",null)

})







export const updateProfileController = asyncHandler(async(req,res)=>{
  const userId = req.user.id;
  const avatarFile = req.file;
  if(!avatarFile){
    throw new AppError("avatar file is required",400)
  }

  const avatarUrl = await uploadToImageKit(avatarFile);
  // console.log(avatarUrl) 
 
  const user = await userModel.findOneAndUpdate({_id:userId}, {avatar:avatarUrl},{returnDocument:"after"})

  sendSuccess(res,200,"profile updated successfully",user)


})







