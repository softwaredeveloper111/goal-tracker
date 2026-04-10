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
    type:String,  /** 2026-04-09 */
    required: [true, "Date is required"]
  }

})



const checkinModel = mongoose.model("Checkin",checkinSchema);


export default checkinModel;