const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phoneNumber: String,
    photoURL: String,
    type: String,
    uid: String,
    emailVerified: Boolean,
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
