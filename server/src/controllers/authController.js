const authService = require('../services/authService');

const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await authService.registerUser(email, password);
    res.status(201).json(response);
  } catch (err) {
    res.status(400).json({ message: "Couldn't Register You at this moment . Please try later" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await authService.loginUser(email, password);
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json({ message: "Login Failed! Please check your credentials and try again." });
  }
};

module.exports = { register, login };
