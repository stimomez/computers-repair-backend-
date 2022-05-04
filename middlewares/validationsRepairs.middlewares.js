const { body } = require('express-validator');
const { validationResult } = require('express-validator');

const createService = [
  body('date').notEmpty().withMessage.apply('Date cannot be empty'),
  body('computerNumber')
    .notEmpty()
    .withMessage('Computer Number cannot be empty')
    .isNumeric()
    .withMessage('the value is numerical'),
  body('comments').notEmpty().withMessage('Comments cannot be empty'),
];

const checkValidations = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const messages = errors.array().map(({ msg }) => msg);

    const errorMsg = messages.join('. ');
    return res.status(400).json({
      status: 'error',
      message: errorMsg,
    });
  }
  next();
};
module.exports = { createService, checkValidations };
