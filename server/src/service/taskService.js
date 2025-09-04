const createTask = async (userId, title, description, time) => {
    // Logic to create a task in the database
    return { userId, title, description, time, status: 'created' };
}