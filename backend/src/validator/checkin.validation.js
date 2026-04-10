import {body , param} from "express-validator";
import {validationErrorHandler} from "./auth.validation.js"




export const checkinToggleValidation = [

  body("goalId")
  .trim()
  .notEmpty()
  .withMessage("Goal ID is required")
  .isMongoId()
  .withMessage("Invalid Goal ID"),

  body("date")
  .trim()
  .notEmpty()
  .withMessage("Date is required"),
  

  validationErrorHandler

]