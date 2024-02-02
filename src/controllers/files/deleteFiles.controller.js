const Filenode = require("../../models/filenode/filenode.model");

const deleteFiles = async(req, res, next) => {
	const fullPath = req.query.fullPath
	const query = { fullPath };
	const result = await Filenode.deleteOne( query );
	res.send(result);
}

module.exports = deleteFiles;
