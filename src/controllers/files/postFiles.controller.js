const Filenode = require("../../models/filenode/filenode.model");
const convertMetadataToNode = require("../../utils/convertMetadataToNode");

const postFiles = async (req, res, next) => {
  const fileMetadata = req.body;
  //   console.log("FileMetaData = ", fileMetadata);
  if (fileMetadata.bucket) {
    // new file creation when user upload file.
    const node = convertMetadataToNode(fileMetadata);
    // console.log("Node=", node);
    const result = await Filenode.create(node);
    res.send(result);
  } else {
    // File Renaming start here
    const id = fileMetadata.id;
    const filter = { _id: id };
    const rename = {
      $set: {
        name: fileMetadata.name,
      },
    };
    const result = await Filenode.findOneAndUpdate(filter, rename);
    res.send(result);
  }
};

module.exports = postFiles;
