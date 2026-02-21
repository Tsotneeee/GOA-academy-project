const express = require('express');
const usersRouter = express.Router();
let { users, nextId } = require('../data/data.cjs'); // ! temporary
// controller functions
const { getAllUsers, getUserById, createUser, deleteUser, updateUser } = require('../controller/userscontroller.cjs');


usersRouter.get('/', getAllUsers); // Get all users

usersRouter.get('/:id', getUserById); // Get user by ID

usersRouter.post('/', createUser); // Create a new user

usersRouter.put('/:id', updateUser); // Update user by ID

usersRouter.delete('/:id', deleteUser); // Delete user by ID

module.exports = { usersRouter };