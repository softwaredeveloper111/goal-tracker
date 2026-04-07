import config from "../config/config.js"


const errorHandler = (err,req,res,next)=>{
  const statusCode = err.status || 500;
  const response = {
    success:false,
    message:err.message || "Something went wrong",
    stack:config.NODE_ENV=== "development" && err.stack
  }
  
  res.status(statusCode).json(response)
}



export default errorHandler