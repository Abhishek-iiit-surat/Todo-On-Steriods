const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

const comparePassword = async (password, hash) => {
  return bcrypt.compare(password, hash);
};

module.exports = { hashPassword, comparePassword };


// How it works:
// When you hash a password with bcrypt, the resulting hash contains the salt and the hash value.
// bcrypt.compare(password, hash) extracts the salt from the hash, hashes the provided password with that salt, and checks if it matches the stored hash.
