const express = require('express');
const router = express.Router();

const {
  userExists,
  proctectToken,
  proctectEmployee,
  protectAccountOwner
} = require('../middlewares/users.middlewares');
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
  login,
} = require('../controllers/user.controller');

router.post('/login', login);
router.post('/', createUserValidations, checkValidations, createUser);

router.use(proctectToken,);

router.get('/', proctectEmployee, getAllUsers);
 
router
  .route('/:id')
  .get(userExists,proctectEmployee, getUserById)
  .patch(userExists, protectAccountOwner, updateUser)
  .delete(userExists,protectAccountOwner, deleteUser);

module.exports = { usersRouter: router };
