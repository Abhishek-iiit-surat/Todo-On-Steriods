const Pool = require('./db');

const createTask = async (userId, title, description) => {
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

const getTasksByUserId = async (userId) => {
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

module.exports = { createTask, getTasksByUserId, updateTask, deleteTask };