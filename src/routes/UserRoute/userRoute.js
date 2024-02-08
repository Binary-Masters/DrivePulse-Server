const express = require("express");
const putUserWithEmail = require("../../controllers/user/putUserEmail.controller");

const router = express.Router();

router.put("/user", putUserWithEmail);

module.exports = router;
