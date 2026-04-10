import mongoose from "mongoose";



const checkinSchema = new mongoose.Schema({
  goalId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Goal",
    required: [true, "Goal ID is required"]
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User ID is required"]
  },


  date:{
    type:String,  /** 2026-04-09  YY-MM-DD */
    required: [true, "Date is required"]
  }

})



checkinSchema.pre("save", function(){
  const checkin = this;
  const today = new Date().toISOString().split("T")[0];
  if(checkin.date > today){
      throw new Error("checkin date cannot be in the future");
    }
})


const checkinModel = mongoose.model("Checkin",checkinSchema);


export default checkinModel;