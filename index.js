const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./src/db/db");
const authRoutes = require("./src/routes/authRoutes");
const userRoutes = require("./src/routes/userRoute");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    res.send("Server is Running!");
})

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
