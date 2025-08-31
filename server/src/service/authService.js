const { generateToken } = require('../utils/generateToken')
const { hashPassword } = require('../utils/hashPassword')
const { createUser, findUserByEmail } = require('../models/userModel')
const { logger } = require('../middlewares/logger');

const registerUser = async (username, email, password) => {
    const existingUser = await findUserByEmail(email);

    if (existingUser) {
        throw new Error('User already exists');
    }
    else {
        const hashedPassword = await hashPassword(password); // dont store passwords store hashed passwords
        const newUser = await createUser({ email: email, passwordHash: hashedPassword, authProvider: 'local' });
        const token = generateToken(newUser.id);
        return { user: newUser, token: token };
    }
}

const loginUser = async (userDetails) => {
    const { email, password, username } = userDetails;
    const existingUser = await findUserByEmail(email);
    if (!existingUser) {
        throw new Error('Invalid email!!');
    }
    else {
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            throw new Error('Invalid password!!');
        }
        else {
            const token = generateToken(existingUser.id);
            return { user: existingUser, token: token };
        }
    }
    return { user: null, token: null };
}

module.exports = { registerUser, loginUser }