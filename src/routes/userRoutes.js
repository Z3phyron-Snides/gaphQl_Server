const express = require("express");
const router = express.Router();
const { getUserById, updateUser } = require("../controllers/userCtrl");
const { protect } = require("../middlewares/authHandler");

router.use(protect);

router.route("/").get(getUserById).put(updateUser)

module.exports = router;
