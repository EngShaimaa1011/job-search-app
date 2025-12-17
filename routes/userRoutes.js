const express = require('express');
const router = express.Router();

const {
  getProfile,
  updateProfile,
} = require('../controllers/userController');

const authMiddleware = require('../middlewares/authMiddleware');
const validate = require('../middlewares/validationMiddleware');
const { updateProfileValidator } = require('../validators/userValidator');

// Get logged-in user profile
router.get('/me', authMiddleware, getProfile);

// Update logged-in user profile
router.patch(
  '/me',
  authMiddleware,
  updateProfileValidator,
  validate,
  updateProfile
);

module.exports = router;
