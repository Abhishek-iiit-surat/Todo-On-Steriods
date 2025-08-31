const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./src/routes/authRoutes');
const taskRoutes = require('./src/routes/taskRoutes');
const aiRoutes = require('./src/routes/aiRoutes');

dotenv.config();
// CONFIGURING THE APP
const app = express();
app.use(express.json());  // parse the request in json payload
app.use(cors()); // to avoid CORS error

// Routes
app.use('/auth', authRoutes);
// app.use('/task',taskRoutes);
// app.use('/ai',aiRoutes);

module.exports = app;
