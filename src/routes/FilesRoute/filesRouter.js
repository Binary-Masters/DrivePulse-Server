const express = require("express");
const getFiles = require("../../controllers/files/getFiles.controller");
const postFiles = require("../../controllers/files/postFiles.controller");
const deleteFiles = require("../../controllers/files/deleteFiles.controller");
const lookup = require("../../controllers/files/lookup.controller");

const router = express.Router();

router.get("/files", getFiles);
router.post("/files", postFiles);
router.post("/files/lookup", lookup)
router.delete("/files", deleteFiles);

module.exports = router;
