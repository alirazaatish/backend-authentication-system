const Joi = require("joi");

const userValidationSchema = Joi.object({
  cnic: Joi.string().length(13).required().messages({
    "string.base": "CNIC must be a string.",
    "string.length": "CNIC must be 13 characters long.",
    "any.required": "CNIC is required.",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Invalid email format.",
    "any.required": "Email is required.",
  }),
  name: Joi.string().min(3).max(50).required().messages({
    "string.base": "Name must be a string.",
    "string.min": "Name must be at least 3 characters.",
    "string.max": "Name must not exceed 50 characters.",
    "any.required": "Name is required.",
  }),
});

module.exports = userValidationSchema;
