// MongoDB Connection
const mongoose = require("mongoose");

const mongo_uri = "mongodb+srv://aliraza:NTZGL4M4sVwR8Pw3@hackathon.vtoiu.mongodb.net/hackathonDB"

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
