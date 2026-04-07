if(!process.env.NODE_ENV){
  throw new Error("NODE_ENV is not defined in enviroment varibles"); 
}


if(!process.env.PORT){
  throw new Error("PORT is not defined in enviroment variables");
  
}


if(!process.env.MONGO_URI){
  throw new Error("MONGO_URI is not defined in enviroment variables");
  
}



if(!process.env.BCRYPT_SALT_ROUND){
  throw new Error("BCRYPT_SALT_ROUND is not defined in enviroment variables");
  
}


if(!process.env.FRONTEND_URL){
  throw new Error("FRONTEND_URL is not defined in enviroment variables");
}




if(!process.env.JWT_SECRET_KEY){
  throw new Error("JWT_SECRET_KEY is not defined in enviroment variables")
}





const config  = {
  NODE_ENV:process.env.NODE_ENV,
  PORT:process.env.PORT,
  MONGO_URI:process.env.MONGO_URI,
  BCRYPT_SALT_ROUND:process.env.BCRYPT_SALT_ROUND,
  FRONTEND_URL:process.env.FRONTEND_URL,
  JWT_SECRET_KEY:process.env.JWT_SECRET_KEY
}



export default config;