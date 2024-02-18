const express = require("express");
const deleteUser = require("../../controllers/deleteUser/deleteUser");
const router = express.Router();

router.delete("/delete-user", deleteUser);

module.exports = router;
