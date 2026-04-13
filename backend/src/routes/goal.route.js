import {Router} from "express"
import userIdentifier from "../middlewares/auth.middleware.js"
import 
{
  createGoalController,
  GetAllGoalsController,
  getSingleGoalController,
  deleteGoalController,
  updateGoalController,
  markAsCompletedController
}
from "../controllers/goal.controller.js"
import {createGoalvalidation,goalIdValidation , updateGoalValidation} from "../validator/goal.validator.js"




const goalRouter = Router();






/**
 * @route      /api/goal
 * @description    user can create a goal
 * @access    Protected
 * @body      {title:String,description:String,startDate:date,targetate:date}
 */

goalRouter.post("/", createGoalvalidation , userIdentifier , createGoalController)





/**
 * @route      /api/goal
 * @description  user can get all their goals
 * @accesss Protected
 * 
 */


goalRouter.get("/", userIdentifier , GetAllGoalsController )








/**
 * @route     /api/goal/id
 * @description      user can get their single goal
 * @access       Protected
 */

goalRouter.get("/:id" , goalIdValidation , userIdentifier , getSingleGoalController)





/**
 * @route     /api/goal/:id
 * @description  delete a  goal
 * @access      Protected
 * 
 */

goalRouter.delete("/:id",  goalIdValidation , userIdentifier , deleteGoalController)










/**
 * @route    /api/goal/id
 * @description   update a user's goal,
 * @access      Protected
 * @body      {title:String,description:String,targetDate:datestring}
 */

goalRouter.patch("/:id", goalIdValidation , updateGoalValidation  , userIdentifier ,updateGoalController )







/**
 * @route    /api/goal/:id/complete
 * @description   mark a goal as completed
 * @access      Protected
 */

goalRouter.patch("/:id/complete", goalIdValidation , userIdentifier , markAsCompletedController)















export default goalRouter