const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  createUser,
  updateUser,
  getUserById,
  deleteUser,
} = require('../controllers/user.controller');

router.get('/', getAllUsers);

router.post('/', createUser);

router.route('/:id').get(getUserById).patch(updateUser).delete(deleteUser);

module.exports = { usersRouter: router };
