require("dotenv").config();
const http = require("http");
const app = require("./src/app");
const conncectDB = require("./src/db/connectDB");
const io = require("socket.io")({
  cors: {
    origin: [
      "http://localhost:3000",
      "https://drive-pulse-client.vercel.app",
      "https://drive-pulse-client-o4xyvfe9b-binarymasters-projects.vercel.app",
    ],
  },
});
const server = http.createServer(app);

const port = process.env.PORT || 3001;

const main = async () => {
  await conncectDB();
  server.listen(port, () => {
    console.log(
      `Drive pulse server is running on port http://localhost:${port}`
    );
  });

  let activeUsers = [];

  io.on("connection", (socket) => {
    // add new User
    socket.on("new-user-add", (newUserId) => {
      // if user is not added previously
      if (!activeUsers.some((user) => user.userId === newUserId)) {
        activeUsers.push({ userId: newUserId, socketId: socket.id });
        console.log("New User Connected", activeUsers);
      }
      // send all active users to new user
      //   console.log("connected user", activeUsers);
      io.emit("get-users", activeUsers);
    });

    socket.on("disconnect", () => {
      // remove user from active users
      activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);
      console.log("User Disconnected", activeUsers);
      // send all active users to all users
      io.emit("get-users", activeUsers);
    });

    // send message to a specific user
    socket.on("send-message", (data) => {
      const { receiverId } = data;
      const user = activeUsers.find((user) => user.userId === receiverId);
      console.log("Sending from socket to :", receiverId);
      console.log("Data: ", data);
      if (user) {
        io.to(user.socketId).emit("recieve-message", data);
      }
    });
  });
};

main();
