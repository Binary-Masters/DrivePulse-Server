const Users = require("../../models/users/users.model");

const getAllUsers = async(req,res)=>{
    console.log(req.user);
    const result = await Users.find()
    res.send(result);
}

module.exports = getAllUsers;
