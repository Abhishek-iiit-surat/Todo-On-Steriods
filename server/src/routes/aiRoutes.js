const express = require('express');
const {askAi} = require('../controllers/aiController'); 
// const { router } = require('../../app');

router = express.Router(); // to route request to respective controller
router.post('/ask', askAi); // Endpoint -> Controller
module.exports = router;