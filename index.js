require("dotenv").config();
const http = require("http");
const app = require("./src/app");
const conncectDB = require("./src/db/connectDB");
const server = http.createServer(app);

const port = process.env.PORT || 3001;

const main = async () => {
  await conncectDB();

const serverConnect =   server.listen(port, () => {
  console.log(
    `Drive pulse server is running on port http://localhost:${port}`
  );
});

const io = require("socket.io")(serverConnect,{
  pingTimeOut: 60000,
  cors: {
    origin: [
      "http://localhost:3000",
      "https://drive-pulse-client.vercel.app",
      "https://drive-pulse-client-o4xyvfe9b-binarymasters-projects.vercel.app",
    ],
  },
});

  let users = [];

const addUser = (userId, socketId) => {
  if (userId !== null) {
    !users.some((user) => user.userId === userId) &&
      users.push({ userId, socketId });
    console.log("users--", users);
  } else {
    console.error("Invalid userId:", userId);
  }
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId) || null;
};


io.on("connection", (socket) => {

  socket.on("setup", (userData) => {
    socket.join(userData?._id);
    socket.emit("connected");
  }
  )
  socket.emit("connection-status"," a user connected.");

  socket.on("addUsers", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    // const receiver = getUser(receiverId);
    console.log(receiverId);
    if (!receiverId) {
      console.error("User not found with ID:", receiverId);
      socket.emit("errorMessage", "User not found. Please try again later.");
      return;
    }

    try {
      socket.in(receiverId).emit("getMessage", {senderId, receiverId, text});
    } catch (error) {
      console.error("Error occurred while sending message:", error);
      socket.emit("errorMessage", "Failed to send message. Please try again later.");
    }
  });

  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });

  socket.on("error", (error) => {
    console.error("Socket error:", error);
    // Handle socket errors
  });
});
};

main();