const { generateToken } = require('../utils/generateToken')
const hashPassword = require('../utils/hashPassword')
const {createUser, findUserByEmail} = require('../models/userModel')


const registerUser = async (username, email, password) => {
    const existingUser = await findUserByEmail(email);

    if (existingUser) {
        throw new Error('User already exists');     
    }
    else{
        const hashedPassword = await hashPassword(password); // dont store passwords store hashed passwords
        const newUser = await createUser(username, email, hashedPassword); 
        const token = generateToken(newUser);
        return { user: newUser, token };
    }
    // buisness logic
}

const LoginUser = async (username, password) => {
    // buisness logic   
    return { user: null, token: null };
}

modules.exports = {registerUser, LoginUser}