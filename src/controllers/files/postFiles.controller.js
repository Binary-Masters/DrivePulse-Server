const Filenode = require("../../models/filenode/filenode.model");
const convertMetadataToNode = require("../../utils/convertMetadataToNode");

<<<<<<< HEAD
const postFiles = async (req, res, next) => {
  const fileMetadata = req.body;
  // Spliting path string by directory
  const pathArr = fileMetadata.fullPath.split("/");
  fileMetadata.rootDirectory = pathArr[0] + "/";

  pathArr.pop(); // Removing current node
  if (fileMetadata.type === "folder") pathArr.pop();
  pathArr.push("");
  const parentPath = pathArr.join("/");

  // Assigning parent directory and root directory
  fileMetadata.parentPath = parentPath;

  const result = await Filenode.create(fileMetadata);
  res.send(result);
};
=======
const postFiles = async(req, res, next) => {
	const fileMetadata = req.body;
	
	const node = convertMetadataToNode(fileMetadata);
	
	const result = await Filenode.create(node)
	res.send(result)
}
>>>>>>> 78e74824dd7e2f92184770bfe9dc683205f93a5f

module.exports = postFiles;
