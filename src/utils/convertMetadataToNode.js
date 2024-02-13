// Converts folders and files to nodes to simplify database entries
const convertMetadataToNode = (metadata) => {
	// Spliting path string by directory
	const pathArr = metadata.fullPath.split("/")
	metadata.rootDirectory = pathArr[0] + "/";
	
	pathArr.pop() // Removing current node
	if(metadata.type === "folder") pathArr.pop()
	pathArr.push("")
	const parentPath = pathArr.join("/");
	
	// Assigning parent directory and root directory
	metadata.parentPath = parentPath;
	
	return metadata // Metadata is converted to node
}

module.exports = convertMetadataToNode;
