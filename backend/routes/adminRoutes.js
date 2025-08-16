const express = require('express');
const router = express.Router();
const { protect, adminOnly } = require('../middleware/authMiddleware');

// Example Admin Dashboard
router.get('/dashboard', protect, adminOnly, (req, res) => {
  res.status(200).json({
    message: "Welcome to Admin Dashboard",
    admin: {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role,
    },
  });
});

// Example: Get all users (Admin only)
router.get('/users', protect, adminOnly, async (req, res) => {
  try {
    const User = require('../models/User');
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
