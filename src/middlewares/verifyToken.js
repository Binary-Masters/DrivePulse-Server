const jwt = require("jsonwebtoken");
const verifyToken = async (req, res, next) => {
  const token = req?.cookies?.token;
  //   console.log(token);
  if (!token) {
    return res.status(401).send({ message: "UnAuthorized Access" });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "UnAuthorized Access" });
    }
    req.user = decoded;
    next();
  });
};

module.exports = verifyToken;
