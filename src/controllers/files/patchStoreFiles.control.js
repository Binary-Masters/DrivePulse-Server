const Filenode = require("../../models/filenode/filenode.model");

const patchStoreFiles = async (req, res, next) => {
  const id = req.query.id;
  const data = req.body;

  const filter = {
    _id: id, // To get files under a specific folder
  };
  const update = {
    $set: {
      store: data.store,
    },
  };
  const options = {
    multi: true, // Assuming you want to update multiple documents if they match the filter
  };

  const result = await Filenode.updateOne(filter, update, options);
  res.send(result);
};

module.exports = patchStoreFiles;
