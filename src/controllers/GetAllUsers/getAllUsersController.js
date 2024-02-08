const Users = require("../../models/users/users.model");

const getAllUsers = async(req,res)=>{
    const result = await Users.find()
    res.send(result);
}

module.exports = getAllUsers;
