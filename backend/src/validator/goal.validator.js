import { body , param } from "express-validator"
import {validationErrorHandler} from "./auth.validation.js"






export const createGoalvalidation = [
 
  body("title")
  .trim()
  .notEmpty()
  .withMessage("Title is required")
  .isLength({ max: 100 })
  .withMessage("Title cannot be more than 100 characters"),


  body("description")
  .trim()
  .notEmpty()
  .withMessage("Description is required")
  .isLength({ max: 500 })
  .withMessage("Description cannot be more than 500 characters"),



  body("targetDate")
  .trim()
  .notEmpty()
  .withMessage("Target date is required")
  .matches(/^\d{4}-\d{2}-\d{2}$/)
  .withMessage("Target date must be in YYYY-MM-DD format")
  .custom((value) => {
      const date = new Date(value);
     if (isNaN(date.getTime())) {
    throw new Error("Target date is not a valid date");
  }
    const today = new Date().toISOString().split("T")[0];
    if (value < today) {
      throw new Error("Target date cannot be in the past");
    }
    return true;
  }),

  validationErrorHandler


]






export const goalIdValidation  = [

  param("id")
  .trim()
  .notEmpty()
  .withMessage("Goal ID is required")
  .isMongoId()
  .withMessage("Invalid Goal ID"),

  validationErrorHandler
]






export const updateGoalValidation = [
 
  body("title")
  .optional()
  .trim()
  .isLength({ max: 100 })
  .withMessage("Title cannot be more than 100 characters"),

  body("description")
  .optional()
  .trim()
  .isLength({ max: 500 })
  .withMessage("Description cannot be more than 500 characters"),

 body("targetDate")
  .trim()
  .notEmpty()
  .withMessage("Target date is required")
  .matches(/^\d{4}-\d{2}-\d{2}$/)
  .withMessage("Target date must be in YYYY-MM-DD format")
  .custom((value) => {
      const date = new Date(value);
     if (isNaN(date.getTime())) {
    throw new Error("Target date is not a valid date");
  }
    const today = new Date().toISOString().split("T")[0];
    if (value < today) {
      throw new Error("Target date cannot be in the past");
    }
    return true;
  }),

  validationErrorHandler


]

