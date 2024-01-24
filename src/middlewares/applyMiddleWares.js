const express = require("express");
const cors = require("cors");
require("dotenv").config();

const applyMiddleWares = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    cors({
      origin: [process.env.LOCAL_CLIENT, process.env.CLIENT],
      credentials: true,
    })
  );
};
module.exports = applyMiddleWares;
