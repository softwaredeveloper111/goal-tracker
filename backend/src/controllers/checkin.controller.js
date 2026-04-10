
import checkinModel from "../models/checkin.model.js";
import AppError from "../utils/appError.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import config from "../config/config.js"
import sendSuccess from "../utils/response.js"





export const toggleCheckinController = asyncHandler(async (req, res) => {


  const userId = req.user.id;
  const { goalId, date} = req.body;
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
  const { goalId } = req.params;
  const checkins = await checkinModel.find({ userId, goalId });
  return sendSuccess(res, 200, "Check-ins retrieved successfully", checkins);
})








