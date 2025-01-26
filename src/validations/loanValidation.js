const Joi = require("joi");

const loanValidationSchema = Joi.object({
  category: Joi.string().required().messages({
    "string.empty": "Category is required.",
  }),
  subcategory: Joi.string().required().messages({
    "string.empty": "Subcategory is required.",
  }),
  initialDeposit: Joi.number().required().messages({
    "number.base": "Initial deposit must be a number.",
    "any.required": "Initial deposit is required.",
  }),
  loanPeriod: Joi.number().integer().required().messages({
    "number.base": "Loan period must be a number.",
    "number.integer": "Loan period must be an integer.",
    "any.required": "Loan period is required.",
  }),
  loanAmount: Joi.number().required().messages({
    "number.base": "Loan amount must be a number.",
    "any.required": "Loan amount is required.",
  }),
  monthlyPayment: Joi.number().required().messages({
    "number.base": "Monthly payment must be a number.",
    "any.required": "Monthly payment is required.",
  }),
});

module.exports = loanValidationSchema;
