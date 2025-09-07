const express = require('express');
const { addTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController');
const router = express.Router();  // to rout request to respective controller   
router.post('/add', addTask);          // Endpoint → Controller
router.get('/list', getTasks);         // Endpoint → Controller 
router.put('/update/:id', updateTask); // Endpoint → Controller
router.delete('/delete/:id', deleteTask); // Endpoint → Controller

module.exports = router;