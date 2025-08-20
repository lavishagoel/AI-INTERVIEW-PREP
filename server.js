// server.js
const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
require("dotenv").config();

connectDB();  // <-- make sure this is here before app.listen


const app = express();

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("API is running... 🚀");
});

const authRoutes = require("./routes/authRoutes");
const interviewRoutes = require("./routes/interviewRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/interviews", interviewRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
