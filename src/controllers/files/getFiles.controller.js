const Filenode = require("../../models/filenode/filenode.model");

const getFiles = async(req, res, next) => {
	const rootDirectory = req.query.rootdir;
	const path = req.query.path;
	
	const filter = { 
		rootDirectory: `${rootDirectory}/`,
		parentPath: rootDirectory + path // To get files under specific folder
	};
	const result = await Filenode.find(filter)
	res.send(result);
}

module.exports = getFiles;
