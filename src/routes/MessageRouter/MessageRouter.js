const addMessage = require("../../controllers/message/addMessage.controlar.js");
const getMessages = require("../../controllers/message/getMessage.controller.js");
const verifyToken = require("../../middlewares/verifyToken.js");

const router = require("express").Router()


// messages
router.post("/message", addMessage)
router.get("/message/:chatId",verifyToken, getMessages)

module.exports = router;