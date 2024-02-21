const User = require("../../models/users/users.model");
const mongoose = require("mongoose");

const GetSingleUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    if (!mongoose.isValidObjectId(userId)) {
      return res.status(400).send("Invalid user ID");
    }

    const user = await User.findOne({ _id: userId });

    if (!user) {
      return res.status(404).send("User not found");
    }

    res.send(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).send("Error fetching user");
  }
};

module.exports = GetSingleUser;