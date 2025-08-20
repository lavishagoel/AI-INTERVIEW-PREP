// routes/interviewRoutes.js
const express = require("express");
const router = express.Router();

// Example route
router.get("/", (req, res) => {
  res.send("Interview routes working ✅");
});

module.exports = router;
