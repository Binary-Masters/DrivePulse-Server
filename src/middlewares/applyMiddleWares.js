const express = require("express");
const cors = require("cors");
require("dotenv").config();

const applyMiddleWares = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors({
    origin: [
      'https://drive-pulse-client.vercel.app',
      'https://drive-pulse-client-o4xyvfe9b-binarymasters-projects.vercel.app',
      'http://localhost:3000',
      'http://localhost:3001'
  ],
  credentials: true
  }));
};
module.exports = applyMiddleWares;
