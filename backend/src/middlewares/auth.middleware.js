import jwt from "jsonwebtoken";
import config from "../config/config.js"
import AppError from "../utils/AppError.js";
import redis from "../config/redis.js"


async function userIdentifier(req,res,next){
  const token = req.cookies?.JWT_TOKEN;   
  
  if(token){

    const isBlackListToken =await redis.get(token);
    
    if(isBlackListToken ){

      throw new AppError("token is alreday blacklisted",401)
    }
    
    try {
      
      const decoded = jwt.verify(token,config.JWT_SECRET_KEY)
      req.user = decoded
      next()

    } catch (error) {
      throw new AppError("invalid token",401)
      
    }

   }
   else{
     throw new AppError("token not found",401)
   }
  
  
}


export default userIdentifier