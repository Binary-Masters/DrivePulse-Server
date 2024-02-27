const express = require("express");
const getFiles = require("../../controllers/files/getFiles.controller");
const postFiles = require("../../controllers/files/postFiles.controller");
const deleteFiles = require("../../controllers/files/deleteFiles.controller");
const lookup = require("../../controllers/files/lookup.controller");
const patchNotifyFiles = require("../../controllers/files/patchNotifyFiles.control");
const patchStoreFiles = require("../../controllers/files/patchStoreFiles.control");
const getSearchFiles = require("../../controllers/files/getSearchFiles.controller");

const router = express.Router();

router.get("/files", getFiles);
router.post("/files", postFiles);
router.post("/files/lookup", lookup);
router.delete("/files", deleteFiles);
router.patch("/notify-file", patchNotifyFiles);
router.patch("/store-file", patchStoreFiles);
router.patch("/rename-file", postFiles);
router.get("/get-search-files", getSearchFiles);

module.exports = router;
