const { createTask, getAllTasksByUserId, updateUserTask, deleteUserTask } = require('../models/taskModel');
const { logger } = require('../middlewares/logger');
const {ai_title, ai_category_risk} = require('../service/aiService');

const addTask = async (req, res) => {
    // make an api call to meta-llama for title generation, decription refinement category evaluation and risk evalaution
    const userId = req.user.id;
    const { title, description, due_date, priority } = req.body;
    const aiTitle = await ai_title(description);
    const { category, isHighRisk } = await ai_category_risk(description);
    try {
        const response = await createTask(userId, aiTitle, description, due_date, priority, category, isHighRisk); //  calling taskmodel directly
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
        let { title, description, status, due_date, priority } = req.body;
        title = await ai_title(description);
        const { category, isHighRisk } = await ai_category_risk(description);
        const response = await updateUserTask(taskId, title, description, status, due_date, priority, category, isHighRisk);
        res.status(200).json(response);
        logger.log('Task updated successfully', { message: error });
    } catch (error) {
        logger.error('error in updating task', { message: error });
        res.status(400).json({ message: "Couldn't update task at this moment. We are working on it!" })
    }
}

const deleteTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const response = await deleteUserTask(taskId);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ message: "Couldn't delete task at this moment. We are working on it!" })
    }
}

module.exports = { addTask, getAllTasks, updateTask, deleteTask };