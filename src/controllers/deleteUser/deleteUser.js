const admin = require("firebase-admin");
// import admin from 'firebase-admin';
const serviceAccount = require("../../../serviceAccountKey.json");
// Admin power
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const Users = require("../../models/users/users.model");

const deleteUser = async (req, res) => {
  const userId = req.body.userId;
  console.log("User Id = ", userId);
  console.log("user hitted");
  admin
    .auth()
    .deleteUser(userId)
    .then(() => {
      console.log("Successfully deleted user");
    })
    .catch((error) => {
      console.error("Error deleting user:", error);
    });
  const stringUserId = userId.toString();
  const query = { uid: stringUserId };
  const result = await Users.deleteOne(query);
  res.send(result);
};

module.exports = deleteUser;
