const Filenode = require("../../models/filenode/filenode.model");

const postFiles = async(req, res, next) => {
	const fileMetadata = req.body;
	
	// Spliting path string by directory
	const pathArr = fileMetadata.fullPath.split("/")
	const parentDirectory = pathArr[pathArr.length - 2];
	
	// Assigning parent directory and root directory
	fileMetadata.parentDirectory = parentDirectory;
	fileMetadata.rootDirectory = pathArr[0];
	
	const result = await Filenode.create(fileMetadata)
	res.send(result)
}

module.exports = postFiles;
