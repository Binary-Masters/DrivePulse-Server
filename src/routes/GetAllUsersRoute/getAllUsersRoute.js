const express = require("express");
const getAllUsers = require("../../controllers/GetAllUsers/getAllUsersController");
const verifyToken = require("../../middlewares/verifyToken");

const router = express.Router();

router.get("/all-users",verifyToken, getAllUsers);

module.exports = router;
