const express = require('express');
const { register, login } = require('../controllers/authController');

const router = express.Router();  // to rout request to respective controller

router.post('/register', register);   // Endpoint → Controller
router.post('/login', login);         // Endpoint → Controller

module.exports = router;