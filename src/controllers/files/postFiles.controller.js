const Filenode = require("../../models/filenode/filenode.model");

const postFiles = async(req, res, next) => {
	const fileMetadata = req.body;
	
	// Spliting path string by directory
	const pathArr = fileMetadata.fullPath.split("/")
	fileMetadata.rootDirectory = pathArr[0] + "/";
	
	pathArr.pop() // Removing current node
	if(fileMetadata.type === "folder") pathArr.pop()
	pathArr.push("")
	const parentPath = pathArr.join("/");
	
	// Assigning parent directory and root directory
	fileMetadata.parentPath = parentPath;
	console.log(fileMetadata);
	
	const result = await Filenode.create(fileMetadata)
	res.send(result)
}

module.exports = postFiles;
