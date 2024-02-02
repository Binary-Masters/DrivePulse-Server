const Benifite = require("../../models/benifites/benifites.model");

const benifiteControl = async (req, res, next) => {
  try {
    const result = await Benifite.find({});
    res.send(result);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = benifiteControl;
