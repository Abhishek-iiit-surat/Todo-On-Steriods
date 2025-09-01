const { generateToken } = require('../utils/generateToken')
const { hashPassword } = require('../utils/hashPassword')
const { createUser, findUserByEmail } = require('../models/userModel')
const bcrypt = require('bcrypt');
const { logger } = require('../middlewares/logger');

const registerUser = async (username, email, password) => {
    const existingUser = await findUserByEmail(email);

    if (existingUser)
    {
        throw new Error('User already exists');
    }
    else
    {
        const hashedPassword = await hashPassword(password); // dont store passwords store hashed passwords
        const newUser = await createUser({ email: email, passwordHash: hashedPassword, authProvider: 'local' });
        const token = generateToken(newUser.id);
        return { user: newUser, token: token };
    }
}

const loginUser = async ({email, password}) => {
    const existingUser = await findUserByEmail(email);
    if (existingUser == null) 
    {
        throw new Error('Invalid email!!');
    }
    else
    {
        const isPasswordValid = await bcrypt.compare(password, existingUser.password_hash);
        if (!isPasswordValid) {
            throw new Error('Invalid password!!');
        }
        else {
            const token = generateToken(existingUser.id);
            const { password_hash, ...safeUser } = existingUser;
            return { user: safeUser, token };
        }
    }
}

module.exports = { registerUser, loginUser }