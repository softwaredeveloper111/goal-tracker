import goalModel from "../models/goal.model.js";
import AppError from "../utils/appError.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import config from "../config/config.js"
import sendSuccess from "../utils/response.js"
import checkinModel from "../models/checkin.model.js";





export const createGoalController = asyncHandler(async(req,res)=>{

  const userId = req.user.id;
  const {title,description,targetDate} = req.body;
  const createGoal = await goalModel.create({
    title,
    description,
    targetDate,
    userId
  })

  sendSuccess(res,201,"Goal created successfully",createGoal)

})






export const GetAllGoalsController = asyncHandler(async(req,res)=>{
  const userId = req.user.id
  const getGoals = await goalModel.find({userId});
 const goalsWithCheckedDays = await Promise.all(
  getGoals.map(async (goal) => {
    const checkedDays = await checkinModel.countDocuments({ goalId: goal._id });
    return { ...goal.toObject(), checkedDays };
  })
);           
  sendSuccess(res,200,"All goals fetch successfully",goalsWithCheckedDays)
})







export const getSingleGoalController = asyncHandler(async(req,res)=>{
  const userId = req.user.id;
  const goalId = req.params.id;
  
  const goal = await goalModel.findOne({userId,_id:goalId});
  if(!goal){
    throw new AppError("goal not found", 401)
  }

  const checkedDays = await checkinModel.countDocuments({ goalId: goal._id });
  const goalWithCheckedDays = { ...goal.toObject(), checkedDays };

  sendSuccess(res,200,"goal get successfully", goalWithCheckedDays)

})








export const deleteGoalController = asyncHandler(async(req,res)=>{
  const userId = req.user.id;
  const goalId = req.params.id;
  const goal =  await goalModel.findOneAndDelete({userId,_id:goalId})
  if(!goal){
    throw new AppError('goal not found',401)
  }
  sendSuccess(res,200,"goal deleted successfully",null)
})






export const updateGoalController = asyncHandler(async(req,res)=>{
  const userId = req.user.id;
  const goalId = req.params.id;
  // const {title,description,targetDate} = req.body;
  const goal = await goalModel.findOneAndUpdate({userId,_id:goalId}, req.body,{returnDocument:"after"})
  if(!goal){
    throw new AppError('goal not found', 401);
  }

  sendSuccess(res,200,"goal update successfully",goal)

})