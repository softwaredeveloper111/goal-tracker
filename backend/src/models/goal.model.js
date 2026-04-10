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
    maxlength:[500,"Description cannot be more than 500 characters"],
    required:[true,"Description is required"],
  },
  
  /** store date+time at ISO format - UTC*/
  targetDate:{
    type:Date,
    required:[true,"Target date is required"]
  },


  status:{
    type:String,
    enum:["In Progress","Completed"],
    default:"In Progress"
  },

  completedAt:{
    type:Date,
  }


},{timestamps:true})




goalSchema.pre("save", function(){
   const goal = this;
    if(goal.targetDate <= new Date()){
      throw new Error("Target date cannot be in the past");
    }
})






const goalModel = mongoose.model("Goal",goalSchema);


export default goalModel;