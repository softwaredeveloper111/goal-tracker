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
  .isLength({ max: 500 })
  .withMessage("Description cannot be more than 500 characters"),

  body("targetDate")
  .trim()
  .notEmpty()
  .withMessage("Target date is required")
  .isISO8601()
  .withMessage("Target date must be a valid date"),

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
  .optional()
  .trim()
  .isISO8601()
  .withMessage("Target date must be a valid date"),

  validationErrorHandler


]

