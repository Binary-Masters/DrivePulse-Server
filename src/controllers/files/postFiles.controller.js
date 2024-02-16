const Filenode = require("../../models/filenode/filenode.model");
const convertMetadataToNode = require("../../utils/convertMetadataToNode");

const postFiles = async(req, res, next) => {
	const fileMetadata = req.body;
	
	const node = convertMetadataToNode(fileMetadata);
	
	const result = await Filenode.create(node)
	res.send(result)
}

module.exports = postFiles;
