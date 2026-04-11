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
    required: [true, "Date is required"],
    match: [/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"]
  }

})



checkinSchema.pre("save", function(){
  const checkin = this;

    const date = new Date(checkin.date);
  if (isNaN(date.getTime())) {
    return next(new Error("Date is not a valid date"));
  }


  const today = new Date().toISOString().split("T")[0];
  if(checkin.date > today){
      throw new Error("checkin date cannot be in the future");
    }
})


const checkinModel = mongoose.model("Checkin",checkinSchema);


export default checkinModel;