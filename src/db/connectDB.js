const mongoose = require("mongoose");
require("dotenv").config();
const userDB = process.env.DB_USER;
const passDB = process.env.DB_PASS;

const getConnectionURI = () => {
  let connectionURI;
  connectionURI = process.env.DB_URI;

  connectionURI = connectionURI.replace("<username>", userDB);
  connectionURI = connectionURI.replace("<password>", passDB);

  return connectionURI;
};
const connectDB = async () => {
  try {
    const uri = getConnectionURI();
    await mongoose.connect(uri, {
      dbName: process.env.DB_NAME,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit the process with an error code
  }
};


module.exports = connectDB;
