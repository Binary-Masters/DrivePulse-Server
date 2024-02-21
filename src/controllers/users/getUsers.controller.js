const Users = require("../../models/users/users.model");

const getUsers = async(req,res)=>{
    const email = req.query?.email
    console.log(email);
    if(!email || email === undefined) return res.status(500).json({message:"email not found"})
    const user = await Users.findOne({email });
    res.send(user);
    // console.log(user)  
}

module.exports = getUsers;