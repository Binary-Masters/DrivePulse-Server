const mongoose = require("mongoose");

const pricingSchema = new mongoose.Schema(
  {
    recommended: String,
    price: Number,
    benifit1: String,
    benifit2: String,
    benifit3: String,
    benifit4: String,
    btnColor: String,
  },
  {
    timestamps: true,
  }
);

const Pricing = mongoose.model("Pricings", pricingSchema);

module.exports = Pricing;
