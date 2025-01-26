const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/userControllers");
const validate = require("../middleware/validate");
const userValidationSchema = require("../validations/userValidation");

router.post("/", validate(userValidationSchema), createUser);

module.exports = router;
