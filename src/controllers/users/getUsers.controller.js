const Users = require("../../models/users/users.model");

const getUsers = async(req,res)=>{
    const email = req.query?.email
    console.log(email);
    console.log('user hitted');
    const user = await Users.findOne({email });
    res.send(user);
    // console.log(user)  
}

module.exports = getUsers;