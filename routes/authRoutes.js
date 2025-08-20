const express = require("express");
const router = express.Router();

// Signup route
router.post("/signup", (req, res) => {
    const { name, email, password } = req.body;
    res.json({ msg: "Signup route working", data: { name, email, password } });
});

module.exports = router;
