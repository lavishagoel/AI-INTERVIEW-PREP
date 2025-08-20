// routes/authRoutes.js
const express = require("express");
const router = express.Router();

// Example route
router.post("/register", (req, res) => {
  res.send("User registration route");
});

router.post("/login", (req, res) => {
  res.send("User login route");
});

module.exports = router;
