const express = require("express");
const postUsers = require("../../controllers/users/postUsers.controller");

const router = express.Router();

router.post("/users", postUsers);

module.exports = router;
