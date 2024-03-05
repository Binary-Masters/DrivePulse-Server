const express = require("express");
const createJwtToken = require("../../middlewares/createJwtToken");
const router = express.Router();

router.post("/jwt", createJwtToken);

module.exports = router;
