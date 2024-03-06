const express = require("express");
const createChat = require("../../controllers/conversation/createChat.controlar.js");
const findChat = require("../../controllers/conversation/findChat.controller.js");
const userChat = require("../../controllers/conversation/userChat.controlar.js");
const DeleteChat = require("../../controllers/conversation/deleteChat.controller.js");
const verifyToken = require("../../middlewares/verifyToken.js");

const router = express.Router()


// new conversation
router.post('/chat', createChat )
router.get('/chat/:userId',verifyToken, userChat )
router.get('/chat/find/:firstId/:secondId',verifyToken, findChat )
router.delete("/chat/:id", DeleteChat)

module.exports = router;