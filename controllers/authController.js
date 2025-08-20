// controllers/authController.js
const signup = (req, res) => {
  res.send("Signup route working 🚀");
};

const login = (req, res) => {
  res.send("Login route working ✅");
};

module.exports = { signup, login };
