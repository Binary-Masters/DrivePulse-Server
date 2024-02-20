const express = require("express");
const converationControl = require("../../controllers/conversation/conversation.controlar");
const getConversationControl = require("../../controllers/conversation/conversation.controlar");
const router = express.Router()

// new conversation
router.post('/conversation', converationControl )
router.get('/conversation/:userId', getConversationControl )

module.exports = router;