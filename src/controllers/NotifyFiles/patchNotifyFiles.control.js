const Filenode = require("../../models/filenode/filenode.model");

const patchNotifyFiles = async (req, res, next) => {
  const uid = req.query.uid;

  const filter = {
    "owner.uid": uid, // To get files under specific folder
  };
  const update = {
    $set: {
      "owner.status": 1,
    },
  };
  const options = {
    multi: true,
  };

  const result = await Filenode.updateMany(filter, update, options);
  res.send(result);
};

module.exports = patchNotifyFiles;
