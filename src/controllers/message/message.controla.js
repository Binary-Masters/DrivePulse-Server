const Message = require("../../models/message/message.model")
const sendMessage = async(req,res)=>{
    const newMessage = new Message(req.body);
    try{
        const savedMessage = await newMessage.save();
        res.status(200).json(savedMessage)
    }catch(err){
        res.status(500).json(err)
    }
}

// get messages
const getMessages = async(req,res)=>{

    try{
        const message = await Message.find({
            conversationId: req.params.conversationId
        })
        res.status(200).json(message)
    }catch(err){
        res.status(500).json(err)
    }
}
module.exports = getMessages;
module.exports = sendMessage;