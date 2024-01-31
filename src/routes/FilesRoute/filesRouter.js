const express = require("express");
const getFiles = require("../../controllers/files/getFiles.controller");
const postFiles = require("../../controllers/files/postFiles.controller");

const router = express.Router();

router.get("/files", getFiles);
router.post("/files", postFiles);

module.exports = router;
