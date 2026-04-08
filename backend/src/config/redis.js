import Redis from "ioredis";
import config from "./config.js";



const redis = new Redis({
   host:config.REDIS_HOST,
   port:Number(config.REDIS_PORT),
   password:config.REDIS_PASSWORD
})



redis.on("connect" , ()=>{
  console.log("connected with redis db✅")
})


redis.on("error",(err)=>{
  console.log('connecton problem with redis ✅',err.message);
  
})



export default redis