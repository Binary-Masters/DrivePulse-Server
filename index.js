require("dotenv").config();
const http = require("http");
const app = require("./src/app");
const connectDB = require("./src/db/connectDB");
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
  try {
    await connectDB();
    server.listen(port, () => {
      console.log(`Drive pulse server is running on port http://localhost:${port}`);
    });

    let users = [];

    const addUser = (userId, socketId) => {
      if (userId) {
        if (!users.some((user) => user.userId === userId)) {
          users.push({ userId, socketId });
          console.log("users--", users);
        } else {
          console.error("User already exists:", userId);
        }
      } else {
        console.error("Invalid userId:", userId);
      }
    };

    const removeUser = (socketId) => {
      users = users.filter((user) => user.socketId !== socketId);
    };

    const getUser = (userId) => {
      return users.find((user) => user.userId === userId);
    };

    io.on("connection", (socket) => {
      console.log("a user connected.");

      socket.on("addUsers", (userId) => {
        addUser(userId, socket.id);
        io.emit("getUsers", users);
      });

      socket.on("sendMessage", ({ senderId, receiverId, text }) => {
        try {
          const user = getUser(receiverId);
          if (!user) {
            throw new Error("User not found");
          }
          io.to(user.socketId).emit("getMessage", {
            senderId,
            text,
          });
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
  } catch (error) {
    console.error("Error occurred during startup:", error);
    process.exit(1); // Exit with error status
  }
};

main();
