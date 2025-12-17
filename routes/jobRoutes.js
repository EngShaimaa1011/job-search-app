const express = require('express');
const router = express.Router();

const {
  createJob,
  getAllJobs,
} = require('../controllers/jobController');

const authMiddleware = require('../middlewares/authMiddleware');
const validate = require('../middlewares/validationMiddleware');

const {
  createJobValidator,
  getJobsValidator,
} = require('../validators/jobValidator');

// Get all jobs (Public)
router.get(
  '/',
  getJobsValidator,
  validate,
  getAllJobs
);

// Create job (Protected)
router.post(
  '/',
  authMiddleware,
  createJobValidator,
  validate,
  createJob
);

module.exports = router;
