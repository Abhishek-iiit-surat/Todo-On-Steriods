const { logger } = require('../middlewares/logger');
const Pool = require('./db');

const createUser = async ({ username, email, passwordHash = null, authProvider = 'local', googleId = null }) => {
    try {
        const query = `
            INSERT INTO users (username,email, password_hash, auth_provider, google_id)
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
};



const findUserByEmail = async (email) => {
    try {
        const query = `SELECT * FROM users WHERE email ILIKE $1`;
        const result = await Pool.query(query, [email]);
        if (result.rows.length === 0) {
            logger.info('No user found by email', { email });
            return null;
        }
        logger.info('User found by email', { email });
        return result.rows[0];
    } catch (error) {
        logger.error('Error finding user by email', { email, message: error.message });
        return null;
    }
}


const getUserById = async (userid) => {
    try {
        const query = 'SELECT * from users where user_id = $1 LIMIT 1';
        const user = await Pool.query(query, [userid])
        return user.rows[0];
    } catch (error) {
        logger.error(`Error fetching user by ID: ${error.message}`);
        throw new Error('Can not fetch user')
    }
}

const fetchUserPersonalDetails = async (userid) => {
    try {
        const query = 'SELECT name, email, created_at FROM users WHERE user_id = $1';
        const result = await Pool.query(query, [userid]);
        if (result.rows.length > 0) {
            return result.rows[0];
        } else {
            throw new Error('User not found');
        }
    }
    catch (error) {

    }
}

const updateUserDetails = async (userid, details) => {
    try {
        const { name, email, password } = details;
        const query = 'UPDATE users SET name = $1, email = $2, password = $3 WHERE user_id = $4 RETURNING *';
        const result = await Pool.query(query, [name, email, password, userid]);
        logger.info(`User details updated for user ID: ${userid}`);
    }
    catch (error) {
        logger.error(`Error updating user details for user ID ${userid}: ${error.message}`);
        throw new Error('Could not update user details');
    }
}

const deleteUser = async (userid) => {
    try {
        const query = 'DELETE FROM users WHERE user_id = $1';
        await Pool.query(query, [userid]);
        logger.info(`User deleted with ID: ${userid}`);
    }
    catch (error) {
        logger.error(`Error deleting user with ID ${userid}: ${error.message}`);
        throw new Error("Could not delete user");
    }
}

const getAllUsers = async () => {
    try {

        const query = 'SELECT user_id, name, email, created_at FROM users';
        const result = await Pool.query(query);
        return result.rows;
    }
    catch (error) {
        logger.error(`Error fetching all users: ${error.message}`);
        throw new Error('Could not fetch users');
    }

}

module.exports = { createUser, findUserByEmail, getUserById, fetchUserPersonalDetails, updateUserDetails, deleteUser, getAllUsers };