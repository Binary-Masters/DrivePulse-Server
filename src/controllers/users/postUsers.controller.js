const Users = require("../../models/users/users.model");

const postUsers = async (req, res) => {
  const usersData = req.body;
  const query = { email: usersData.email };
  const exestingUser = await Users.findOne(query);
  if (exestingUser) {
    return res.send({ user: false });
  }

  const result = await Users.create(usersData);
  res.send(result);
};

module.exports = postUsers;
