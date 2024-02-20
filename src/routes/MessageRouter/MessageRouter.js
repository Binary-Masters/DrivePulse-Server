const router = require("express").Router()
const sendMessage = require("../../controllers/message/message.controla");
const getMessages = require("../../controllers/message/message.controla")

// messages
router.post("/messages", sendMessage)
router.get("/messages/:conversationId", getMessages)

module.exports = router;