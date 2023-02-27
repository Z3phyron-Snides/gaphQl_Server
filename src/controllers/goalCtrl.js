const asyncHandler = require("express-async-handler");
const Goal = require("../models/goals");

const createGoal = asyncHandler(async (req, res) => {
  try {
    const { goal } = req.body;
    if (!goal) {
      res.status(400);
      throw new Error("plaease add in a goal");
    }

    const newGoal = new Goal({ user: req.user._id, goal });
    await newGoal.save();
    res.status(201).json({ newGoal });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const getGoals = asyncHandler(async (req, res) => {
  try {
    const goals = await Goal.find({ user: req.user._id });
    res.status(201).json({ goals });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const getGoal = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    const goal = await Goal.find({ user: req.user._id, _id: id });
    if (!goal) {
      res.status(404);
      throw new Error("Goal not found!!!");
    }

    res.status(201).json({ goal });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const updateGoal = asyncHandler(async (req, res) => {
  try {
    const { id } = req.query;
    const { goal } = req.body;
    const goalExist = await Goal.find({ user: req.user._id, _id: id });
    if (!goalExist) {
      res.status(404);
      throw new Error("Goal not found!!!");
    }

    const updatedGoal = await Goal.findByIdAndUpdate(
      id,
      { goal },
      { new: true }
    );
    res.status(201).json({ updatedGoal });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const deleteGoal = asyncHandler(async (req, res) => {
  try {
    const { id } = req.query;
    const goal = await Goal.findOne({ user: req.user._id, _id: id });
    if (!goal) {
      res.status(404);
      throw new Error("Goal not found!!!");
    }

    await goal.delete();

    res.status(201).json({
      success: true,
      message: "deleted successfully!!!",
      id
    });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = {
  createGoal,
  getGoals,
  getGoal,
  updateGoal,
  deleteGoal,
};
