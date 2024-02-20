const Convercation = require("../../models/conversation/conversation.model");
const converationControl = async (req, res) => {
  const newConversation = new Convercation({
    members: [req.body.senderId, req.body.receiverId],
  });
  try {
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(500).json(err);
  }
};

// get conversation with user
const getConversationControl = async(req, res)=>{
    try{
        const conversation = await Convercation.find({
            members:{$in:[req.params.userId]},
        })
        res.status(200).json(conversation)
    }catch(err){
        res.status(500).json(err);
    }
}
module.exports = getConversationControl;
module.exports = converationControl;
