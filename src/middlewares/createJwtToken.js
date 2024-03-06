const jwt = require("jsonwebtoken");

const createJwtToken = async (req, res) => {
  const email = req.body;
  // console.log(email);
  const token = jwt.sign(email, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });
  res
    .cookie("token",token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    .send({ success: true });
};

module.exports = createJwtToken;
