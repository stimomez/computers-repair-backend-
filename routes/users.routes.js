const express = require('express');
const router = express.Router();

const { userExists } = require('../middlewares/users.middlewares');
const {
  createUserValidations,
  checkValidations,
} = require('../middlewares/validationsUsers.middlewares');

const {
  getAllUsers,
  createUser,
  updateUser,
  getUserById,
  deleteUser,
} = require('../controllers/user.controller');

router.get('/', getAllUsers);

router.post('/',createUserValidations, checkValidations, createUser);

router
  .route('/:id')
  .get(userExists, getUserById)
  .patch(userExists, updateUser)
  .delete(userExists, deleteUser);

module.exports = { usersRouter: router };
