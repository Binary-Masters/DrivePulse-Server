const Users = require("../../models/users/users.model");

const putUserWithEmail = async (req, res) => {
  const usersData = req.body;
  const query = { email: usersData.email };
  const options = { new: true, upsert: true, setDefaultsOnInsert: true };
  const updatedDoc = {
    $set: {
      email: usersData.email,
      name: usersData.displayName,
      emailVerified: usersData.emailVerified,
      phoneNumber: usersData.phoneNumber,
      photoURL: usersData.photoURL,
      uid: usersData.uid,
      type: usersData.type,
    },
  };
  const result = await Users.findOneAndUpdate(query, updatedDoc, options);
  res.send(result);
};

module.exports = putUserWithEmail;
