const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        try {
            const token = authHeader.split(' ')[1];
            const decoded_info = jwt.verify(authHeader, JWT_SECRET);
            req.user = decoded_info;
            next();
        } catch (error) {
            res.status(401).json({ message: 'Invalid or expired token' });
        }
        
    }
    else{
        res.status(401).json({ message: 'Authorization header missing' });
        // next();
    }
}

module.exports = authMiddleware;
