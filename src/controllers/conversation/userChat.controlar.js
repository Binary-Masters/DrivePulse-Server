const chatModel = require("../../models/chat/chat.model");

const userChat = async(req, res)=>{
    // console.log(req.params.userId);
    try {
      const chat = await chatModel.find({
        members: { $in: [req.params.userId] },
      });
      res.status(200).json(chat);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  
module.exports = userChat;