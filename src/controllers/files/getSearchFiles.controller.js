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
    name: searchText,
  };
  const result = await Filenode.findOne(filter);
  res.send(result);
};

module.exports = getSearchFiles;
