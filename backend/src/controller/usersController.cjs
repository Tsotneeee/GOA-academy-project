let { users, nextId } = require('../data/data.cjs');
const { isEmpty, findUser, updateObject } = require('../services/usersServices.cjs');

function getAllUsers(req, res) { // Get all users
    if (isEmpty(users)) {
        res.status(404).json({ success: false, message: "No users found" });
        return;
    }
    res.status(200).json({ success: true, data: users });
}

function getUserById(req, res) { // Get user by ID
    const user = findUser(req.params.id, users);
    if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, data: user });
}

function createUser(req, res) { // Create a new user
    const newUser = req.body;
    if (!newUser.name) {
        return res.status(400).json({ success: false, message: "User name is required" });
    }
    else if (users.some(u => u.name === newUser.name)) {
        return res.status(409).json({ success: false, message: "User already exists" });
    }
    newUser.id = nextId++;
    users.push(newUser);
    res.status(201).json({ success: true, data: newUser });
}

function deleteUser(req, res) { // Delete user by ID
    const userIndex = findUser(req.params.id, users, true);
    if (userIndex === -1) {
        return res.status(404).json({ success: false, message: "User not found" });
    }
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.status(200).json({ success: true, message: "User deleted successfully" });
}

function updateUser(req, res) {
    userIndex = findUser(req.params.id, users, true);
    if (userIndex === -1) {
        return res.status(404).json({ success: false, message: "User not found" });
    }
    const updatedUser = updateObject(users[userIndex], req.body);
    users[userIndex] = updatedUser;
    res.status(200).json({ success: true, data: updatedUser });
}

module.exports = { getAllUsers, getUserById, createUser, deleteUser, updateUser };