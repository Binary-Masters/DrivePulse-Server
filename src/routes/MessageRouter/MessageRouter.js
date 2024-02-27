const addMessage = require("../../controllers/message/addMessage.controla.js");
const getMessages = require("../../controllers/message/getMessage.controller.js");

const router = require("express").Router()


// messages
router.post("/message", addMessage)
router.get("/message/:chatId", getMessages)

module.exports = router;