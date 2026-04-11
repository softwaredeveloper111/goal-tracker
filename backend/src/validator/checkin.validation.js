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
  .withMessage("Date is required")
  .matches(/^\d{4}-\d{2}-\d{2}$/)
  .withMessage("Target date must be in YYYY-MM-DD format")
    .custom((value) => {
      const date = new Date(value);
     if (isNaN(date.getTime())) {
    throw new Error("Target date is not a valid date");
  }
    const today = new Date().toISOString().split("T")[0];
    if (value > today) {
      throw new Error("Target date cannot be in the future");
    }
    return true;
  }),

  validationErrorHandler

]