const Pool = require('./db');

const createUser = async () => {
    const user = Pool.query()
}

const findUserByEmail = async (email) => {
    try {
        const query = 'SELECT * FROM users WHERE email = $1 LIMIT 1';
        const user = await Pool.query(query, [email]);
        if (user.rows.length > 0) {
            return user.rows[0]
        } else {
            return null;
        }
    } catch (error) {
        throw new Error('Database Error');
    }
    const user = Pool.query()
}

const getUserById = async () => {
    const user = Pool.query()

}

module.exports = { createUser, findUserByEmail };