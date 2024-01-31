const Filenode = require("../../models/filenode/filenode.model");

const getFiles = async(req, res, next) => {
	res.send("To get files");
}

module.exports = getFiles;
