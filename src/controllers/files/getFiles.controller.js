const Filenode = require("../../models/filenode/filenode.model");

const getFiles = async(req, res, next) => {
	const rootDirectory = req.query.rootdir;
	console.log(rootDirectory);
	
	const filter = { rootDirectory };
	const result = await Filenode.find(filter)
	console.log(result);
	res.send(result);
}

module.exports = getFiles;
