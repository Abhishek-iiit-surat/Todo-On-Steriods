// const taskService = require('../service/taskService');
const { createTask, getAllTasksByUserId, updateUserTask, deleteUserTask} = require('../models/taskModel');

const addTask = async (req, res) => {
    const userId = req.user.id;
    const { title, description, due_date, priority } = req.body;
    try {
        const response = await createTask(userId, title, description, due_date, priority); //  calling taskmodel directly
        res.status(200).json({ message: "Task added successfully" });
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Couldn't add the task at this moment" })
    }
}

const getAllTasks = async (req, res) => {
    try {
        const userId = req.user.id;
        const response = await getAllTasksByUserId(userId); // call model directly
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ message: "Counldn't add task at this moment. We are working on it!" })
    }
}

const updateTask = async (req, res) => {

    try {
        const taskId = req.params.id;
        const { title, description, status, due_date, priority } = req.body;
        const response = await updateUserTask(taskId, title, description, status, due_date, priority);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ message: "Couldn't update task at this moment. We are working on it!" })
    }
}

const deleteTask = async (req, res) => {
    try {
        const taskId  = req.params.id;
        const response = await deleteUserTask(taskId);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ message: "Couldn't delete task at this moment. We are working on it!" })
    }
}

module.exports = { addTask, getAllTasks, updateTask, deleteTask };