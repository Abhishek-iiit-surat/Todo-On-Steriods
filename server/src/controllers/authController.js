const { registerUser, loginUser, loginUserBygoogle } = require('../service/authService');
const { logger } = require('../middlewares/logger');
const { message } = require('statuses');
const { OAuth2Client } = require('google-auth-library');
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
    const response = await loginUser({ email, password });
    logger.info('User Logged In', { email, message: 'User Logged In With Email' });
    res.status(200).json(response);
  } catch (err) {
    logger.log('error', 'Login Error', { email, message: err.message });
    res.status(400).json({ message: "Login Failed! Please check your credentials and try again." });
  }
};

const googleAuth = async (req, res) => {
  const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
  try {
    const { token: googleToken } = req.body;

    // token verification
    const ticket = await googleClient.verifyIdToken({
      idToken: googleToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    // register and login
    const payload = ticket.getPayload();
    let authenticated = await loginUserBygoogle(payload);
    if (authenticated) {
      logger.info('User Logged In via Google', { email: payload.email, message: 'User Logged In With Google' });
      res.status(200).json(authenticated);
    } else {
      res.status(400).json({ message: "Google Authentication Failed! Please try again." });
    }

  } catch (error) {
    logger.log('error', 'Google Auth Error', { message: error.message });
    res.status(400).json({ message: "Google Authentication Failed! Please try again." });
  }
}

module.exports = { register, login, googleAuth };
