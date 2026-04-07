import { body , validationResult } from "express-validator"




export const validationErrorHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const extractedErrors = errors.array().map((err) => ({
      field: err.param,
      message: err.msg,
    }));

    const error = new Error(extractedErrors[0]?.message || "Validation failed");
    error.statusCode = 400;
    error.details = extractedErrors;

    return next(error);
  }

  next();
};



export const registervalidation = [
  body("username")
  .trim()
  .notEmpty()
  .withMessage("Username is required")
  .isLength({ min: 3, max: 20 })
  .withMessage("Username must be between 3 and 20 characters")
  .matches(/^[A-Za-z_][A-Za-z0-9_]*$/)
  .withMessage("Username can only contain letters, numbers, and underscores"),


  body('email')
  .notEmpty().withMessage('Email is required')
  .trim()
  .isEmail()
  .withMessage('Please provide a valid email address')
  .normalizeEmail(),




  body('password')
  .notEmpty().withMessage('Password is required')
  .isLength({ min: 8 })
  .trim()
  .withMessage('Password must be at least 8 characters long')
  .matches(/[a-z]/)
  .withMessage('Password must contain at least one lowercase letter')
  .matches(/[A-Z]/)
  .withMessage('Password must contain at least one uppercase letter')
  .matches(/[0-9]/)
  .withMessage('Password must contain at least one number')
  .matches(/[@$!%*?&]/)
  .withMessage('Password must contain at least one special character (@, $, !, %, *, ?, &)'),


  validationErrorHandler


]





export const loginvalidation = [

  body("identifier")
  .trim()
  .notEmpty()
  .withMessage("Username or email is required"),


  body("password")
  .trim()
  .notEmpty()
  .withMessage("Password is required"),


  validationErrorHandler
]