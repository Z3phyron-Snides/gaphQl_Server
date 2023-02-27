const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(201).json({
    success: true,
    message: "Hello World!!!",
  });
});

module.exports = router;
