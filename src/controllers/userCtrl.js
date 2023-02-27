const asyncHandler = require("express-async-handler");
const User = require("../models/user");

// Get all users
const getUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500);
    throw new Error("Error getting users");
  }
});

// Get single user by ID
const getUserById = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (user) {
      res.json(user);
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  } catch (error) {
    res.status(500);
    throw new Error("Error getting user");
  }
});

// @desc      Update user profile
// @route     PUT /api/user/
// @access    Private
const updateUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;

      const updatedUser = await user.save();

      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  } catch (error) {
    res.status(500);
    throw new Error("Error updating user");
  }
});

module.exports = { getUsers, getUserById, updateUser };
