const express = require("express");
const router = express.Router();
const authRoutes = require("./authRoutes");
const taskRoutes = require("./taskRoutes");
const aiRoutes = require("./aiRoutes");
const { logger } = require("../middlewares/logger");

logger.info("Setting up routes");
const authMiddleware = require("../middlewares/authMiddleware");
router.use(authMiddleware); 
router.use("/tasks", taskRoutes);
router.use("/ai", aiRoutes);

module.exports = router;
