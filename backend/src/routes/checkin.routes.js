import {Router} from "express";
import userIdentifier from "../middlewares/auth.middleware.js"
import {toggleCheckinController , CheckinsByGoalController , } from "../controllers/checkin.controller.js";




const checkinRouter = Router();





/**
 * @routes    /api/checkin/toggle
 * @methods   POST
 * @desc      Toggle check-in status for a user
 * @access    Private
 */
checkinRouter.post("/toggle", userIdentifier ,toggleCheckinController )




/**
 * @routes   /api/checkin/:goalId
 * @methods  GET
 * @desc     Get all check-ins for a specific goal
 * @access   Private
 */
checkinRouter.get("/:goalId", userIdentifier, CheckinsByGoalController)












export default checkinRouter;