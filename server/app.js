const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./src/routes/authRoutes');
const routes = require('./src/routes/index')
dotenv.config();
// CONFIGURING THE APP
const app = express();
app.use(express.json());  // parse the request in json payload
app.use(cors()); // to avoid CORS error

// Routes
app.use('/auth', authRoutes);
app.use('/', routes);

module.exports = app;
