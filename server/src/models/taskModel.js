const Pool = require('./db');
const { logger } = require('../middlewares/logger');

const createTask = async (userId, aiTitle, description, due_date, priority, category, isHighRisk) => {
    try {
        const query = `
            INSERT INTO tasks (user_id, title, description, due_date, priority, created_at, updated_at, category, ishighrisk)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            RETURNING *;`
        const values = [userId, aiTitle, description, due_date, priority, new Date(), new Date(), category, isHighRisk];
        const result = await Pool.query(query, values);
        logger.info('Task created', { userId, message: 'Task created in database' });
        return result.rows[0];
    } catch (error) {
        logger.error('Error creating task', { userId, message: error.message });
        throw new Error('Error creating task');
    }
}

const getAllTasksByUserId = async (userId) => {
    try {
        const query = `SELECT * FROM tasks WHERE user_id = $1;`;
        const values = [userId];
        const result = await Pool.query(query, values);
        logger.info('Tasks for user idfetched', { userId, message: 'All tasks fetched' });
        return result.rows;
    } catch (error) {
        logger.error('Error creating user', { userId, message: error.message });
        throw new Error('Error creating user');
    }
}

const updateUserTask = async (taskId, title, description, status, due_date, priority, category, isHighRisk = false) => {
    try {
        const query = `
            UPDATE tasks
            SET title = $1,
            description = $2,
            status = $3,
            due_date = $4,
            priority = $5,
            ishighrisk = $6,
            updated_at = $7,
            category = $8
            WHERE id = $9
            RETURNING *;
        `;
        const values = [title, description, status, due_date, priority, isHighRisk, new Date(), category, taskId];
        const result = await Pool.query(query, values);

        logger.info('Task updated', { message: 'Task updated in database' });
        return result.rows[0];
    } catch (error) {
        logger.error('Error updating task in database', { message: error.message });
        throw new Error('Error creating user');
    }
}

const deleteUserTask = async (taskId) => {
    try {
        const query = `
      DELETE FROM tasks
      WHERE id = $1
      RETURNING *;
    `;
        const values = [taskId];
        const result = await Pool.query(query, values);

        if (result.rows.length === 0) {
            logger.warn("Task not found", { taskId });
            return null; // or throw new Error("Task not found");
        }

        logger.info("Task deleted", { taskId, message: "Task deleted from database" });
        return result.rows[0];
    } catch (error) {
        logger.error("Error deleting task", { taskId, message: error.message });
        throw new Error("Error deleting task");
    }
};


module.exports = { createTask, getAllTasksByUserId, updateUserTask, deleteUserTask };