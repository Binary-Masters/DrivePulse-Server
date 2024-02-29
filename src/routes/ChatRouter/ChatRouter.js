const express = require("express");
const createChat = require("../../controllers/conversation/createChat.controlar.js");
const findChat = require("../../controllers/conversation/findChat.controller.js");
const userChat = require("../../controllers/conversation/userChat.controlar.js");
const DeleteChat = require("../../controllers/conversation/deleteChat.controller.js");

const router = express.Router()


// new conversation
router.post('/chat', createChat )
router.get('/chat/:userId', userChat )
router.get('/chat/find/:firstId/:secondId', findChat )
router.delete("/chat/:id", DeleteChat)

module.exports = router;