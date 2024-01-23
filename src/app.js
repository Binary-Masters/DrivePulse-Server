const express = require("express");
const app = express();
const connectDB = require("./db/connectDB");
const benifitesRouter = require("./routes/BenifitesRoute/benifitesRouter");
const pricingRouter = require("./routes/PricingRoute/pricingRouter");
require("dotenv").config();
const applyMiddleWares = require("./middlewares/applyMiddleWares");
const port = process.env.PORT || 2727;
applyMiddleWares(app);

app.use(benifitesRouter);
app.use(pricingRouter);
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

const main = async () => {
  await connectDB();
  app.listen(port, async (req, res) => {
    console.log(`Drive Pulse Server Is Running On : http://localhost:${port}`);
  });
};

main();
