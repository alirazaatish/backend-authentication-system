const User = require("../models/Users");

const createUser = async (req, res) => {
  try {
    const { cnic, email, name } = req.body;

    // Create a new user
    const newUser = new User({ cnic, email, name });
    const savedUser = await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      user: savedUser,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "CNIC or Email already exists" });
    }
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createUser };
