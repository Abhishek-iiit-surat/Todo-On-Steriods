const jwt = require('jsonwebtoken');
const { logger } = require('../middlewares/logger');
require("dotenv").config({ path: "../.env" });


const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const JWT_SECRET = process.env.JWT_SECRET;
    logger.info(`authheader found! ${JWT_SECRET}`);
    if (authHeader) {
        try {
            const token = authHeader.split(' ')[1];
            const decoded_info = jwt.verify(token, JWT_SECRET);
            req.user = {};
            req.user.id = decoded_info.id;
            next();
        } catch (error) {
            res.status(401).json({ message: 'Invalid or expired token' });
        }

    }
    else {
        res.status(401).json({ message: 'Authorization header missing' });
        // next();
    }
}

module.exports = authMiddleware;
