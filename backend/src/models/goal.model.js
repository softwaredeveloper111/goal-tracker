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
  
  /** store date in string format like YYYY-MM-DD*/
  targetDate:{
    type:String,
    required:[true,"Target date is required"],
    match: [/^\d{4}-\d{2}-\d{2}$/, "Target date must be in YYYY-MM-DD format"]
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



/** validation middleware that date cannot be in the past  */
goalSchema.pre("save", function(){

  const goal = this;
 
   if (!goal.isNew) return ;


   const date = new Date(goal.targetDate);

  if (isNaN(date.getTime())) {
    throw new Error("Target date is not a valid date");
  }

     const today = new Date().toISOString().split("T")[0];
    if(goal.targetDate < today){
      throw new Error("Target date cannot be in the past");
    }

  
})






const goalModel = mongoose.model("Goal",goalSchema);


export default goalModel;