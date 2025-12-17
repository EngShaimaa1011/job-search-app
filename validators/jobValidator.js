const { body, query } = require('express-validator');

const createJobValidator = [
  body('title')
    .notEmpty()
    .withMessage('Job title is required'),

  body('company')
    .notEmpty()
    .withMessage('Company name is required'),

  body('type')
    .isIn(['full-time', 'part-time', 'remote'])
    .withMessage('Job type must be full-time, part-time, or remote'),

  body('salary')
    .optional()
    .isNumeric()
    .withMessage('Salary must be a number'),

  body('description')
    .notEmpty()
    .withMessage('Job description is required'),
];

const getJobsValidator = [
  query('type')
    .optional()
    .isIn(['full-time', 'part-time', 'remote'])
    .withMessage('Invalid job type'),

  query('salary')
    .optional()
    .isNumeric()
    .withMessage('Salary must be a number'),
];

module.exports = {
  createJobValidator,
  getJobsValidator,
};
