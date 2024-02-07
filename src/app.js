// Essentials
require("dotenv").config();
const express = require("express");
const app = express();
const applyMiddleWares = require("./middlewares/applyMiddleWares");

// Routes
const benifitesRouter = require("./routes/BenifitesRoute/benifitesRouter");
const pricingRouter = require("./routes/PricingRoute/pricingRouter");
const filesRouter = require("./routes/FilesRoute/filesRouter");
const usersRouter = require("./routes/UsersRouter/usersRouter");
const userRoute = require("./routes/UserRoute/userRoute");
const allUsersRoute = require("./routes/GetAllUsersRoute/getAllUsersRoute");

applyMiddleWares(app);

app.use(benifitesRouter);
app.use(pricingRouter);
app.use(filesRouter);
app.use(usersRouter);
app.use(userRoute);
app.use(allUsersRoute);

app.get("/", async (req, res) => {
  res.send("Drive Pulse Server Is Running");
});

app.all("*", async (req, res, next) => {
  const error = new Error(`The requested url in invalid: [${req.url}]`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = app;
