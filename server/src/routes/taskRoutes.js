const express = require('express');
const { addTask, getAllTasks, updateTask, deleteTask } = require('../controllers/taskController');
const router = express.Router();  // to rout request to respective controller   
router.post('/add', addTask);          // Endpoint → Controller
router.get('/list', getAllTasks);         // Endpoint → Controller 
router.put('/update/:id', updateTask); // Endpoint → Controller
router.delete('/delete/:id', deleteTask); // Endpoint → Controller

module.exports = router;