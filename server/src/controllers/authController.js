const { registerUser, loginUser } = require('../service/authService');
const { logger } = require('../middlewares/logger');
const { message } = require('statuses');

const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const response = await registerUser(name, email, password);
    logger.info('User Registered', { email, message: 'User Registered With Email' });
    res.status(200).json({ message: 'Registered Successfully' });
  } catch (err) {
    logger.log('error', 'Registration Error', { email, message: err.message });
    console.error(err);
    res.status(400).json({ message: `Couldn't Register You at this moment . Please try later ${err}` });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const response = await loginUser(email, password);
    logger.info('User Logged In', { email, message: 'User Logged In With Email' });
    res.status(200).json(response);
  } catch (err) {
    logger.log('error', 'Login Error', { email, message: err.message });
    res.status(400).json({ message: "Login Failed! Please check your credentials and try again." });
  }
};

module.exports = { register, login };
