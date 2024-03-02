const User = require("../../models/users/users.model");

const SimpleGetUser = async (req, res) => {
    try {
        const users = await User.find(); // Use the find method to get all users
        res.send(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send("Error fetching users");
    }
}

module.exports = SimpleGetUser;
