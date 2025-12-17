const { body } = require('express-validator');

const updateProfileValidator = [
  body('name')
    .optional()
    .notEmpty()
    .withMessage('Name cannot be empty'),

  body('email')
    .optional()
    .isEmail()
    .withMessage('Invalid email'),

  body('phone')
    .optional()
    .isMobilePhone()
    .withMessage('Invalid phone number'),
];

module.exports = {
  updateProfileValidator,
};
