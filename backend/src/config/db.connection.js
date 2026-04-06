import mongoose from "mongoose";
import config from "../config/config.js";


async function connectToDB(){
  try {

    await mongoose.connect(config.MONGO_URI)
    console.log("connected to mondoDB database ✅")
    
  } catch (error) {
    console.log(`connection failed with mongoDB database❌`,error.message)
  }
}

export default connectToDB