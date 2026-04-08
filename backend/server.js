import "dotenv/config"
import config from "./src/config/config.js"
import app from "./src/app.js"
import connectToDB from "./src/config/db.connection.js";
import redis from "./src/config/redis.js"






const PORT = config.PORT;
connectToDB()













app.listen(PORT,()=>{
  console.log(`server is running at port ${PORT}✅`)
})