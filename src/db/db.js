// MongoDB Connection
const mongoose = require("mongoose");

const mongo_uri = "mongodb://localhost:27017/hackathonDB"

const connectDB = async () => {
    try {
        await mongoose.connect(mongo_uri);
        console.log("MongoDB Connected");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1); // Exit process on failure
    }
};

module.exports = connectDB;
