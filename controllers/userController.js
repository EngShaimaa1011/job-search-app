const User = require('../models/User');

// GET PROFILE
const getProfile = async (req, res) => {
  const user = await User.findById(req.user.userId).select('-password');

  res.status(200).json(user);
};

// UPDATE PROFILE
const updateProfile = async (req, res) => {
  const { name, email } = req.body;

  const user = await User.findByIdAndUpdate(
    req.user.userId,
    { name, email },
    { new: true, runValidators: true }
  ).select('-password');

  res.status(200).json({
    message: 'Profile updated successfully',
    user,
  });
};

module.exports = {
  getProfile,
  updateProfile,
};
