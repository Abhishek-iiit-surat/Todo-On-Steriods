// const taskService = require('../service/taskService');
const {createTask} = require('../service/taskService');

// req={
// userId, title, description, time
// }

const add = async (req, res) => {
    // const { userId, title, description, time } = req.body;
    try {
        console.log("Added")
        // destructure attributes from request
        const response = await createTask(userId, title, description, time); // call service layer
        res.status(200).json({ message: "Task added successfully" });
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "ghi" })
    }
}

const getTasks = async (req, res) => {
    try {
        // destructure attributes from request
        const { userId, title, description, time } = req.body;
        const response = await taskService.getTasks(userId, title, description, time); // call service layer
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ message: "Counldn't add task at this moment. We are working on it!" })
    }
}

const updateTask = async (req, res) => {

    try {
        const { userID, taskId } = req.body;
        const response = await taskService.updateTask(userID, taskId);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ message: "Couldn't update task at this moment. We are working on it!" })
    }
}

const deleteTask = async (req, res) => {
    try {
        const { userID, taskId } = req.body;
        const response = await taskService.deleteTask(userID, taskId);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ message: "Couldn't delete task at this moment. We are working on it!" })
    }
}

module.exports = { add, getTasks, updateTask, deleteTask };