const Filenode = require("../../models/filenode/filenode.model");

const getSearchFiles = async (req, res) => {
  const data = req.query;
  //   console.log(data);
  //   console.log(data.searchText);
  //   console.log(data.userId);
  const searchText = data.searchText;
  const userId = data.userId;
  const filter = {
    "owner.uid": userId,
    name: { $regex: new RegExp(searchText, "i") },
  };
  const result = await Filenode.find(filter);
  console.log(result);
  res.send(result);
};

module.exports = getSearchFiles;
