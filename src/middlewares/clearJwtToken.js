
const clearJwtToken = async (req, res) => {
  const email = req.body;
  // console.log(email);
  res.clearCookie("token", { maxAge: 0 })   // clear token from cookie when user logout
  .send({ success: true });
};

module.exports = clearJwtToken;
