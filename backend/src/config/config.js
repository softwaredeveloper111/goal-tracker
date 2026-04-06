if(!process.env.NODE_ENV){
  throw new Error("NODE_ENV is not defined in enviroment varibles"); 
}


if(!process.env.PORT){
  throw new Error("PORT is not defined in enviroment variables");
  
}


if(!process.env.MONGO_URI){
  throw new Error("MONGO_URI is not defined in enviroment variables");
  
}


const config  = {
  NODE_ENV:process.env.NODE_ENV,
  PORT:process.env.PORT,
  MONGO_URI:process.env.MONGO_URI
}



export default config;