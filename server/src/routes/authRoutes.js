const express = require('express');
const { register, login, googleAuth } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();  // to rout request to respective controller
// public routes
router.post('/register', register);   // Endpoint → Controller
router.post('/login', login);         // Endpoint → Controller
router.post('/googleAuth', googleAuth);

// protected routes

router.get('/me',(req,res,authMiddleware)=>{
    try {
        res.status(200).json({message:"User authenticated",user:req.user})
    } catch (error) {
        res.status(500).json({message:"User can not be authenticted, redirect to login"})
    }
})
module.exports = router;