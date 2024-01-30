require("dotenv").config();
const http = require("http");
const app = require("./src/app");
const conncectDB = require("./src/db/connectDB");

const server = http.createServer(app);

const port = process.env.PORT || 5000;

const main = async () => {
  await conncectDB();
  server.listen(port, () => {
    console.log(`DrivePulse server is running on port ${port}`);
  });
};

main();
