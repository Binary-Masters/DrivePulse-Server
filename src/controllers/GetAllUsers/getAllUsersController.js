const Users = require("../../models/users/users.model");

const getAllUsers = async(req,res)=>{
    console.log('user hitted');
    const result = await Users.find()
    res.send(result);
}

module.exports = getAllUsers;
