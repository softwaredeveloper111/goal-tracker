import mongoose from "mongoose";




const goalSchema = new mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:[true,"User ID is required"]
  },

  title:{
    type:String,
    required:[true,"Title is required"],
    trim:true,
    maxlength:[100,"Title cannot be more than 100 characters"]
  }
  ,

  description:{
    type:String,
    trim:true,
    maxlength:[500,"Description cannot be more than 500 characters"]
  },

  startDate:{
    type:Date,
    required:[true,"Start date is required"]
  },


  targetDate:{
    type:Date,
    required:[true,"Target date is required"]
  },

  status:{
    type:String,
    enum:["Not Started","In Progress","Completed"],
    default:"Not Started"
  }


},{timestamps:true})





const goalModel = mongoose.model("Goal",goalSchema);


export default goalModel;