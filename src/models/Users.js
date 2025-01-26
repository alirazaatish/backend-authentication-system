const mongoose = require("mongoose");

// User Schema
const userSchema = new mongoose.Schema({
    cnic: {
        type: String,
        required: [true, "CNIC is required"],
        minlength: [13, "CNIC must be exactly 13 characters long"],
        maxlength: [13, "CNIC must be exactly 13 characters long"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"]
    },
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true
    }
});

// Export the Model
const User = mongoose.model("User", userSchema);
module.exports = User;
