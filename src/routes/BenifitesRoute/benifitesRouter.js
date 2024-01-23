const express = require("express");
const benifiteControl = require("../../controllers/benifites/benifites.controllers");
const router = express.Router();

router.get("/benifites", benifiteControl);

module.exports = router;
