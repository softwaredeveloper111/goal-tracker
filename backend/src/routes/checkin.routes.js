import {Router} from "express";
import userIdentifier from "../middlewares/auth.middleware.js"
import {toggleCheckinController , CheckinsByGoalController , } from "../controllers/checkin.controller.js";
import { goalIdValidation } from "../validator/goal.validator.js"
import { checkinToggleValidation} from "../validator/checkin.validation.js";


const checkinRouter = Router();





/**
 * @routes    /api/checkin/toggle
 * @methods   POST
 * @desc      Toggle check-in status for a user
 * @access    Private
 * @body     { goalId: String , date: String  }
 */
checkinRouter.post("/toggle",checkinToggleValidation , userIdentifier ,toggleCheckinController )




/**
 * @routes   /api/checkin/:goalId
 * @methods  GET
 * @desc     Get all check-ins for a specific goal
 * @access   Private
 */
checkinRouter.get("/:goalId", goalIdValidation , userIdentifier, CheckinsByGoalController)












export default checkinRouter;