

const Users = require("../../models/users/users.model");

const putUsers = async(req,res)=>{
    const email = req.query?.email
    const userUpdate = await Users.findOneAndUpdate({email },req.body,{new:true});
    res.send(userUpdate);
    console.log(userUpdate) 
}

module.exports = putUsers;
