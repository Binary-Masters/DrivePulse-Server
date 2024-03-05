const express = require("express");
const createJwtToken = require("../../middlewares/createJwtToken");
const clearJwtToken = require("../../middlewares/clearJwtToken");
const router = express.Router();

router.post("/jwt", createJwtToken);
router.post("/logout", clearJwtToken);

module.exports = router;
