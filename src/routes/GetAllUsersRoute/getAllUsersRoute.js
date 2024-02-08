const express = require("express");
const getAllUsers = require("../../controllers/GetAllUsers/getAllUsersController");

const router = express.Router();

router.get("/all-users", getAllUsers);

module.exports = router;
