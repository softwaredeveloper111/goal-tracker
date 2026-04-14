
import checkinModel from "../models/checkin.model.js";
import AppError from "../utils/AppError.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import config from "../config/config.js"
import sendSuccess from "../utils/response.js"
import goalModel from "../models/goal.model.js";




export const toggleCheckinController = asyncHandler(async (req, res) => {


  const userId = req.user.id;
  const { goalId, date} = req.body;

  const goal = await goalModel.findOne({userId, _id:goalId});
 
  if (!goal) throw new AppError('Goal not found', 404);
  if (goal.status === "Completed") throw new AppError('Goal is locked — already completed', 400);

  const goalCreatedDate = new Date(goal.createdAt).toISOString().split("T")[0];

  if(date < goalCreatedDate){
    throw new AppError("Check-in date cannot be before the goal creation date", 400);
  }


  const isRecordAlreadyExists = await checkinModel.findOne({ userId, goalId, date });

  if(isRecordAlreadyExists){
    await checkinModel.findByIdAndDelete(isRecordAlreadyExists._id);
    return sendSuccess(res, 200,  "Check-in removed successfully", null);
  }
  const newCheckin = await checkinModel.create({ userId, goalId, date });
  return sendSuccess(res, 200,  "Check-in added successfully", newCheckin);

})






export const CheckinsByGoalController = asyncHandler(async (req, res) => {

  const userId = req.user.id;
  const { id } = req.params;
  const checkins = await checkinModel.find({ userId, goalId:id });
  return sendSuccess(res, 200, "Check-ins retrieved successfully", checkins);
})








