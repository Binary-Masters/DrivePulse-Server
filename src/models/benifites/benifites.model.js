const mongoose = require("mongoose");

const benifitesSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    icon: String,
  },
  {
    timestamps: true,
  }
);

const Benifite = mongoose.model("Benifites", benifitesSchema);

module.exports = Benifite;
