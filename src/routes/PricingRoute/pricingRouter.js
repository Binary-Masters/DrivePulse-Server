const express = require("express");
const pricingControl = require("../../controllers/pricing/pricing.controllers");
const router = express.Router();

router.get("/pricing", pricingControl);

module.exports = router;
