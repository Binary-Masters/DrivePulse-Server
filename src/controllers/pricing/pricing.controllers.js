const Pricing = require("../../models/pricing/pricing.model");

const pricingControl = async (req, res, next) => {
  try {
    const result = await Pricing.find({});
    res.send(result);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = pricingControl;
