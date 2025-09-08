const Pool = require('./db');
const { logger } = require('../middlewares/logger');

const createTask = async (userId, title, description, due_date, priority) => {
    try {
        const query = `
            INSERT INTO tasks (user_id, title, description, due_date, priority, created_at, updated_at)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *;`
        const values = [userId, title, description, due_date, priority, new Date(), new Date()];
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

const updateTask = async (taskId, title, description, status) => {
    try {
        const query = `
            INSERT INTO users (username, email, password_hash, auth_provider, google_id)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `;
        const values = [username, email, passwordHash, authProvider, googleId];
        const result = await Pool.query(query, values);

        logger.info('User created', { email, message: 'User created in database' });
        return result.rows[0];
    } catch (error) {
        logger.error('Error creating user', { email, message: error.message });
        throw new Error('Error creating user');
    }
}

const deleteTask = async (taskId) => {
    try {
        const query = `
            INSERT INTO users (username, email, password_hash, auth_provider, google_id)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `;
        const values = [username, email, passwordHash, authProvider, googleId];
        const result = await Pool.query(query, values);
        logger.info('User created', { email, message: 'User created in database' });
        return result.rows[0];
    } catch (error) {
        logger.error('Error creating user', { email, message: error.message });
        throw new Error('Error creating user');
    }
}

module.exports = { createTask, getAllTasksByUserId, updateTask, deleteTask };